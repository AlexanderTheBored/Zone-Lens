# Zone|Lens – Mandaue Zoning Laws And Flood Risk Analysis

ZoneGuide is a Mapbox GL-based web application for visualizing zoning districts and flood risk zones in Mandaue City. It provides interactive layers, search, a compass widget, and a BelaBot assistant for exploring the map and understanding the data. This project is our entry to the Sinulog Hackathon: Hackestate 3.0 Grand Finals.

## Features

- Zoning district overlays with detailed popups
- Flood risk zones with depth, frequency, and incident metadata
- Map layer toggles for terrain, buildings, water bodies, and contours
- Address and POI search constrained to Mandaue City
- Compass display for map bearing
- BelaBot chatbot interface with map controls via a backend API

## Project Structure

- `index.html` – App layout and UI markup
- `styles.css` – Visual styling for controls, legend, search, and chatbot
- `app.js` – Map configuration, data, layer logic, and chatbot integration

## Getting Started and How It Works

ZoneGuide is a static, front-end Mapbox GL app that runs entirely in the browser. The JavaScript file initializes the map, registers GeoJSON sources for zoning and flood risk, and wires up UI controls (filters, toggles, search, and chatbot). The app does not require a build step. The Mapbox access token in `app.js` is currently configured and working for our team’s use.

### Libraries and Services Used

- **Mapbox GL JS** for map rendering, basemap styling, 3D terrain, and 3D buildings.
- **Mapbox Geocoding API** for the search box, scoped to Mandaue City.
- **Custom GeoJSON** embedded in `app.js` for zoning and flood-risk datasets.
- **BelaBot backend** (custom API) for chatbot responses and map-control tools.

### Running Locally (Optional)

If you need to run the app locally with your own token, follow these steps:

1. Obtain a Mapbox access token.
2. Update `mapboxgl.accessToken` in `app.js` with your token.
3. Serve the directory with a static server:

```bash
python -m http.server 8080
```

4. Open `http://localhost:8080` in your browser.

### How the Core Pieces Work

- **Map initialization**: `app.js` creates the Mapbox map, adds data sources, and builds layers in a deliberate z-order for clear overlays.
- **Zoning + flood overlays**: GeoJSON features are rendered as fill and outline layers with color mapping for categories and risk levels.
- **Filters and toggles**: Buttons control layer visibility and filtering for zoning types (residential, industrial, commercial).
- **Search**: Calls the Mapbox Geocoding API and flies the map to the selected result.
- **BelaBot chatbot**: Sends user messages to a backend endpoint, receives responses, and can trigger map actions (like toggling layers or zooming to areas).

## Backend for BelaBot

The chatbot expects a backend endpoint for AI responses. Update the `BACKEND_URL` constant in `app.js` to point to your service.

## Data Notes

The zoning and flood risk datasets are embedded in `app.js` for prototyping purposes. For production use, consider moving them to external GeoJSON files or an API.

