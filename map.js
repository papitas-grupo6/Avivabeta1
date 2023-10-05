// Puedes agregar marcadores, rutas u otras capas al mapa aquí
mapboxgl.accessToken =
  'Tsk.eyJ1Ijoidm5nZXJ1cyIsImEiOiJjbG5kZGI0NHgwM3M4Mm1udWc4eGhiY3p0In0.eKb5Z_WxQRutm56cls-IPQ"'; // Reemplaza con tu token de Mapbox
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [-70.6695, -33.4484],
  zoom: 8,
});

// Agrega controles de zoom y rotación
map.addControl(new mapboxgl.NavigationControl());
