mapboxgl.accessToken = 'pk.eyJ1IjoiZmxhcmVpdW0iLCJhIjoiY21qaXF4eDRyMTQ5ZjNlcTF2c3Ntd3NzOSJ9.jb1Fbw5JUyvBJ2czkccBXA';

  // - Jericho: Expanded and corrected zoning data with more realistic boundaries
  // Added Mixed-Use zone and adjusted polygon coordinates for better accuracy
  const zoningData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Cabancalan–Canduman Residential District",
          zone: "Residential (R-1)",
          color: "#facc15",
          allows_house: true,
          allows_mall: false,
          allows_factory: false,
          notes: "Primary residential area with predominantly low-rise housing and community facilities.",
          floodRisk: "moderate",
          population: "~15,000 residents"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.918, 10.360],
            [123.932, 10.365],
            [123.940, 10.362],
            [123.946, 10.355],
            [123.943, 10.345],
            [123.935, 10.341],
            [123.925, 10.344],
            [123.917, 10.352],
            [123.918, 10.360]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          name: "A.S. Fortuna Commercial Corridor",
          zone: "Commercial (C-2)",
          color: "#3b82f6",
          allows_house: true,
          allows_mall: true,
          allows_factory: false,
          notes: "Major commercial thoroughfare with retail shops, restaurants, and business offices. High traffic area.",
          floodRisk: "high",
          businesses: "250+ establishments"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.913, 10.348],
            [123.930, 10.351],
            [123.937, 10.346],
            [123.932, 10.335],
            [123.923, 10.331],
            [123.911, 10.334],
            [123.909, 10.342],
            [123.913, 10.348]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          name: "Subangdaku–Tingub Industrial Zone",
          zone: "Industrial (I-2)",
          color: "#a855f7",
          allows_house: false,
          allows_mall: true,
          allows_factory: true,
          notes: "Central industrial belt housing manufacturing facilities, warehouses, and logistics centers. Critical flood risk area.",
          floodRisk: "high",
          facilities: "120+ industrial units"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.916, 10.330],
            [123.935, 10.333],
            [123.941, 10.326],
            [123.938, 10.315],
            [123.932, 10.309],
            [123.921, 10.307],
            [123.911, 10.311],
            [123.909, 10.320],
            [123.914, 10.328],
            [123.916, 10.330]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          name: "Banilad Mixed-Use Development",
          zone: "Mixed-Use (MU-1)",
          color: "#10b981",
          allows_house: true,
          allows_mall: true,
          allows_factory: false,
          notes: "Dynamic mixed-use area combining residential, commercial, and institutional uses. Growing business district.",
          floodRisk: "moderate",
          density: "Medium-high density"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.925, 10.355],
            [123.937, 10.358],
            [123.943, 10.352],
            [123.940, 10.345],
            [123.933, 10.342],
            [123.926, 10.346],
            [123.925, 10.355]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          name: "Paknaan–Umapad Residential",
          zone: "Residential (R-1)",
          color: "#facc15",
          allows_house: true,
          allows_mall: false,
          allows_factory: false,
          notes: "Densely populated residential barangays near Butuanon River. Frequent evacuation area during typhoons.",
          floodRisk: "critical",
          population: "~20,000 residents"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.935, 10.305],
            [123.945, 10.310],
            [123.948, 10.305],
            [123.945, 10.298],
            [123.938, 10.295],
            [123.932, 10.298],
            [123.933, 10.303],
            [123.935, 10.305]
          ]]
        }
      },
      {
        type: "Feature",
        properties: {
          name: "Maguikay–Tabok Commercial Strip",
          zone: "Commercial (C-2)",
          color: "#3b82f6",
          allows_house: true,
          allows_mall: true,
          allows_factory: false,
          notes: "Growing commercial area with retail and service businesses. Near major transport routes.",
          floodRisk: "high",
          businesses: "180+ establishments"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.939, 10.332],
            [123.948, 10.336],
            [123.951, 10.330],
            [123.947, 10.323],
            [123.940, 10.320],
            [123.936, 10.325],
            [123.939, 10.332]
          ]]
        }
      }
    ]
  };


  // - Jericho: Enhanced flood risk zones with more detailed documentation
  const floodRiskZones = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { 
          risk: "critical", 
          name: "CRITICAL: Paknaan-Umapad Overflow Corridor",
          details: "Roof-level flooding documented during Typhoon Odette and Paeng. 190+ families regularly evacuated.",
          depth: "6-9 feet (2nd floor to roof level)",
          frequency: "Every typhoon + sustained heavy rainfall",
          lastIncident: "November 2025 - 5,000+ evacuees"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.937, 10.304], [123.945, 10.316], [123.948, 10.316],
            [123.942, 10.304], [123.937, 10.304]
          ]]
        }
      },
      {
        type: "Feature",
        properties: { 
          risk: "critical", 
          name: "CRITICAL: Ibabao-Estancia Major Overflow",
          details: "Primary overflow point during river spill. Water depth exceeds rescue equipment capacity.",
          depth: "5-8 feet (chest to 2nd floor)",
          frequency: "All major storm events",
          lastIncident: "November 2025 - 8,500+ evacuees"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.940, 10.317], [123.948, 10.329], [123.951, 10.329],
            [123.945, 10.317], [123.940, 10.317]
          ]]
        }
      },
      {
        type: "Feature",
        properties: { 
          risk: "critical", 
          name: "CRITICAL: Casuntingan Damaged Riprap Zone",
          details: "675 houses destroyed in December 2022 flood. Riprap damage allows massive overflow.",
          depth: "4-8 feet (waist to 2nd floor)",
          frequency: "Annual recurrence",
          lastIncident: "November 2025 - 12,000+ evacuees"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.935, 10.341], [123.943, 10.353], [123.946, 10.353],
            [123.940, 10.341], [123.935, 10.341]
          ]]
        }
      },
      {
        type: "Feature",
        properties: { 
          risk: "critical", 
          name: "CRITICAL: Maguikay-Tabok Footbridge Area",
          details: "Official overflow monitoring point. Bridge regularly submerges.",
          depth: "3-5 feet (waist to chest)",
          frequency: "Every heavy rainfall event",
          lastIncident: "November 2025 - 3,500+ evacuees"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.939, 10.331], [123.947, 10.343], [123.950, 10.343],
            [123.944, 10.331], [123.939, 10.331]
          ]]
        }
      },
      {
        type: "Feature",
        properties: { 
          risk: "high", 
          name: "HIGH RISK: Alang-Alang Buffer Zone",
          details: "Adjacent to critical overflow areas. Sitio Pulang Bukid frequently affected.",
          depth: "2-4 feet (knee to waist)",
          frequency: "Sustained rainfall periods"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.934, 10.307], [123.937, 10.304], [123.942, 10.304],
            [123.948, 10.316], [123.951, 10.316], [123.951, 10.319],
            [123.937, 10.319], [123.934, 10.307]
          ]]
        }
      },
      {
        type: "Feature",
        properties: { 
          risk: "high", 
          name: "HIGH RISK: Tingub Extended Flood Plain",
          details: "Part of 27 officially designated flood-prone barangays.",
          depth: "1-3 feet (ankle to knee)",
          frequency: "Moderate to heavy rainfall"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.936, 10.337], [123.939, 10.331], [123.944, 10.331],
            [123.950, 10.343], [123.953, 10.343], [123.953, 10.346],
            [123.941, 10.346], [123.936, 10.337]
          ]]
        }
      },
      {
        type: "Feature",
        properties: { 
          risk: "moderate", 
          name: "MODERATE: Banilad-A.S. Fortuna Drainage Area",
          details: "M. Cuenco Ave experiences drainage issues. Rolling Hills area reported waist-deep flooding.",
          depth: "6 inches - 2 feet (street to knee-deep)",
          frequency: "Heavy downpours and monsoon season"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.929, 10.349], [123.937, 10.361], [123.946, 10.361],
            [123.946, 10.349], [123.929, 10.349]
          ]]
        }
      },
      {
        type: "Feature",
        properties: { 
          risk: "moderate", 
          name: "MODERATE: Cabancalan-Canduman Catchment",
          details: "Talamban mini dam provides some flood mitigation.",
          depth: "3-12 inches (street flooding)",
          frequency: "Extreme weather events only"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.924, 10.351], [123.931, 10.366], [123.941, 10.366],
            [123.936, 10.351], [123.924, 10.351]
          ]]
        }
      },
      {
        type: "Feature",
        properties: { 
          risk: "low", 
          name: "LOW RISK: Eastern Elevated Areas",
          details: "Higher elevation zones. Not typically affected except during unprecedented rainfall.",
          depth: "< 6 inches (minor street flooding)",
          frequency: "Rare - only during extreme events"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.950, 10.294], [123.956, 10.294], [123.956, 10.366],
            [123.950, 10.366], [123.950, 10.294]
          ]]
        }
      },
      {
        type: "Feature",
        properties: { 
          risk: "low", 
          name: "LOW RISK: Western Periphery Zone",
          details: "Distance from river overflow zones provides natural protection.",
          depth: "< 3 inches (minimal)",
          frequency: "Very rare"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [123.919, 10.294], [123.934, 10.294], [123.934, 10.366],
            [123.919, 10.366], [123.919, 10.294]
          ]]
        }
      }
    ]
  };

  let currentData = JSON.parse(JSON.stringify(zoningData));

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

  map.on('load', () => {
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
    
    // - Jericho: Add zoning source
    map.addSource('zones', { 
      type: 'geojson', 
      data: currentData 
    });

    // - Jericho: Create all layers in proper z-order (bottom to top)
    // This prevents layering issues when multiple features are enabled
    
    // 1. Hillshade (terrain base)
    map.addLayer({
      id: 'hillshade',
      type: 'hillshade',
      source: 'mapbox-dem',
      layout: { visibility: 'none' },
      paint: {
        'hillshade-exaggeration': 1.5,
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
          'critical', '#b91c1c',
          'high', '#dc2626',
          'moderate', '#f59e0b',
          'low', '#fbbf24',
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
          'critical', '#b91c1c',
          'high', '#dc2626',
          'moderate', '#f59e0b',
          'low', '#fbbf24',
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
      paint: {
        'fill-color': ['get', 'color'],
        'fill-opacity': 0.5
      }
    });

    map.addLayer({
      id: 'zones-outline',
      type: 'line',
      source: 'zones',
      paint: {
        'line-color': '#ffffff',
        'line-width': 2,
        'line-opacity': 0.6
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

    // - Jericho: Cursor interaction for zones
    map.on('mouseenter', 'zones-fill', () => map.getCanvas().style.cursor = 'pointer');
    map.on('mouseleave', 'zones-fill', () => map.getCanvas().style.cursor = '');

    // - Jericho: Fit to zones on initial load
    map.fitBounds(computeBoundsFromGeoJSON(currentData), { padding: 80, duration: 0 });

    // - Jericho: Enhanced popup for zone clicks
    map.on('click', 'zones-fill', (e) => {
      const f = e.features && e.features[0];
      if (!f) return;

      const p = f.properties || {};
      const name = p.name ?? "Unnamed Zone";
      const zone = p.zone ?? "Unknown Zone";
      const notes = p.notes ?? "";
      const floodRisk = p.floodRisk ?? "unknown";
      
      const riskColor = floodRisk === 'critical' ? '#b91c1c' :
                        floodRisk === 'high' ? '#dc2626' : 
                        floodRisk === 'moderate' ? '#f59e0b' : '#22c55e';
      const riskText = floodRisk === 'critical' ? 'CRITICAL RISK' :
                       floodRisk === 'high' ? 'HIGH RISK' : 
                       floodRisk === 'moderate' ? 'MODERATE RISK' : 'LOW RISK';

      new mapboxgl.Popup({ closeButton: true, closeOnClick: true })
        .setLngLat(e.lngLat)
        .setHTML(`
          <div style="color:#111; font-family:system-ui,sans-serif; font-size:13px;">
            <strong style="font-size:15px;">${name}</strong><br>
            <span style="color:#666;">Zone: ${zone}</span><br>
            <div style="margin:8px 0; padding:8px; background:${riskColor}; color:#fff; border-radius:6px; text-align:center; font-weight:bold; font-size:11px;">
              FLOOD RISK: ${riskText}
            </div>
            <small style="color:#666;">${notes}</small>
            ${p.population ? `<br><small style="color:#888;">Population: ${p.population}</small>` : ''}
            ${p.businesses ? `<br><small style="color:#888;">Businesses: ${p.businesses}</small>` : ''}
            ${p.facilities ? `<br><small style="color:#888;">Facilities: ${p.facilities}</small>` : ''}
          </div>
        `)
        .addTo(map);
    });

    // - Jericho: Enhanced popup for flood zone clicks
    map.on('click', 'flood-risk-fill', (e) => {
      const f = e.features && e.features[0];
      if (!f) return;

      const risk = f.properties.risk;
      const riskColor = risk === 'critical' ? '#b91c1c' :
                        risk === 'high' ? '#dc2626' : 
                        risk === 'moderate' ? '#f59e0b' : '#fbbf24';
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

    // - Jericho: Filter buttons for zone types
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => setFilter(btn.dataset.filter, btn));
    });

    // - Jericho: Toggle button handlers with proper state management
    // Each toggle properly manages its layer visibility and camera position
    
    document.getElementById('terrainBtn').addEventListener('click', function() {
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

    document.getElementById('buildingsBtn').addEventListener('click', function() {
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

    document.getElementById('floodBtn').addEventListener('click', function() {
      layerStates.flood = !layerStates.flood;
      const visibility = layerStates.flood ? 'visible' : 'none';
      
      map.setLayoutProperty('flood-risk-fill', 'visibility', visibility);
      map.setLayoutProperty('flood-risk-outline', 'visibility', visibility);
      
      this.classList.toggle('active');
    });

    document.getElementById('riverBtn').addEventListener('click', function() {
      layerStates.river = !layerStates.river;
      const visibility = layerStates.river ? 'visible' : 'none';
      
      // - Jericho: Toggle all water-related layers together
      map.setLayoutProperty('river-glow', 'visibility', visibility);
      map.setLayoutProperty('river-line', 'visibility', visibility);
      map.setLayoutProperty('mapbox-waterways', 'visibility', visibility);
      map.setLayoutProperty('mapbox-waterways-glow', 'visibility', visibility);
      map.setLayoutProperty('mapbox-water-bodies', 'visibility', visibility);
      
      this.classList.toggle('active');
    });

    document.getElementById('contourBtn').addEventListener('click', function() {
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
  });

  // - Jericho: Filter function with proper bounds fitting
  function setFilter(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (type === 'all') {
      map.setFilter('zones-fill', null);
      map.setFilter('zones-outline', null);
      map.fitBounds(computeBoundsFromGeoJSON(currentData), { padding: 80, duration: 450 });
      return;
    }

    const key = `allows_${type}`;
    const filterExpr = ['==', ['get', key], true];

    map.setFilter('zones-fill', filterExpr);
    map.setFilter('zones-outline', filterExpr);

    const filtered = {
      type: "FeatureCollection",
      features: currentData.features.filter(f => f.properties && f.properties[key] === true)
    };

    if (filtered.features.length) {
      map.fitBounds(computeBoundsFromGeoJSON(filtered), { padding: 100, duration: 450 });
    }
  }

// ------------------ Compass UI ------------------
const compassBearingEl = document.getElementById('compassBearing');
const compassNorthEl = document.getElementById('compassNorth');

function getCardinalDirectionSimple(bearing) {
  const directions = ['N','NE','E','SE','S','SW','W','NW'];
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
      map.setLayoutProperty('river-glow', 'visibility', visibility);
      map.setLayoutProperty('river-line', 'visibility', visibility);
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

  let conversationHistory = [];
  let groqApiKey = localStorage.getItem('groqApiKey') || '';

  // - Jericho: Chatbot toggle handlers
  chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('open');
    if (chatbotWindow.classList.contains('open')) {
      chatbotToggle.classList.add('hidden');
      chatbotInput.focus();
      if (!groqApiKey) {
        setTimeout(() => {
          addSystemMessage('To use the AI assistant, you need a Groq API key. Get one free at https://console.groq.com/');
          setTimeout(() => {
            const key = prompt('Please enter your Groq API key:');
            if (key && key.trim()) {
              groqApiKey = key.trim();
              localStorage.setItem('groqApiKey', groqApiKey);
              addSystemMessage('API key saved! You can now ask me questions.');
            }
          }, 500);
        }, 300);
      }
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

  // - Jericho: AI message sending with function calling capability
  async function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;

    if (!groqApiKey) {
      addSystemMessage('Please set your Groq API key first.');
      const key = prompt('Enter your Groq API key:');
      if (key && key.trim()) {
        groqApiKey = key.trim();
        localStorage.setItem('groqApiKey', groqApiKey);
        addSystemMessage('API key saved! Please send your message again.');
      }
      return;
    }

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

      const systemPrompt = `You are Zone Bot, an expert assistant for the Mandaue City Flood Risk Analysis and Zoning Map application. You help users understand zoning districts, flood risks, and map features.

You can interact with the map using these functions:
- toggle_flood_layer: Show/hide flood risk zones
- toggle_terrain: Enable/disable 3D terrain
- toggle_buildings: Show/hide 3D buildings
- toggle_water_bodies: Show/hide rivers and water bodies
- zoom_to_area: Zoom to specific areas (paknaan, banilad, subangdaku, etc.)
- show_all_layers: Enable all visualization layers

ZONING DISTRICTS:
1. Residential (R-1): Cabancalan-Canduman and Paknaan-Umapad areas. Allows houses, no malls/factories. Moderate to critical flood risk.
2. Commercial (C-2): A.S. Fortuna-Banilad corridor and Maguikay-Tabok strip. Permits houses and malls, no factories. High flood risk.
3. Industrial (I-2): Subangdaku-Tingub belt. Allows malls and factories, no houses. High flood risk from Butuanon River.
4. Mixed-Use (MU-1): Banilad area. Combines residential, commercial, institutional uses. Moderate flood risk.

FLOOD RISK ZONES:
1. CRITICAL (dark red): Roof-level flooding 6-9ft. Paknaan-Umapad, Ibabao-Estancia, Casuntingan, Maguikay-Tabok. Evacuation recommended during typhoons.
2. HIGH (red): Chest to 2nd floor flooding 5-8ft. Adjacent to critical zones. Alang-Alang Buffer, Tingub Extended.
3. MODERATE (orange): Knee-deep flooding 2-4ft. Banilad-A.S. Fortuna, Cabancalan-Canduman.
4. LOW (yellow): Minor street flooding under 6 inches. Eastern elevated areas, western periphery.

BUTUANON RIVER: 23km river flowing through Mandaue from mountains to Mactan Channel. Main flood source. Path: Banilad → Cabancalan → Casuntingan → Tingub → Maguikay → Tabok → Ibabao → Alang-alang → Paknaan → Umapad.

MAP FEATURES:
- 3D Terrain: Shows elevation with hillshading, 3x exaggeration
- 3D Buildings: Extrudes buildings to real heights
- Flood Risk Zones: Color-coded risk overlays
- Water Bodies: Rivers, streams, waterways
- Elevation Lines: Topographic contour lines
- Search: Find addresses, buildings, POIs

DATA: MCDRRMO 2022-2025 flood incidents. 29,000+ evacuees Nov 2025. 675 houses destroyed Dec 2022.

Write in clear, natural sentences without markdown formatting. No asterisks or special formatting. Be conversational and helpful.`;

      conversationHistory.push({ role: 'user', content: message });

      let response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqApiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt },
            ...conversationHistory
          ],
          tools: tools,
          tool_choice: "auto",
          temperature: 0.7,
          max_tokens: 500
        })
      });

      hideTypingIndicator();

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API error: ${response.status}`);
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
        showTypingIndicator();
        response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${groqApiKey}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: systemPrompt },
              ...conversationHistory
            ],
            temperature: 0.7,
            max_tokens: 500
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

      if (error.message.includes('401') || error.message.includes('authentication')) {
        addSystemMessage('Invalid API key. Please check your Groq API key.');
        groqApiKey = '';
        localStorage.removeItem('groqApiKey');
      } else if (error.message.includes('rate limit')) {
        addSystemMessage('Rate limit reached. Please wait a moment and try again.');
      } else {
        addSystemMessage(`Error: ${error.message}. Please try again.`);
      }
    } finally {
      chatbotSend.disabled = false;
      chatbotInput.focus();
    }
  }
