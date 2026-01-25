# ZoneLens - Mandaue Flood Risk Analysis User Manual

## Overview
ZoneLens is an interactive map application for analyzing flood risks and zoning regulations in Mandaue City, Philippines. This manual provides information about the city's zoning districts, flood risk zones, and map features, integrating official data from the Mandaue City Planning Office and MCDRRMO.

---

## BelaBot AI Assistant

### What is BelaBot?
BelaBot is your intelligent AI assistant for ZoneGuide. BelaBot can answer questions, provide information, and control map features through natural conversation.

**Key Features:**
- **Natural Language Interface** - Chat naturally, no commands to memorize.
- **Map Control** - Show/hide layers, zoom to areas, toggle 3D views.
- **Expert Knowledge** - Specific information on R-2, C-1, I-3 zones and flood levels.
- **Context-Aware** - Remembers your last 10 messages for better conversations.

### How to Use BelaBot
1. **Open BelaBot:** Click the wizard hat icon (BelaBot button) in the bottom-left corner.
2. **Type Your Question:** Enter your question (e.g., "What is allowed in C-1 zones?").
3. **Press Enter:** BelaBot will respond and automatically update the map if needed.

### What BelaBot Can Do
* **Answer Questions About:** Zoning permitted uses, flood risk levels by barangay, and map legends.
* **Control Map Layers:** "Show me flood zones," "Turn on 3D buildings."
* **Navigate:** "Zoom to Paknaan," "Go to the City Core."

---

## Zoning Districts (Official Classifications)
*Data Source: `Mandaue_Map_V2.geojson` & `app.js` logic*

### Residential Zones
**R-1 (Low Density Residential)**
* **Description:** Low-density single-family residential areas with spacious lots.
* **Permitted:** Single-family homes, duplex units, small gardens, home-based offices.
* **Prohibited:** Multi-story apartments, commercial establishments, industrial activities.

**R-2 (Medium Density Residential)**
* **Description:** Areas for medium-density housing, apartments, and small-scale support services.
* **Permitted:** Apartments, boarding houses, small convenience stores, multi-family dwellings.
* **Prohibited:** Heavy manufacturing, large-scale commercial complexes, billboards.

**R-3 (High Density Residential)**
* **Description:** High-density vertical housing and mixed residential communities.
* **Permitted:** Condominiums, tenements, dormitories, mixed-use residential buildings.
* **Prohibited:** Industrial factories, warehousing, pollutive activities.

**R-4 (Mixed Housing)**
* **Description:** Mixed residential areas allowing diverse housing types and densities.
* **Permitted:** Mix of single-family homes, townhouses, low-rise apartments, neighborhood stores.
* **Prohibited:** Heavy industrial uses, large-scale manufacturing.

**REZA (Residential Economic Zone Area)**
* **Description:** Special residential zones with integrated economic activities.
* **Permitted:** Residential units with ground-floor commercial, live-work spaces, small businesses.
* **Prohibited:** Heavy industrial operations, pollutive activities.

**PUD (Planned Unit Development)**
* **Description:** Comprehensively planned developments with mixed uses and shared amenities.
* **Permitted:** Integrated residential-commercial projects, subdivisions with amenities, gated communities.
* **Prohibited:** Unplanned developments, uses not conforming to approved master plan.

### Commercial Zones
**C-1 (City Core Commercial)**
* **Description:** The central business district and historic core.
* **Permitted:** Retail shops, offices, banks, personal services, small-scale food establishments.
* **Prohibited:** Pollutive industries, large warehousing, trucking garages.

**C-1B2**
* **Description:** Secondary city core commercial zone with specific development standards.
* **Permitted:** Retail establishments, professional offices, restaurants, service businesses.
* **Prohibited:** Heavy industrial uses, large-scale warehousing.

**C-2 (Major Commercial)**
* **Description:** Areas for broader commercial activities along major roads.
* **Permitted:** Shopping centers, mixed-use buildings, larger retail, hardware stores, showrooms.
* **Prohibited:** Heavy industrial manufacturing.

**C-3 (Metropolitan Commercial)**
* **Description:** Regional commercial hubs with high-intensity business use.
* **Permitted:** Large malls, convention centers, high-rise offices, BPO complexes.
* **Prohibited:** Hazardous manufacturing.

### Industrial Zones
**I-1 (Light Industrial)**
* **Description:** Non-pollutive, non-hazardous manufacturing.
* **Permitted:** Small assembly plants, packaging, food processing (small scale), cottage industries.
* **Prohibited:** Chemical processing, heavy machinery manufacturing.

**I-1H (Light Industrial - Hazardous)**
* **Description:** Light industrial with controlled hazardous materials handling.
* **Permitted:** Small-scale chemical processing, regulated hazardous material storage, specialized manufacturing.
* **Prohibited:** Residential use, unregulated hazardous operations.

**I-2 (Medium Industrial)**
* **Description:** Manufacturing with minimal environmental impact.
* **Permitted:** Warehousing, logistics, food manufacturing, assembly of electronics.
* **Prohibited:** Highly pollutive or hazardous industries.

**I-3 (Heavy Industrial)**
* **Description:** Large-scale manufacturing and processing plants.
* **Permitted:** Factories, heavy machinery assembly, chemical processing (regulated), power plants.
* **Prohibited:** Residential use (except for caretaker quarters).

### Institutional & Special Zones
* **G (Government/Institutional):** Public buildings, schools, and government offices.
* **HS (Historical Strip):** Heritage zones protecting historical landmarks (e.g., Plaza Complex).
* **CEM (Cemeteries):** Designated areas for burial grounds and memorial parks.
* **Mangrove Area:** Protected coastal mangrove ecosystems for environmental conservation.
* **Aquaculture:** Designated zones for fish farming, shellfish cultivation, and marine aquaculture operations.
* **Recreation and Tourism Development:** Areas designated for parks, recreational facilities, tourism infrastructure, and eco-tourism projects.
* **Utilities:** Zones reserved for essential infrastructure including power plants, water treatment facilities, telecommunications towers, and utility substations.

---

## Flood Risk Zones
*Data Source: `app.js` Risk Logic*

The application calculates flood risk based on specific barangay locations and proximity to drainage channels.


### Flood Risk (Gray)
* **Estimated Depth:** 1 - 6 feet
* **Characteristics:** Areas adjacent to major drainage channels and creeks. Subject to rapid water rise during heavy rainfall.

---

## Map Features & Layers

### 3D Terrain & Buildings
* **3D Terrain:** Shows elevation with hillshading (3x exaggeration) to visualize water flow.
* **3D Buildings:** Extrudes buildings to real heights (visible at zoom level 14+).

### Data Layers
* **Flood Risk Zones:** Color-coded overlays (Critical to Low) based on the logic defined above.
* **Water Bodies:** Displays the Butuanon River and tributaries with a glow effect.
* **Zoning Map:** Interactive polygons showing R-2, C-1, I-3, etc. Click any zone to see permitted uses.

### Search Function
* Find addresses and places of interest within Mandaue City boundaries. Results appear with markers.

---

## Frequently Asked Questions

### Zoning Questions

**Q: Can I build a factory in a C-1 zone?**
**A:** No. C-1 is for City Core Commercial use (shops, banks). For factories, you must look for **I-1 (Light)**, **I-2 (Medium)**, or **I-3 (Heavy)** Industrial zones.

**Q: Where can I open a large shopping mall?**
**A:** Large malls are best suited for **C-3 (Metropolitan Commercial)** zones, though they are also permitted in **C-2** areas.

**Q: Can I build an apartment in an Industrial zone?**
**A:** Generally, no. **I-3 (Heavy Industrial)** zones prohibit residential use to ensure safety. You should look for **R-2 (Medium Density)** or **R-3 (High Density)** Residential zones.

**Q: What is the "Historical Strip" (HS)?**
**A:** This is a special protection zone, usually around the Plaza and City Hall, designed to preserve heritage landmarks.

### Flood Risk Questions

**Q: Which areas have the absolute highest risk?**
**A:** **Paknaan, Umapad, and Mantuyong** are classified as **CRITICAL RISK**. These areas can experience depths of 6-9 feet during extreme typhoons.

**Q: Is Banilad safe from flooding?**
**A:** Banilad is classified as **MODERATE RISK** (1-3 feet). While safer than critical zones, it still experiences street-level flooding during sustained rains.

**Q: How does the app decide the risk level?**
**A:** The app uses a location-based logic system. If a selected area falls within specific barangays (like Subangdaku), it automatically assigns the corresponding risk level (High) based on historical susceptibility data.

### BelaBot & Technical Questions

**Q: Can BelaBot show me where the I-3 zones are?**
**A:** Yes! Just ask BelaBot "Show me the Heavy Industrial zones" or "Where is I-3?", and it can highlight those areas on the map.

**Q: Does BelaBot work for Cebu City?**
**A:** No. BelaBot and ZoneLens are strictly specialized for **Mandaue City**. Asking about other cities will result in a polite redirection.

**Q: How accurate is the flood data?**
**A:** The risk levels (Critical, High, Moderate, Low) are estimates based on topographical location and historical planning data. It is for planning purposes, not real-time weather monitoring.

---

## Contact Information & Support

### Mandaue City Disaster Risk Reduction and Management Office (MCDRRMO)
* **Emergency Hotline:** 032-345-9876 / 032-346-0001
* **Office Address:** Mandaue City Hall Complex, S.B. Cabahug St., Mandaue City
* **Email:** mcdrrmo@mandauecity.gov.ph
* **Operating Hours:** 24/7 Emergency Response | Mon-Fri 8:00 AM - 5:00 PM (Administrative)

### City Planning and Development Office
* **Telephone:** 032-346-0234
* **Office Address:** 3rd Floor, Mandaue City Hall, Mandaue City, Cebu
* **Email:** planning@mandauecity.gov.ph
* **Operating Hours:** Mon-Fri 8:00 AM - 5:00 PM
* **Services:** Zoning inquiries, building permit assistance, land use consultations

### Technical Support (ZoneLens Application)
* **For application issues, feedback, or feature requests**
* **Email:** support@zonelens.mandaue.gov.ph

---

## Legal Disclaimers & Data Sources

### Official Data Sources
This application integrates data from the following official sources:
* **Zoning Regulations:** Mandaue City Comprehensive Land Use Plan (CLUP) 2019-2029
* **Zoning Map:** Official Mandaue City Zoning Map (August 2024 Edition)
* **Flood Risk Data:** Mandaue City Disaster Risk Reduction and Management Office (MCDRRMO)
* **Flood Hazard Data:** Project NOAH (Nationwide Operational Assessment of Hazards) Philippines - Department of Science and Technology (DOST)
* **Geospatial Data:** `Mandaue_Map_V2.geojson` (City Planning Office)

### Acknowledgments
This application utilizes flood hazard mapping data from **Project NOAH Philippines** (Nationwide Operational Assessment of Hazards), a program of the Department of Science and Technology (DOST). Project NOAH provides critical disaster risk assessment and early warning systems for the Philippines.

* **Project NOAH Website:** [noah.up.edu.ph](https://noah.up.edu.ph) (archived) / [www.dost.gov.ph](https://www.dost.gov.ph)
* **Data License:** Public domain for disaster preparedness and planning purposes
* **Citation:** Department of Science and Technology - Project NOAH. Flood Hazard Maps. Philippines.

> [!NOTE]
> Project NOAH officially concluded operations in 2017, but its flood hazard data remains a valuable reference for local government disaster risk reduction planning. Current flood monitoring is managed by PAGASA and local DRRMO offices.

### Important Disclaimers

> [!WARNING]
> **Flood Risk Estimates:** The flood risk classifications (High) are planning estimates based on historical data and topographical analysis. They are NOT real-time weather predictions. Actual flood conditions may vary based on rainfall intensity, duration, tide levels, and drainage conditions.

> [!IMPORTANT]
> **Zoning Enforcement:** All zoning regulations are enforced by the Mandaue City Planning and Development Office. This application is for informational and planning purposes only. For official zoning certifications, building permits, or legal land use determinations, you MUST consult directly with the City Planning Office.

> [!CAUTION]
> **No Liability:** The City of Mandaue and the developers of ZoneLens are not liable for decisions made based solely on this application. Users are responsible for verifying all information with official city offices before making property, construction, or business decisions.

### Data Currency
* **Last Updated:** January 2026
* **Zoning Regulations Valid Through:** 2029 (subject to amendments)
* Users should verify current regulations with the City Planning Office for the most up-to-date information.

---

## Glossary of Terms

### Zoning & Planning Terms
* **Barangay:** The smallest administrative division in the Philippines, similar to a neighborhood or village.
* **BPO (Business Process Outsourcing):** Call centers and IT-enabled services companies.
* **CLUP (Comprehensive Land Use Plan):** Official city planning document outlining development strategies and zoning.
* **Mixed-Use Development:** Buildings or areas that combine residential, commercial, and/or institutional uses.
* **Permitted Use:** Activities and structures allowed within a specific zoning district.
* **Prohibited Use:** Activities and structures not allowed within a specific zoning district.
* **Setback:** Required distance between a building and property line or street.
* **Variance:** Official permission to deviate from zoning requirements under special circumstances.

### Flood Risk & Disaster Management Terms
* **DRRMO (Disaster Risk Reduction and Management Office):** Local government office responsible for disaster preparedness and response.
* **Drainage Channel:** Natural or man-made waterways designed to carry stormwater runoff.
* **Flood Depth:** Estimated height of water above ground level during flooding events.
* **High-Risk Zone:** Areas prone to significant flooding (4-6 feet depth) requiring evacuation planning.
* **Storm Surge:** Abnormal rise in sea level during typhoons, affecting coastal areas.
* **Tributary:** Smaller stream or river that flows into a larger river (e.g., Butuanon River).

### Geographic & Administrative Terms
* **Mactan Channel:** Body of water separating mainland Cebu from Mactan Island.
* **MCDRRMO:** Mandaue City Disaster Risk Reduction and Management Office.
* **Metro Cebu:** Metropolitan area including Cebu City, Mandaue City, Lapu-Lapu City, and surrounding municipalities.
* **Topography:** Physical features and elevation characteristics of land.

### Zoning District Abbreviations
* **C-1, C-2, C-3:** Commercial zones (City Core, Major, Metropolitan)
* **CEM:** Cemeteries
* **G:** Government/Institutional
* **HS:** Historical Strip
* **I-1, I-2, I-3:** Industrial zones (Light, Medium, Heavy)
* **I-1H:** Light Industrial - Hazardous
* **PUD:** Planned Unit Development
* **R-1, R-2, R-3, R-4:** Residential zones (Low, Medium, High Density, Mixed)
* **REZA:** Residential Economic Zone Area

---

## Privacy & Data Usage

### Information Collection
ZoneLens is designed with user privacy in mind:
* **No Personal Data Collection:** The application does not collect names, addresses, phone numbers, or email addresses.
* **Anonymous Usage:** Map interactions and searches are processed locally in your browser.
* **BelaBot Conversations:** Chat messages are processed to provide responses but are not stored permanently or linked to individual users.

### Data Processing
* **Local Processing:** Most map features operate entirely within your web browser without sending data to external servers.
* **AI Processing:** BelaBot queries may be processed using AI services to generate responses. These queries are anonymized and not linked to personal identities.
* **No Tracking:** ZoneLens does not use cookies or tracking technologies to monitor individual user behavior.

### Data Security
* **Read-Only Access:** The application provides read-only access to public planning data. Users cannot modify official zoning or flood risk information.
* **Secure Connection:** Always access ZoneLens through official Mandaue City government channels to ensure data integrity.

### User Responsibilities
* Users are responsible for how they use information obtained from ZoneLens.
* Do not use the application for unauthorized surveillance or to infringe on others' privacy.
* Report any suspected data errors or security issues to the Technical Support email listed above.

---

## References & Additional Resources

### Official Government Websites
* **Mandaue City Official Website:** [www.mandauecity.gov.ph](https://www.mandauecity.gov.ph)
* **City Planning Office:** Contact for CLUP documents and official zoning maps
* **MCDRRMO:** Contact for evacuation plans and disaster preparedness materials

### Building Permit & Development Process
For construction projects or business establishment:
1. **Zoning Clearance:** Verify land use compliance with City Planning Office
2. **Barangay Clearance:** Obtain clearance from local barangay office
3. **Building Permit:** Apply through City Engineering Office
4. **Business Permit:** Register with Business Permits and Licensing Office

**Note:** Requirements vary by project type. Consult the City Planning Office for specific guidance.

### Related Planning Documents
* **Mandaue City Comprehensive Land Use Plan (CLUP) 2019-2029:** Available at City Planning Office
* **Mandaue City Zoning Ordinance:** Legal framework for zoning enforcement
* **Hazard Maps:** Detailed flood, earthquake, and landslide risk maps available at MCDRRMO

### Regional Resources
* **PAGASA (Philippine Atmospheric, Geophysical and Astronomical Services Administration):** Weather forecasts and typhoon warnings - [www.pagasa.dost.gov.ph](https://www.pagasa.dost.gov.ph)
* **PHIVOLCS (Philippine Institute of Volcanology and Seismology):** Earthquake and tsunami information
* **DENR-EMB Region 7:** Environmental compliance and permits

### Emergency Preparedness
* **National Emergency Hotline:** 911
* **Mandaue City Emergency Operations Center:** 032-345-9876
* **Philippine Red Cross - Cebu Chapter:** 032-418-1800

---
