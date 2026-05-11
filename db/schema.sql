-- Zone-Lens: Flood Risk Zones
-- Requires MySQL 8.0+ with spatial support enabled
-- SRID 4326 = WGS-84 (matches GeoJSON / Leaflet / Mapbox)

CREATE DATABASE IF NOT EXISTS zone_lens
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE zone_lens;

CREATE TABLE IF NOT EXISTS flood_risk_zones (
    id          INT UNSIGNED    NOT NULL AUTO_INCREMENT,
    var         FLOAT           NOT NULL COMMENT 'Flood risk level (1=low, 2=moderate, 3=high, etc.)',
    geometry    MULTIPOLYGON    NOT NULL SRID 4326,
    created_at  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    SPATIAL INDEX idx_geometry (geometry)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
