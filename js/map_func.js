function zoomMap(zoomLevel, lat, lng) {
    map.setCenter(new google.maps.LatLng(lat,lng));
    map.setZoom(zoomLevel);
}