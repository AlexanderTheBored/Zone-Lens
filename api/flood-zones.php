<?php
/**
 * Flood Risk Zones — CRUD API
 *
 * GET    /api/flood-zones.php              → FeatureCollection (all zones, paginated)
 * GET    /api/flood-zones.php?id=N         → single Feature
 * GET    /api/flood-zones.php?bbox=w,s,e,n → FeatureCollection clipped to bounding box
 * GET    /api/flood-zones.php?page=N&limit=N (default limit=500)
 * POST   /api/flood-zones.php              → create zone (GeoJSON Feature body)
 * PUT    /api/flood-zones.php?id=N         → replace zone (GeoJSON Feature body)
 * DELETE /api/flood-zones.php?id=N         → delete zone
 */

declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once __DIR__ . '/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$id     = isset($_GET['id']) ? (int) $_GET['id'] : null;

try {
    $pdo = get_db();

    match ($method) {
        'GET'    => handle_get($pdo, $id),
        'POST'   => handle_post($pdo),
        'PUT'    => handle_put($pdo, $id),
        'DELETE' => handle_delete($pdo, $id),
        default  => json_error(405, 'Method not allowed'),
    };
} catch (PDOException $e) {
    json_error(500, 'Database error: ' . $e->getMessage());
} catch (InvalidArgumentException $e) {
    json_error(400, $e->getMessage());
}

// ---------------------------------------------------------------------------

function handle_get(PDO $pdo, ?int $id): void
{
    if ($id !== null) {
        $row = $pdo->prepare("
            SELECT id, var, ST_AsGeoJSON(geometry) AS geom
            FROM flood_risk_zones
            WHERE id = ?
        ");
        $row->execute([$id]);
        $zone = $row->fetch();

        if (!$zone) {
            json_error(404, 'Zone not found');
        }

        echo json_encode(row_to_feature($zone), JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
        return;
    }

    // Bounding box filter: ?bbox=minLon,minLat,maxLon,maxLat
    $bbox_sql = '';
    $bbox_params = [];
    if (!empty($_GET['bbox'])) {
        $parts = array_map('floatval', explode(',', $_GET['bbox']));
        if (count($parts) !== 4) {
            throw new InvalidArgumentException('bbox must be minLon,minLat,maxLon,maxLat');
        }
        [$min_lon, $min_lat, $max_lon, $max_lat] = $parts;

        // ST_MakeEnvelope is not available in MySQL; use ST_GeomFromText with a polygon
        $bbox_sql   = 'AND ST_Intersects(geometry, ST_GeomFromText(?, 4326))';
        $bbox_params = ["POLYGON(({$min_lon} {$min_lat}, {$max_lon} {$min_lat}, {$max_lon} {$max_lat}, {$min_lon} {$max_lat}, {$min_lon} {$min_lat}))"];
    }

    // Pagination
    $limit  = max(1, min(2000, (int) ($_GET['limit'] ?? 500)));
    $page   = max(1, (int) ($_GET['page'] ?? 1));
    $offset = ($page - 1) * $limit;

    $count_stmt = $pdo->prepare("SELECT COUNT(*) FROM flood_risk_zones WHERE 1=1 {$bbox_sql}");
    $count_stmt->execute($bbox_params);
    $total = (int) $count_stmt->fetchColumn();

    $stmt = $pdo->prepare("
        SELECT id, var, ST_AsGeoJSON(geometry) AS geom
        FROM flood_risk_zones
        WHERE 1=1 {$bbox_sql}
        ORDER BY id
        LIMIT ? OFFSET ?
    ");
    $stmt->execute(array_merge($bbox_params, [$limit, $offset]));
    $rows = $stmt->fetchAll();

    $collection = [
        'type'     => 'FeatureCollection',
        'features' => array_map('row_to_feature', $rows),
        'meta'     => [
            'total'  => $total,
            'page'   => $page,
            'limit'  => $limit,
            'pages'  => (int) ceil($total / $limit),
        ],
    ];

    echo json_encode($collection, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
}

function handle_post(PDO $pdo): void
{
    $feature = parse_body_feature();
    $var     = validate_var($feature);
    $geom    = validate_geometry($feature);

    $stmt = $pdo->prepare("
        INSERT INTO flood_risk_zones (var, geometry)
        VALUES (?, ST_GeomFromGeoJSON(?, 2, 4326))
    ");
    $stmt->execute([$var, $geom]);
    $new_id = (int) $pdo->lastInsertId();

    http_response_code(201);
    header("Location: /api/flood-zones.php?id={$new_id}");

    $row = $pdo->prepare("SELECT id, var, ST_AsGeoJSON(geometry) AS geom FROM flood_risk_zones WHERE id = ?");
    $row->execute([$new_id]);
    echo json_encode(row_to_feature($row->fetch()), JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
}

function handle_put(PDO $pdo, ?int $id): void
{
    if ($id === null) {
        throw new InvalidArgumentException('id is required for PUT');
    }

    $feature = parse_body_feature();
    $var     = validate_var($feature);
    $geom    = validate_geometry($feature);

    $stmt = $pdo->prepare("
        UPDATE flood_risk_zones
        SET var = ?, geometry = ST_GeomFromGeoJSON(?, 2, 4326)
        WHERE id = ?
    ");
    $stmt->execute([$var, $geom, $id]);

    if ($stmt->rowCount() === 0) {
        json_error(404, 'Zone not found');
    }

    $row = $pdo->prepare("SELECT id, var, ST_AsGeoJSON(geometry) AS geom FROM flood_risk_zones WHERE id = ?");
    $row->execute([$id]);
    echo json_encode(row_to_feature($row->fetch()), JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
}

function handle_delete(PDO $pdo, ?int $id): void
{
    if ($id === null) {
        throw new InvalidArgumentException('id is required for DELETE');
    }

    $stmt = $pdo->prepare("DELETE FROM flood_risk_zones WHERE id = ?");
    $stmt->execute([$id]);

    if ($stmt->rowCount() === 0) {
        json_error(404, 'Zone not found');
    }

    http_response_code(204);
}

// ---------------------------------------------------------------------------
// Helpers

function row_to_feature(array $row): array
{
    return [
        'type'       => 'Feature',
        'id'         => $row['id'],
        'properties' => [
            'id'  => $row['id'],
            'Var' => $row['var'],
        ],
        'geometry' => json_decode($row['geom'], flags: JSON_THROW_ON_ERROR),
    ];
}

function parse_body_feature(): array
{
    $body = file_get_contents('php://input');
    if (empty($body)) {
        throw new InvalidArgumentException('Request body is empty');
    }
    $data = json_decode($body, true, 512, JSON_THROW_ON_ERROR);
    if (!is_array($data) || ($data['type'] ?? '') !== 'Feature') {
        throw new InvalidArgumentException('Body must be a GeoJSON Feature object');
    }
    return $data;
}

function validate_var(array $feature): float
{
    $var = $feature['properties']['Var'] ?? null;
    if ($var === null || !is_numeric($var)) {
        throw new InvalidArgumentException('Feature must have a numeric properties.Var');
    }
    return (float) $var;
}

function validate_geometry(array $feature): string
{
    $geom = $feature['geometry'] ?? null;
    if ($geom === null || ($geom['type'] ?? '') !== 'MultiPolygon') {
        throw new InvalidArgumentException('Feature geometry must be a MultiPolygon');
    }
    return json_encode($geom, JSON_THROW_ON_ERROR);
}

function json_error(int $status, string $message): never
{
    http_response_code($status);
    echo json_encode(['error' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}
