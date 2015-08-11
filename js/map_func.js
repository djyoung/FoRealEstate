function zoomMap(zoomLevel, lat, lng) {
    map.setCenter(new google.maps.LatLng(lat,lng));
    map.setZoom(zoomLevel);
}

function find_properties_on_map(data) {
    var markers = [];
    data.List.forEach(function (tm) {
        var geo = tm.GeographicLocation;
        var myLatlng2 = new google.maps.LatLng(geo.Latitude, geo.Longitude);
        var address = tm.Address;
        var price = tm.PriceDisplay;
        var trademe_url = '<a href="https://trademe.co.nz/' + tm.ListingId + '">View on Trademe</a>';


        var marker = new google.maps.Marker({
            position: myLatlng2,
            map: map,
            title: 'NewMarket House'
        });

        markers.push(marker);

        var contentString = address + "<br>" + price + "<br>" + trademe_url;

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });


        //zoomMap(14,-36.8683083, 174.7766063); // Centre on Newmarket

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
            //infowindow.close();
        });

        google.maps.event.addListener(map, "click", function(event) {
            infowindow.close();
        });

        function deleteMarkers() {
            clearMarkers();
            markers = [];
        }
    });

    var bounds = new google.maps.LatLngBounds();
    for(i=0;i<markers.length;i++) {
        bounds.extend(markers[i].getPosition());
    }

    map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initialize);