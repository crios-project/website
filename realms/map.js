// ===============================
// 1. CONFIG & INITIALIZATION
// ===============================
const IMAGE_WIDTH = 5632;
const IMAGE_HEIGHT = 5632;
const bounds = [[0, 0], [IMAGE_HEIGHT, IMAGE_WIDTH]];

const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 2,
  zoomSnap: 0.1,
  attributionControl: false
});

// ===============================
// 2. BASE MAPS & DIMENSIONS
// ===============================
const baseMaps = {
  normal: L.imageOverlay("ultimatera.webp", bounds),
  sky: L.imageOverlay("ultimatera-sky.webp", bounds),
  cyber: L.imageOverlay("ultimatera-cyber.webp", bounds),
  space: L.imageOverlay("ultimatera-space.webp", bounds)
};

const layers = {
  normal: L.layerGroup(),
  sky: L.layerGroup(),
  cyber: L.layerGroup(),
  space: L.layerGroup()
};

let currentBase = baseMaps.normal;
currentBase.addTo(map);
layers.normal.addTo(map);

map.fitBounds(bounds);

// ===============================
// 3. MARKER LOGIC
// ===============================
const realmColors = {
  Beeston: "#fc87ed", Royastella: "#712065", Nexsicon: "#58b1f3",
  Ultimatera: "#000000", Antiquity: "#dba448"
};

locations.forEach(loc => {
  if (!loc.coords) return;

  const icon = L.divIcon({
    className: "",
    html: `<div style="width:14px; height:14px; border-radius:50%; background:${realmColors[loc.realm] || "#888"}; border:2px solid white;"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });

  const marker = L.marker([loc.coords[1], loc.coords[0]], { icon });
  
  // The Popup content
  const content = `<strong>${loc.name}</strong><br>${loc.realm}<br>${loc.description}`;
  marker.bindPopup(content);

  // HOVER: Open popup on mouseover
  marker.on('mouseover', function (e) {
    this.openPopup();
  });

  // HOVER: Close popup on mouseout UNLESS it was clicked
  marker.on('mouseout', function (e) {
    // Only close if the popup wasn't "locked" by a click
    // Leaflet handles click-locks automatically if we don't force close here
    // But to be safe for mobile/hover balance:
    if (!this._popupClicked) {
        this.closePopup();
    }
  });

  // CLICK: "Lock" the popup so it stays open
  marker.on('click', function (e) {
    this._popupClicked = true;
    this.openPopup();
  });

  // Reset the "lock" when the popup is closed manually
  marker.on('popupclose', function (e) {
    this._popupClicked = false;
  });

  // Assign to correct layer based on biome
  if (loc.biome === "Sky") layers.sky.addLayer(marker);
  else if (loc.biome === "Digital") layers.cyber.addLayer(marker);
  else if (loc.biome === "Space") layers.space.addLayer(marker);
  else layers.normal.addLayer(marker);
});

// ===============================
// 4. FUNCTIONS & EVENTS
// ===============================
function switchDimension(dim) {
  map.removeLayer(currentBase);
  Object.values(layers).forEach(lyr => map.removeLayer(lyr));

  currentBase = baseMaps[dim];
  currentBase.addTo(map);
  layers[dim].addTo(map);
}