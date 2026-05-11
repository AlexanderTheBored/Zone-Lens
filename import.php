<?php
/**
 * One-time import: flood-data.js → MySQL flood_risk_zones table
 *
 * Run from project root:
 *   php import.php
 *
 * Optional env vars (same as api/db.php):
 *   DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS
 *
 * Requires the schema to exist first:
 *   mysql -u root -p < db/schema.sql
 */

declare(strict_types=1);

if (PHP_SAPI !== 'cli') {
    http_response_code(403);
    exit('This script must be run from the command line.');
}

require_once __DIR__ . '/api/db.php';

$source_file = __DIR__ . '/flood-data.js';
if (!file_exists($source_file)) {
    die("Error: flood-data.js not found at {$source_file}\n");
}

// ---- 1. Parse flood-data.js → PHP array ----
echo "Reading flood-data.js ({$source_file})…\n";

$raw = file_get_contents($source_file);

// Strip the JS variable declaration: `const floodRiskZones = { … };`
// The file is: optional whitespace + optional comment lines + `const floodRiskZones =` + JSON + `;`
$json = preg_replace('/^\s*(\/\/[^\n]*\n\s*)*const\s+\w+\s*=\s*/', '', $raw);
$json = rtrim(trim($json), ';');

echo "Parsing JSON…\n";
$collection = json_decode($json, true, 2048, JSON_THROW_ON_ERROR);

if (($collection['type'] ?? '') !== 'FeatureCollection' || !isset($collection['features'])) {
    die("Error: flood-data.js does not contain a valid GeoJSON FeatureCollection.\n");
}

$features = $collection['features'];
$total    = count($features);
echo "Found {$total} features.\n";

// ---- 2. Connect and truncate (fresh import) ----
$pdo = get_db();

echo "Truncating existing data…\n";
$pdo->exec('TRUNCATE TABLE flood_risk_zones');

// ---- 3. Batch insert with transactions (500 rows per batch) ----
$batch_size = 500;
$batches    = array_chunk($features, $batch_size);
$inserted   = 0;

$stmt = $pdo->prepare("
    INSERT INTO flood_risk_zones (var, geometry)
    VALUES (?, ST_GeomFromGeoJSON(?, 2, 4326))
");

foreach ($batches as $batch_num => $batch) {
    $pdo->beginTransaction();
    try {
        foreach ($batch as $feature) {
            $var  = (float) ($feature['properties']['Var'] ?? 0);
            $geom = json_encode($feature['geometry'], JSON_THROW_ON_ERROR);
            $stmt->execute([$var, $geom]);
            $inserted++;
        }
        $pdo->commit();
    } catch (Throwable $e) {
        $pdo->rollBack();
        $batch_start = ($batch_num * $batch_size) + 1;
        die("Error in batch {$batch_num} (features {$batch_start}+): " . $e->getMessage() . "\n");
    }

    $pct = round(($inserted / $total) * 100);
    echo "  Imported {$inserted}/{$total} ({$pct}%)\r";
}

echo "\nDone. {$inserted} zones imported successfully.\n";
