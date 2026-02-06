mapboxgl.accessToken = 'pk.eyJ1IjoiZmxhcmVpdW0iLCJhIjoiY21qaXF4eDRyMTQ5ZjNlcTF2c3Ntd3NzOSJ9.jb1Fbw5JUyvBJ2czkccBXA';
// Last updated: 2026-01-23T00:17:00 - All zone color mappings complete

// ===== OFFICIAL MANDAUE CITY ZONING MAP 2019–2029 =====
// Authoritative zone colors per official municipal zoning ordinance
const OFFICIAL_ZONE_COLORS = {
    // Commercial Zones
    "C-I": {
        color: "#C53D3F",
        label: "General Commercial C-I",
        allows_house: true,
        allows_mall: true,
        allows_factory: false,
        notes: "Primary commercial zone with mixed-use development"
    },
    "C-II": {
        color: "#B42F2F",
        label: "General Commercial C-II",
        allows_house: true,
        allows_mall: true,
        allows_factory: false,
        notes: "Secondary commercial zone with residential integration"
    },
    "C-III": {
        color: "#8F1D23",
        label: "General Commercial C-III",
        allows_house: true,
        allows_mall: true,
        allows_factory: false,
        notes: "Tertiary commercial zone"
    },
    "CCC": {
        color: "#E69CE1",
        label: "City Core Commercial",
        allows_house: false,
        allows_mall: true,
        allows_factory: false,
        notes: "Central business district with high-rise commercial development"
    },
    // Full name variant
    "City Core Commercial": {
        color: "#E69CE1",
        label: "City Core Commercial",
        allows_house: false,
        allows_mall: true,
        allows_factory: false,
        notes: "Central business district with high-rise commercial development"
    },
    // Numbered variants (as they appear in GeoJSON)
    "C-1": {
        color: "#C53D3F",
        label: "General Commercial C-I",
        allows_house: true,
        allows_mall: true,
        allows_factory: false,
        notes: "Primary commercial zone with mixed-use development"
    },
    "C-2": {
        color: "#B42F2F",
        label: "General Commercial C-II",
        allows_house: true,
        allows_mall: true,
        allows_factory: false,
        notes: "Secondary commercial zone with residential integration"
    },
    "C-3": {
        color: "#8F1D23",
        label: "General Commercial C-III",
        allows_house: true,
        allows_mall: true,
        allows_factory: false,
        notes: "Tertiary commercial zone"
    },

    // Industrial Zones
    "I-II": {
        color: "#D40FA6",
        label: "General Industrial I-II",
        allows_house: false,
        allows_mall: true,
        allows_factory: true,
        notes: "Medium industrial zone with commercial allowances"
    },
    "I-III": {
        color: "#980A6D",
        label: "General Industrial I-III",
        allows_house: false,
        allows_mall: true,
        allows_factory: true,
        notes: "Light industrial zone with commercial integration"
    },
    // Numbered variants (as they appear in GeoJSON)
    "I-2": {
        color: "#D40FA6",
        label: "General Industrial I-II",
        allows_house: false,
        allows_mall: true,
        allows_factory: true,
        notes: "Medium industrial zone with commercial allowances"
    },
    "I-3": {
        color: "#980A6D",
        label: "General Industrial I-III",
        allows_house: false,
        allows_mall: true,
        allows_factory: true,
        notes: "Light industrial zone with commercial integration"
    },

    // Residential Zones
    "LDR": {
        color: "#C4D61F",
        label: "Light Density Residential",
        allows_house: true,
        allows_mall: false,
        allows_factory: false,
        notes: "Low-density residential areas with single-family housing"
    },
    "Light Density Residential": {
        color: "#C4D61F",
        label: "Light Density Residential",
        allows_house: true,
        allows_mall: false,
        allows_factory: false,
        notes: "Low-density residential areas with single-family housing"
    },
    "MDR": {
        color: "#BBAD43",
        label: "Medium Density Residential",
        allows_house: true,
        allows_mall: false,
        allows_factory: false,
        notes: "Medium-density residential with townhouses and low-rise apartments"
    },
    "Medium Density Residential": {
        color: "#BBAD43",
        label: "Medium Density Residential",
        allows_house: true,
        allows_mall: false,
        allows_factory: false,
        notes: "Medium-density residential with townhouses and low-rise apartments"
    },
    "HDR": {
        color: "#C6983B",
        label: "High Density Residential",
        allows_house: true,
        allows_mall: false,
        allows_factory: false,
        notes: "High-density residential with multi-family housing and condominiums"
    },
    "High Density Residential": {
        color: "#C6983B",
        label: "High Density Residential",
        allows_house: true,
        allows_mall: false,
        allows_factory: false,
        notes: "High-density residential with multi-family housing and condominiums"
    },
    "SH": {
        color: "#90633A",
        label: "Socialized Housing",
        allows_house: true,
        allows_mall: false,
        allows_factory: false,
        notes: "Affordable housing zones for low-income families"
    },
    "Socialized Housing": {
        color: "#90633A",
        label: "Socialized Housing",
        allows_house: true,
        allows_mall: false,
        allows_factory: false,
        notes: "Affordable housing zones for low-income families"
    },
    // Typo variant in GeoJSON
    "Socialize Housing": {
        color: "#90633A",
        label: "Socialized Housing",
        allows_house: true,
        allows_mall: false,
        allows_factory: false,
        notes: "Affordable housing zones for low-income families"
    },

    // Environmental & Open Space Zones
    "Parks and Open Spaces": {
        color: "#88A331",
        label: "Parks and Open Spaces",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Public parks, recreation areas, and open spaces"
    },
    "POS": {
        color: "#88A331",
        label: "Parks and Open Spaces",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Public parks, recreation areas, and open spaces"
    },
    "Cemeteries": {
        color: "#A8D52F",
        label: "Cemeteries",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Cemetery and memorial park zones"
    },
    "CEM": {
        color: "#A8D52F",
        label: "Cemeteries",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Cemetery and memorial park zones"
    },
    "Mangrove Areas": {
        color: "#256623",
        label: "Mangrove Areas",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Protected mangrove forest areas"
    },
    "MANG": {
        color: "#256623",
        label: "Mangrove Areas",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Protected mangrove forest areas"
    },
    "50 Meter Green Corridor (Butuanon River)": {
        color: "#10850F",
        label: "50m Green Corridor (Butuanon River)",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Protected green corridor along Butuanon River"
    },
    "GC50": {
        color: "#10850F",
        label: "50m Green Corridor (Butuanon River)",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Protected green corridor along Butuanon River"
    },
    "Aquaculture": {
        color: "#31969C",
        label: "Aquaculture",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Aquaculture and fishpond zones"
    },

    // Institutional Zones
    "Government (Institutional)": {
        color: "#1418BC",
        label: "Government (Institutional)",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Government buildings and institutional facilities"
    },
    "GOV": {
        color: "#1418BC",
        label: "Government (Institutional)",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Government buildings and institutional facilities"
    },
    "Historical Strip": {
        color: "#7745A8",
        label: "Historical Strip",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Protected historical and cultural heritage zones"
    },
    "HIST": {
        color: "#7745A8",
        label: "Historical Strip",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Protected historical and cultural heritage zones"
    },

    // Special Economic Zones
    "PEZA": {
        color: "#6B7280",
        label: "PEZA",
        allows_house: false,
        allows_mall: true,
        allows_factory: true,
        notes: "Philippine Economic Zone Authority special economic zone"
    },
    "PUD": {
        color: "#4B5563",
        label: "PUD",
        allows_house: true,
        allows_mall: true,
        allows_factory: false,
        notes: "Planned Unit Development with mixed uses"
    },
    "RTD": {
        color: "#9CA3AF",
        label: "Recreation and Tourism Development",
        allows_house: false,
        allows_mall: true,
        allows_factory: false,
        notes: "Tourism and recreation development zones"
    },
    "Recreation and Tourism Devt": {
        color: "#9CA3AF",
        label: "Recreation and Tourism Development",
        allows_house: false,
        allows_mall: true,
        allows_factory: false,
        notes: "Tourism and recreation development zones"
    },
    "UTIL": {
        color: "#111111",
        label: "Utilities",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Utility infrastructure and service facilities"
    },
    "Utilities": {
        color: "#111111",
        label: "Utilities",
        allows_house: false,
        allows_mall: false,
        allows_factory: false,
        notes: "Utility infrastructure and service facilities"
    }
};

// Function to enhance GeoJSON features with official zone properties
function enhanceFeatureV2(feature) {
    const zoneCode = feature.properties.Zone_code;
    const zoneData = OFFICIAL_ZONE_COLORS[zoneCode];

    if (!zoneData) {
        console.warn(`⚠️ Unknown zone code: "${zoneCode}" - using fallback gray color`);
        return {
            type: "Feature",
            properties: {
                Zone_code: zoneCode,
                name: `${zoneCode} Zone`,
                zone: zoneCode || "Unknown",
                color: "#888888",
                allows_house: false,
                allows_mall: false,
                allows_factory: false,
                notes: "Zone information not available in official mapping",
                floodRisk: "unknown"
            },
            geometry: feature.geometry
        };
    }

    return {
        type: "Feature",
        properties: {
            Zone_code: zoneCode,
            name: `${zoneData.label}`,
            zone: zoneData.label,
            color: zoneData.color,
            allows_house: zoneData.allows_house,
            allows_mall: zoneData.allows_mall,
            allows_factory: zoneData.allows_factory,
            notes: zoneData.notes,
            floodRisk: "moderate" // Default, can be enhanced with actual flood data
        },
        geometry: feature.geometry
    };
}

// Load real GeoJSON data from Mandaue Map V2
let zoningData = {
    type: "FeatureCollection",
    features: []
};

// Async function to load and enhance the Mandaue Map V2 GeoJSON
async function loadMandaueZonesV2() {
    try {
        console.log('🗺️  Loading embedded Mandaue GeoJSON data...');

        // Use the embedded data instead of fetch
        const geojson = MANDAUE_GEOJSON_DATA;

        console.log(`📊 GeoJSON loaded successfully, raw features: ${geojson.features.length}`);

        // Enhance each feature with official zone properties
        zoningData = {
            type: "FeatureCollection",
            name: "Mandaue_Map_V2",
            crs: geojson.crs,
            features: geojson.features.map(enhanceFeatureV2)
        };

        // Log zone statistics
        const zoneCounts = {};
        zoningData.features.forEach(f => {
            const code = f.properties.Zone_code;
            zoneCounts[code] = (zoneCounts[code] || 0) + 1;
        });

        console.log(`✅ Loaded ${zoningData.features.length} zones from embedded data`);
        console.log('📋 Zone distribution:', zoneCounts);

        return zoningData;
    } catch (error) {
        console.error('❌ Error loading Mandaue zones:', error);
        console.error('Error details:', error.message);
        console.warn('⚠️  Map will continue with empty zones. Check that mandaue-data.js is loaded before app.js');
        return zoningData;
    }
}
// ===== FLOOD RISK ZONES =====
/* const floodRiskZones = {
    type: "FeatureCollection",
    features: [
        // Example structure for your new zones:
        {
            type: "Feature",
            properties: {
                risk: "critical",  // Options: "critical", "high", "moderate", "low"
                name: "Zone Name Here",
                details: "Description of flood risk",
                depth: "Water depth range (e.g., 6-9 feet)",
                frequency: "How often it floods",
                lastIncident: "Most recent flooding event"
            },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [longitude, latitude],  // Draw your polygon points here
                    [longitude, latitude],
                    [longitude, latitude],
                    [longitude, latitude],  // Close the polygon (first point = last point)
                ]]
            }
        }
        // Add more zones by copying the structure above
    ]
}; */

// [Link Flood Data here]

// currentData removed - now using zoningData directly after async V2 loading

function computeBoundsFromGeoJSON(fc) {
    const bounds = new mapboxgl.LngLatBounds();
    fc.features.forEach(f => {
        const coords = f.geometry.coordinates[0];
        coords.forEach(([lng, lat]) => bounds.extend([lng, lat]));
    });
    return bounds;
}

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [123.93, 10.33],
    zoom: 12.5,
    pitch: 0,
    bearing: 0
});

// - Jericho: State management to prevent layer conflicts
// Track all layer states to ensure proper coordination
let layerStates = {
    terrain: false,
    buildings: false,
    flood: false,
    river: false,
    contour: false
};

// - Jericho: Layer loading tracker to prevent race conditions
let layersLoaded = {
    dem: false,
    waterways: false,
    buildings: false,
    contours: false
};

map.on('load', async () => {
    console.log('🗺️  Map loaded, initializing sources and layers...');

    // - Jericho: Initialize all map sources first to prevent undefined source errors
    // DEM source for terrain
    map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14
    });
    layersLoaded.dem = true;

    // - Jericho: Add flood risk source early to ensure it's available
    map.addSource('flood-risk', {
        type: 'geojson',
        data: floodRiskZones
    });
    console.log('✅ Flood risk source added');

    // Load real Mandaue Map V2 GeoJSON data
    await loadMandaueZonesV2();
    console.log(`✅ Zone data loaded, features count: ${zoningData.features.length}`);

    // - Jericho: Add zoning source with loaded V2 data
    map.addSource('zones', {
        type: 'geojson',
        data: zoningData
    });
    console.log('✅ Zones source added to map');

    // - Jericho: Create all layers in proper z-order (bottom to top)
    // This prevents layering issues when multiple features are enabled

    // 1. Hillshade (terrain base)
    map.addLayer({
        id: 'hillshade',
        type: 'hillshade',
        source: 'mapbox-dem',
        layout: { visibility: 'none' },
        paint: {
            'hillshade-exaggeration': 0,
            'hillshade-shadow-color': '#000000',
            'hillshade-highlight-color': '#ffffff',
            'hillshade-illumination-direction': 315
        }
    });

    // 2. Flood risk zones (below zones and buildings)
    map.addLayer({
        id: 'flood-risk-fill',
        type: 'fill',
        source: 'flood-risk',
        layout: { visibility: 'none' },
        paint: {
            'fill-color': [
                'match',
                ['get', 'risk'],
                'critical', '#d32f2f',
                'high', '#ff7043',
                'moderate', '#ffb74d',
                'low', '#fff59d',
                '#888888'
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        id: 'flood-risk-outline',
        type: 'line',
        source: 'flood-risk',
        layout: { visibility: 'none' },
        paint: {
            'line-color': [
                'match',
                ['get', 'risk'],
                'critical', '#d32f2f',
                'high', '#ff7043',
                'moderate', '#ffb74d',
                'low', '#fff59d',
                '#888888'
            ],
            'line-width': 1.5,
            'line-opacity': 0.7
        }
    });

    // - Jericho: Water body layers from Mapbox
    map.addLayer({
        id: 'mapbox-water-bodies',
        type: 'fill',
        source: 'composite',
        'source-layer': 'water',
        layout: { visibility: 'none' },
        paint: {
            'fill-color': '#1e40af',
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        id: 'mapbox-waterways-glow',
        type: 'line',
        source: 'composite',
        'source-layer': 'waterway',
        layout: { visibility: 'none' },
        paint: {
            'line-color': '#3b82f6',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                11, ['case', ['==', ['get', 'class'], 'river'], 10, 6],
                13, ['case', ['==', ['get', 'class'], 'river'], 24, 12],
                15, ['case', ['==', ['get', 'class'], 'river'], 44, 20],
                17, ['case', ['==', ['get', 'class'], 'river'], 68, 32]
            ],
            'line-opacity': 0.25,
            'line-blur': 8
        }
    });

    map.addLayer({
        id: 'mapbox-waterways',
        type: 'line',
        source: 'composite',
        'source-layer': 'waterway',
        layout: { visibility: 'none' },
        paint: {
            'line-color': '#1e40af',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                11, ['case', ['==', ['get', 'class'], 'river'], 4, 2],
                13, ['case', ['==', ['get', 'class'], 'river'], 10, 4],
                15, ['case', ['==', ['get', 'class'], 'river'], 18, 8],
                17, ['case', ['==', ['get', 'class'], 'river'], 36, 14]
            ],
            'line-opacity': 0.85
        }
    });

    // 4. Zoning layers
    map.addLayer({
        id: 'zones-fill',
        type: 'fill',
        source: 'zones',
        layout: { visibility: 'visible' },
        paint: {
            'fill-color': ['get', 'color'],
            'fill-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                0.65,
                0.45
            ]
        }
    });

    map.addLayer({
        id: 'zones-outline',
        type: 'line',
        source: 'zones',
        layout: { visibility: 'visible' },
        paint: {
            'line-color': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                '#ffffff',
                '#e5e7eb'
            ],
            'line-width': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                2.5,
                1.5
            ],
            'line-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                1,
                0.5
            ]
        }
    });

    // 5. 3D Buildings (on top when enabled)
    map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 14,
        layout: { visibility: 'none' },
        paint: {
            'fill-extrusion-color': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                '#38bdf8',
                '#6b7280'
            ],
            'fill-extrusion-height': [
                'interpolate', ['linear'], ['zoom'],
                14, 0,
                14.5, ['get', 'height']
            ],
            'fill-extrusion-base': [
                'interpolate', ['linear'], ['zoom'],
                14, 0,
                14.5, ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.7
        }
    });

    // - Jericho: Search functionality with proper error handling
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    let searchMarker = null;

    searchInput.addEventListener('input', async (e) => {
        const query = e.target.value.trim();

        if (query.length < 3) {
            searchResults.innerHTML = '';
            return;
        }

        try {
            const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?` +
                `proximity=123.93,10.33&` +
                `bbox=123.85,10.25,124.00,10.40&` +
                `types=poi,address,place&` +
                `limit=8&` +
                `country=PH&` +
                `access_token=${mapboxgl.accessToken}`
            );

            const data = await response.json();

            if (data.features && data.features.length > 0) {
                searchResults.innerHTML = data.features.map(feature => {
                    const name = feature.text || feature.place_name;
                    const category = feature.properties?.category || '';
                    const address = feature.place_name;

                    return `
            <div class="search-result-item" data-lng="${feature.center[0]}" data-lat="${feature.center[1]}">
              <div class="search-result-title">${name}${category ? ' · ' + category : ''}</div>
              <div class="search-result-address">${address}</div>
            </div>
          `;
                }).join('');

                document.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const lng = parseFloat(item.dataset.lng);
                        const lat = parseFloat(item.dataset.lat);

                        if (searchMarker) searchMarker.remove();

                        searchMarker = new mapboxgl.Marker({ color: '#3b82f6' })
                            .setLngLat([lng, lat])
                            .addTo(map);

                        map.flyTo({
                            center: [lng, lat],
                            zoom: 16,
                            duration: 1500
                        });

                        searchInput.value = item.querySelector('.search-result-title').textContent;
                        searchResults.innerHTML = '';
                    });
                });
            } else {
                searchResults.innerHTML = '<div style="padding:16px 20px; color:#6b7280; font-size:14px; text-align:center; background:#fff;">No results found in Mandaue</div>';
            }
        } catch (error) {
            console.error('Search error:', error);
            searchResults.innerHTML = '<div style="padding:16px 20px; color:#ef4444; font-size:14px; text-align:center; background:#fff;">Search failed. Try again.</div>';
        }
    });

    // - Jericho: Cursor interaction and hover state for zones
    let hoveredZoneId = null;

    map.on('mouseenter', 'zones-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer';
        if (e.features.length > 0) {
            if (hoveredZoneId !== null) {
                map.setFeatureState(
                    { source: 'zones', id: hoveredZoneId },
                    { hover: false }
                );
            }
            hoveredZoneId = e.features[0].id;
            map.setFeatureState(
                { source: 'zones', id: hoveredZoneId },
                { hover: true }
            );
        }
    });

    map.on('mouseleave', 'zones-fill', () => {
        map.getCanvas().style.cursor = '';
        if (hoveredZoneId !== null) {
            map.setFeatureState(
                { source: 'zones', id: hoveredZoneId },
                { hover: false }
            );
        }
        hoveredZoneId = null;
    });

    // - Jericho: Enhanced popup for zone clicks
    map.on('click', 'zones-fill', (e) => {
        const f = e.features && e.features[0];
        if (!f) return;

        const p = f.properties || {};
        const name = p.name ?? "Unnamed Zone";
        const zone = p.zone ?? "Unknown Zone";
        const notes = p.notes ?? "";
        const floodRisk = p.floodRisk ?? "unknown";

        const riskColor = floodRisk === 'critical' ? '#d32f2f' :
            floodRisk === 'high' ? '#ff7043' :
                floodRisk === 'moderate' ? '#ffb74d' : '#fff59d';
        const riskText = floodRisk === 'critical' ? 'CRITICAL RISK' :
            floodRisk === 'high' ? 'HIGH RISK' :
                floodRisk === 'moderate' ? 'MODERATE RISK' : 'LOW RISK';

        const allowedUses = [];
        if (p.allows_house) allowedUses.push('Residential');
        if (p.allows_mall) allowedUses.push('Commercial');
        if (p.allows_factory) allowedUses.push('Industrial');
        const usageText = allowedUses.length > 0 ? allowedUses.join(', ') : 'Restricted';

        new mapboxgl.Popup({ closeButton: true, closeOnClick: true, maxWidth: '300px' })
            .setLngLat(e.lngLat)
            .setHTML(`
          <div style="color:#111; font-family:system-ui,sans-serif; font-size:13px;">
            <strong style="font-size:15px; color:#1f2937;">${name}</strong><br>
            <div style="margin:8px 0 12px 0; padding:8px 0; border-bottom:1px solid #e5e7eb;">
              <small style="color:#666; display:block; font-weight:600;">ZONE TYPE</small>
              <small style="color:#374151; font-weight:500;">${zone}</small>
            </div>
            <div style="margin:0 0 12px 0; padding:8px; background:${riskColor}; color:#fff; border-radius:6px; text-align:center; font-weight:bold; font-size:11px;">
              FLOOD RISK: ${riskText}
            </div>
            <div style="margin:0 0 12px 0; padding:8px 0; border-bottom:1px solid #e5e7eb;">
              <small style="color:#666; display:block; font-weight:600;">PERMITTED USES</small>
              <small style="color:#374151;">${usageText}</small>
            </div>
            <small style="color:#6b7280; line-height:1.5;">${notes}</small>
            ${p.population ? `<br><small style="color:#6b7280; margin-top:8px; display:block;"><strong>Population:</strong> ${p.population}</small>` : ''}
            ${p.businesses ? `<small style="color:#6b7280; display:block;"><strong>Businesses:</strong> ${p.businesses}</small>` : ''}
            ${p.facilities ? `<small style="color:#6b7280; display:block;"><strong>Facilities:</strong> ${p.facilities}</small>` : ''}
          </div>
        `)
            .addTo(map);
    });

    // - Jericho: Enhanced popup for flood zone clicks
    map.on('click', 'flood-risk-fill', (e) => {
        const f = e.features && e.features[0];
        if (!f) return;

        const risk = f.properties.risk;
        const riskColor = risk === 'critical' ? '#d32f2f' :
            risk === 'high' ? '#ff7043' :
                risk === 'moderate' ? '#ffb74d' : '#fff59d';
        const riskLabel = risk === 'critical' ? 'CRITICAL' :
            risk === 'high' ? 'HIGH' :
                risk === 'moderate' ? 'MODERATE' : 'LOW';

        new mapboxgl.Popup({ closeButton: true, closeOnClick: true })
            .setLngLat(e.lngLat)
            .setHTML(`
          <div style="color:#111; font-family:system-ui,sans-serif; font-size:13px; max-width:300px;">
            <div style="background:${riskColor}; color:#fff; padding:12px; border-radius:8px; text-align:center; font-weight:bold; margin-bottom:12px; font-size:13px;">
              ${riskLabel} FLOOD RISK ZONE
            </div>
            <strong style="color:#333; font-size:14px;">${f.properties.name}</strong><br>
            <div style="margin:10px 0; padding:10px; background:#f3f4f6; border-radius:6px;">
              <small style="color:#666; line-height:1.6;"><strong>Details:</strong> ${f.properties.details}</small>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px;">
              <div style="padding:8px; background:#fef2f2; border-radius:6px;">
                <small style="color:#991b1b; font-weight:600; display:block; font-size:10px; text-transform:uppercase;">Typical Depth</small>
                <small style="color:#7f1d1d; font-size:11px;">${f.properties.depth || 'Variable'}</small>
              </div>
              <div style="padding:8px; background:#fef2f2; border-radius:6px;">
                <small style="color:#991b1b; font-weight:600; display:block; font-size:10px; text-transform:uppercase;">Frequency</small>
                <small style="color:#7f1d1d; font-size:11px;">${f.properties.frequency || 'Unknown'}</small>
              </div>
            </div>
            ${f.properties.lastIncident ?
                    `<div style="margin-top:10px; padding:8px; background:#fffbeb; border-radius:6px;">
                <small style="color:#92400e; font-size:11px;"><strong>Last Incident:</strong> ${f.properties.lastIncident}</small>
              </div>` : ''
                }
          </div>
        `)
            .addTo(map);
    });

    map.on('mouseenter', 'flood-risk-fill', () => map.getCanvas().style.cursor = 'pointer');
    map.on('mouseleave', 'flood-risk-fill', () => map.getCanvas().style.cursor = '');

    // - Jericho: Toggle button handlers with proper state management
    // Each toggle properly manages its layer visibility and camera position

    document.getElementById('terrainBtn').addEventListener('click', function () {
        layerStates.terrain = !layerStates.terrain;

        if (layerStates.terrain) {
            map.setTerrain({ source: 'mapbox-dem', exaggeration: 3 });
            map.setLayoutProperty('hillshade', 'visibility', 'visible');

            // - Jericho: Only adjust pitch if buildings aren't already controlling it
            if (!layerStates.buildings) {
                map.easeTo({ pitch: 60, duration: 1000 });
            }

            this.classList.add('active');
        } else {
            map.setTerrain(null);
            map.setLayoutProperty('hillshade', 'visibility', 'none');

            // - Jericho: Only reset pitch if buildings layer isn't active
            if (!layerStates.buildings) {
                map.easeTo({ pitch: 0, duration: 1000 });
            }

            this.classList.remove('active');
        }
    });

    document.getElementById('buildingsBtn').addEventListener('click', function () {
        layerStates.buildings = !layerStates.buildings;

        if (layerStates.buildings) {
            map.setLayoutProperty('3d-buildings', 'visibility', 'visible');

            // - Jericho: Set optimal viewing angle for buildings
            map.easeTo({
                pitch: 60,
                bearing: -17.6,
                duration: 1000
            });

            this.classList.add('active');
        } else {
            map.setLayoutProperty('3d-buildings', 'visibility', 'none');

            // - Jericho: Only reset camera if terrain isn't maintaining the pitch
            if (!layerStates.terrain) {
                map.easeTo({
                    pitch: 0,
                    bearing: 0,
                    duration: 1000
                });
            }

            this.classList.remove('active');
        }
    });

    document.getElementById('floodBtn').addEventListener('click', function () {
        layerStates.flood = !layerStates.flood;
        const visibility = layerStates.flood ? 'visible' : 'none';

        map.setLayoutProperty('flood-risk-fill', 'visibility', visibility);
        map.setLayoutProperty('flood-risk-outline', 'visibility', visibility);

        this.classList.toggle('active');
    });

    document.getElementById('riverBtn').addEventListener('click', function () {
        layerStates.river = !layerStates.river;
        const visibility = layerStates.river ? 'visible' : 'none';

        // - Jericho: Toggle all water-related layers together
        map.setLayoutProperty('mapbox-waterways', 'visibility', visibility);
        map.setLayoutProperty('mapbox-waterways-glow', 'visibility', visibility);
        map.setLayoutProperty('mapbox-water-bodies', 'visibility', visibility);

        this.classList.toggle('active');
    });

    document.getElementById('contourBtn').addEventListener('click', function () {
        layerStates.contour = !layerStates.contour;

        if (layerStates.contour) {
            // - Jericho: Create contour layer only when needed to prevent conflicts
            if (!map.getLayer('contours')) {
                map.addLayer({
                    id: 'contours',
                    type: 'line',
                    source: {
                        type: 'vector',
                        url: 'mapbox://mapbox.mapbox-terrain-v2'
                    },
                    'source-layer': 'contour',
                    paint: {
                        'line-color': '#22c55e',
                        'line-width': [
                            'case',
                            ['==', ['%', ['get', 'ele'], 10], 0],
                            1.2,
                            0.6
                        ],
                        'line-opacity': 0.5
                    }
                });
            }
            map.setLayoutProperty('contours', 'visibility', 'visible');
            this.classList.add('active');
        } else {
            if (map.getLayer('contours')) {
                map.setLayoutProperty('contours', 'visibility', 'none');
            }
            this.classList.remove('active');
        }
    });

    // Reset view button
    document.getElementById('resetViewBtn').addEventListener('click', function () {
        map.flyTo({
            center: [123.93, 10.33],
            zoom: 12.5,
            pitch: 0,
            bearing: 0,
            duration: 1000
        });
    });
});

// ==================== ZONE FILTER VISIBILITY TOGGLE ====================
// Track current filter state
let currentFilterType = null;
let hideUnfiltered = true;

// Filter visibility toggle handler
document.getElementById('filterVisibilityToggle').addEventListener('change', function (e) {
    hideUnfiltered = e.target.checked;
    applyCurrentFilter();
});

// Updated filter function with visibility toggle
function setFilter(type, btn) {
    currentFilterType = type;

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    applyCurrentFilter();
}

function applyCurrentFilter() {
    if (currentFilterType === null || currentFilterType === 'none') {
        // Hide all zones when nothing is selected
        map.setLayoutProperty('zones-fill', 'visibility', 'none');
        map.setLayoutProperty('zones-outline', 'visibility', 'none');
        return;
    }

    if (currentFilterType === 'all') {
        // Show all zones when "View All" is selected
        map.setFilter('zones-fill', null);
        map.setFilter('zones-outline', null);
        map.setLayoutProperty('zones-fill', 'visibility', 'visible');
        map.setLayoutProperty('zones-outline', 'visibility', 'visible');
        map.fitBounds(computeBoundsFromGeoJSON(zoningData), { padding: 80, duration: 450 });
        return;
    }

    const key = `allows_${currentFilterType}`;
    const filterExpr = ['==', ['get', key], true];

    if (hideUnfiltered) {
        // Hide zones that don't match the filter
        map.setFilter('zones-fill', filterExpr);
        map.setFilter('zones-outline', filterExpr);
    } else {
        // Show all zones but maintain filter for highlighting
        map.setFilter('zones-fill', null);
        map.setFilter('zones-outline', null);
    }

    // Show the zones layer when filtered
    map.setLayoutProperty('zones-fill', 'visibility', 'visible');
    map.setLayoutProperty('zones-outline', 'visibility', 'visible');

    // Zoom to filtered zones
    const filtered = {
        type: "FeatureCollection",
        features: zoningData.features.filter(
            f => f.properties && f.properties[key] === true
        )
    };

    if (filtered.features.length) {
        map.fitBounds(computeBoundsFromGeoJSON(filtered), { padding: 100, duration: 450 });
    }
}

// Update the existing filter button event listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter, btn));
});

// =====================================================================

// ------------------ Compass UI ------------------
const compassBearingEl = document.getElementById('compassBearing');
const compassNorthEl = document.getElementById('compassNorth');

function getCardinalDirectionSimple(bearing) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(bearing / 45) % 8;
    return directions[index];
}

function updateCompass() {
    const bearing = ((Math.round(map.getBearing()) % 360) + 360) % 360;
    if (compassBearingEl) compassBearingEl.textContent = `${bearing}°`;
    if (compassNorthEl) compassNorthEl.textContent = getCardinalDirectionSimple(bearing);
}

map.on('rotate', updateCompass);
map.on('move', updateCompass);
updateCompass();



// ==================== AI CHATBOT FUNCTIONALITY ====================
// - Jericho: AI-powered chatbot with map control capabilities
// Wrapped in DOMContentLoaded to ensure elements are ready

document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');

    // - Jericho: Map control functions that the AI can call
    const mapControls = {
        toggleFloodLayer: (show) => {
            layerStates.flood = show;
            const visibility = show ? 'visible' : 'none';
            map.setLayoutProperty('flood-risk-fill', 'visibility', visibility);
            map.setLayoutProperty('flood-risk-outline', 'visibility', visibility);
            document.getElementById('floodBtn').classList.toggle('active', show);
            return `Flood risk zones ${show ? 'shown' : 'hidden'}`;
        },

        toggleTerrainLayer: (show) => {
            layerStates.terrain = show;
            if (show) {
                map.setTerrain({ source: 'mapbox-dem', exaggeration: 3 });
                map.setLayoutProperty('hillshade', 'visibility', 'visible');
                if (!layerStates.buildings) {
                    map.easeTo({ pitch: 60, duration: 1000 });
                }
                document.getElementById('terrainBtn').classList.add('active');
            } else {
                map.setTerrain(null);
                map.setLayoutProperty('hillshade', 'visibility', 'none');
                if (!layerStates.buildings) {
                    map.easeTo({ pitch: 0, duration: 1000 });
                }
                document.getElementById('terrainBtn').classList.remove('active');
            }
            return `3D terrain ${show ? 'enabled' : 'disabled'}`;
        },

        toggleBuildingsLayer: (show) => {
            layerStates.buildings = show;
            if (show) {
                map.setLayoutProperty('3d-buildings', 'visibility', 'visible');
                map.easeTo({ pitch: 60, bearing: -17.6, duration: 1000 });
                document.getElementById('buildingsBtn').classList.add('active');
            } else {
                map.setLayoutProperty('3d-buildings', 'visibility', 'none');
                if (!layerStates.terrain) {
                    map.easeTo({ pitch: 0, bearing: 0, duration: 1000 });
                }
                document.getElementById('buildingsBtn').classList.remove('active');
            }
            return `3D buildings ${show ? 'shown' : 'hidden'}`;
        },

        toggleWaterLayer: (show) => {
            layerStates.river = show;
            const visibility = show ? 'visible' : 'none';
            map.setLayoutProperty('mapbox-waterways', 'visibility', visibility);
            map.setLayoutProperty('mapbox-waterways-glow', 'visibility', visibility);
            map.setLayoutProperty('mapbox-water-bodies', 'visibility', visibility);
            document.getElementById('riverBtn').classList.toggle('active', show);
            return `Water bodies ${show ? 'shown' : 'hidden'}`;
        },

        zoomToArea: (area) => {
            const locations = {
                paknaan: { center: [123.940, 10.310], zoom: 15 },
                umapad: { center: [123.938, 10.306], zoom: 15 },
                ibabao: { center: [123.944, 10.323], zoom: 15 },
                estancia: { center: [123.945, 10.326], zoom: 15 },
                casuntingan: { center: [123.939, 10.347], zoom: 15 },
                maguikay: { center: [123.943, 10.337], zoom: 15 },
                tabok: { center: [123.946, 10.330], zoom: 15 },
                banilad: { center: [123.928, 10.355], zoom: 15 },
                subangdaku: { center: [123.925, 10.320], zoom: 15 },
                tingub: { center: [123.943, 10.341], zoom: 15 },
                cabancalan: { center: [123.930, 10.358], zoom: 15 },
                canduman: { center: [123.938, 10.358], zoom: 15 },
                'alang-alang': { center: [123.942, 10.317], zoom: 15 },
                'butuanon-river': { center: [123.940, 10.330], zoom: 13 },
                'as-fortuna': { center: [123.922, 10.340], zoom: 15 }
            };

            const location = locations[area.toLowerCase()];
            if (location) {
                map.flyTo({ center: location.center, zoom: location.zoom, duration: 2000 });
                return `Zoomed to ${area}`;
            }
            return `Area ${area} not found`;
        },

        showAllLayers: () => {
            mapControls.toggleFloodLayer(true);
            mapControls.toggleWaterLayer(true);
            return 'All visualization layers enabled';
        }
    };

    // !!! IMPORTANT: UPDATE THIS URL WITH YOUR ACTUAL RENDER URL !!!
    // It usually looks like: https://belabot-api.onrender.com/chat
    const BACKEND_URL = "https://belabot.onrender.com/chat";

    let conversationHistory = [];

    // - Jericho: Cleaned up chatbot toggle (No more API key prompt!)
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('open');
        if (chatbotWindow.classList.contains('open')) {
            chatbotToggle.classList.add('hidden');
            chatbotInput.focus();
        } else {
            chatbotToggle.classList.remove('hidden');
        }
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('open');
        chatbotToggle.classList.remove('hidden');
    });

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        messageDiv.textContent = content;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addSystemMessage(content) {
        addMessage(content, 'system');
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function hideTypingIndicator() {
        const typingDiv = document.getElementById('typingIndicator');
        if (typingDiv) typingDiv.remove();
    }

    // - Jericho: AI message sending that talks to your Secure Backend
    async function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        addMessage(message, 'user');
        chatbotInput.value = '';
        chatbotSend.disabled = true;
        showTypingIndicator();

        try {
            // - Jericho: Define AI function tools for map interaction
            const tools = [
                {
                    type: "function",
                    function: {
                        name: "toggle_flood_layer",
                        description: "Show or hide flood risk zones on the map",
                        parameters: {
                            type: "object",
                            properties: {
                                show: { type: "boolean", description: "true to show, false to hide" }
                            },
                            required: ["show"]
                        }
                    }
                },
                {
                    type: "function",
                    function: {
                        name: "toggle_terrain",
                        description: "Enable or disable 3D terrain visualization",
                        parameters: {
                            type: "object",
                            properties: {
                                show: { type: "boolean", description: "true to enable, false to disable" }
                            },
                            required: ["show"]
                        }
                    }
                },
                {
                    type: "function",
                    function: {
                        name: "toggle_buildings",
                        description: "Show or hide 3D buildings on the map",
                        parameters: {
                            type: "object",
                            properties: {
                                show: { type: "boolean", description: "true to show, false to hide" }
                            },
                            required: ["show"]
                        }
                    }
                },
                {
                    type: "function",
                    function: {
                        name: "toggle_water_bodies",
                        description: "Show or hide water bodies including Butuanon River",
                        parameters: {
                            type: "object",
                            properties: {
                                show: { type: "boolean", description: "true to show, false to hide" }
                            },
                            required: ["show"]
                        }
                    }
                },
                {
                    type: "function",
                    function: {
                        name: "zoom_to_area",
                        description: "Zoom the map to a specific area or barangay in Mandaue",
                        parameters: {
                            type: "object",
                            properties: {
                                area: {
                                    type: "string",
                                    enum: ["paknaan", "umapad", "ibabao", "estancia", "casuntingan", "maguikay", "tabok", "banilad", "subangdaku", "tingub", "cabancalan", "canduman", "alang-alang", "butuanon-river", "as-fortuna"],
                                    description: "The area to zoom to"
                                }
                            },
                            required: ["area"]
                        }
                    }
                },
                {
                    type: "function",
                    function: {
                        name: "show_all_layers",
                        description: "Enable all visualization layers (flood zones and water bodies)",
                        parameters: { type: "object", properties: {} }
                    }
                }
            ];

            const systemPrompt = `You are BelaBot, a friendly and helpful assistant for Zone|Lens - the Mandaue City Flood Risk Analysis and Zoning Map application.

Your role is to help users understand:
- Zoning districts and what's allowed in each area
- Flood risk levels and safety recommendations
- How to use the map features
- Historical flood data and affected areas

IMPORTANT GUIDELINES:
1. Answer questions using information from the Zone|Lens User Manual
2. Be conversational and helpful - speak naturally without technical jargon
3. Never mention internal function names or technical implementation details
4. When helping users with map controls, describe what will happen in user-friendly terms
5. Provide specific, actionable information (addresses, risk levels, permitted uses)
6. If asked about map layers, you can show/hide them for the user
7. IMPORTANT: You have access to map tools. When you use a tool (like zooming or showing layers), DO NOT announce it. DO NOT say 'I will use the map tool' or 'I have updated the map'. Just answer the user's question naturally as if the map changed by magic. Never mention function names like 'flyTo' or 'setPaintProperty'.

KNOWLEDGE BASE:

FLOOD RISK LEVELS:
- CRITICAL (dark red): 6-9 feet flooding, roof-level. Evacuate during typhoons. Areas: Paknaan-Umapad, Ibabao-Estancia, Casuntingan, Maguikay-Tabok footbridge.
- HIGH (red): 2-8 feet flooding, chest to 2nd floor. Monitor alerts. Areas: Alang-Alang, Tingub Extended.
- MODERATE (orange): 6 inches to 2 feet, street to knee-deep. Avoid low areas in heavy rain. Areas: Banilad-A.S. Fortuna, Cabancalan-Canduman.
- LOW (yellow): Under 6 inches, minor street flooding. Generally safe. Areas: Eastern elevated zones, western periphery.

KEY FACTS:
- Butuanon River is the main flood source (23km long)
- 29,000+ people evacuated in November 2025
- 675 houses destroyed in December 2022 Casuntingan flood
- 27 barangays are officially flood-prone
- Data from MCDRRMO 2022-2025

MAP FEATURES YOU CAN CONTROL:
- Flood Risk Zones: Show color-coded flood risk areas
- 3D Terrain: Display elevation and hills
- 3D Buildings: Show building heights
- Water Bodies: Display rivers and streams
- Elevation Lines: Show topographic contours

RESPONSE STYLE:
- Use simple, clear language
- Provide specific examples and locations
- Give practical recommendations
- Be empathetic about flood risks
- Don't use markdown, asterisks, or special formatting
- Speak naturally as if chatting with a friend`;


            conversationHistory.push({ role: 'user', content: message });

            // - Jericho: UPDATED to call your secure Render backend instead of Groq directly
            let response = await fetch(BACKEND_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // No API Key needed here! It's safe on the server.
                },
                body: JSON.stringify({
                    messages: [
                        { role: 'system', content: systemPrompt },
                        ...conversationHistory
                    ],
                    tools: tools
                })
            });

            hideTypingIndicator();

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `Server error: ${response.status}`);
            }

            let data = await response.json();
            let assistantMessage = data.choices[0].message;

            // - Jericho: Handle function calls from AI
            if (assistantMessage.tool_calls && assistantMessage.tool_calls.length > 0) {
                conversationHistory.push(assistantMessage);

                for (const toolCall of assistantMessage.tool_calls) {
                    const functionName = toolCall.function.name;
                    const functionArgs = JSON.parse(toolCall.function.arguments);

                    let result;
                    switch (functionName) {
                        case 'toggle_flood_layer':
                            result = mapControls.toggleFloodLayer(functionArgs.show);
                            break;
                        case 'toggle_terrain':
                            result = mapControls.toggleTerrainLayer(functionArgs.show);
                            break;
                        case 'toggle_buildings':
                            result = mapControls.toggleBuildingsLayer(functionArgs.show);
                            break;
                        case 'toggle_water_bodies':
                            result = mapControls.toggleWaterLayer(functionArgs.show);
                            break;
                        case 'zoom_to_area':
                            result = mapControls.zoomToArea(functionArgs.area);
                            break;
                        case 'show_all_layers':
                            result = mapControls.showAllLayers();
                            break;
                        default:
                            result = 'Function not found';
                    }

                    conversationHistory.push({
                        role: 'tool',
                        tool_call_id: toolCall.id,
                        content: result
                    });
                }

                // - Jericho: Get final response after function execution
                // We call the backend again with the tool results
                showTypingIndicator();
                response = await fetch(BACKEND_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        messages: [
                            { role: 'system', content: systemPrompt },
                            ...conversationHistory
                        ],
                        tools: tools // We must send tools again so it knows it can use them
                    })
                });

                hideTypingIndicator();
                data = await response.json();
                assistantMessage = data.choices[0].message;
            }

            const aiResponse = assistantMessage.content;
            conversationHistory.push({ role: 'assistant', content: aiResponse });
            addMessage(aiResponse, 'ai');

            // - Jericho: Keep conversation manageable
            if (conversationHistory.length > 10) {
                conversationHistory = conversationHistory.slice(-10);
            }

        } catch (error) {
            hideTypingIndicator();
            console.error('Chatbot error:', error);
            addSystemMessage("Sorry, I'm having trouble connecting to the server. Please try again later.");
        } finally {
            chatbotSend.disabled = false;
            chatbotInput.focus();
        }
    }
});
