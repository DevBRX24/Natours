/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGV2YnJpeDI0IiwiYSI6ImNrYmdpMXM2ZDA1MHIyc3BhNnJyZG51MW0ifQ.M8l1GvJpf5PnEaJ3oHlnlA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/devbrix24/ckbgjtkuc3ggy1imygoxzz9a5'
});
