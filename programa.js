var map = L.map('map').setView([4.742777, -74.108429], 18);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.742430842156989, -74.10784158543846]).addTo(map)
.bindPopup('<b>Punto de Interés</b><br>Monumento La Gaitana.')
.openPopup();
var marker = L.marker([4.742246403321685, -74.10817686154299]).addTo(map)
.bindPopup('<b>Punto de Interés</b><br>Iglesia La Gaitana.')
.openPopup();
