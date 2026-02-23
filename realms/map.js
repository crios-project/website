// ===============================
// 1. CONFIG & INITIALIZATION
// ===============================
const IMAGE_WIDTH = 5632;
const IMAGE_HEIGHT = 5632;
const bounds = [[0, 0], [IMAGE_HEIGHT, IMAGE_WIDTH]];

// Create the map and force it to fill the container immediately
const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2, // Adjusted to prevent it from getting too small
  maxZoom: 2,
  zoomSnap: 0.1, // Allows for smoother "filling" of the screen
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

// Set default view
let currentBase = baseMaps.normal;
currentBase.addTo(map);
layers.normal.addTo(map);

// FORCE THE FILL: This tells Leaflet to fit the image without grey bars
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
  marker.bindPopup(`<strong>${loc.name}</strong><br>${loc.realm}<br>${loc.description}`);

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

// Ensure the map fills the screen on window load and resize
window.addEventListener('load', () => {
  map.invalidateSize();
  map.fitBounds(bounds);
});

window.addEventListener('resize', () => {
  map.invalidateSize();
});