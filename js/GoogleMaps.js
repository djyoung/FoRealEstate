var MY_MAPTYPE_ID = 'custom_style';
var map;
var markers = [];


//Zooms the map to the given co-ordinates and zoom level
function zoomMap(zoomLevel, lat, lng) {
    map.setCenter(new google.maps.LatLng(lat,lng));
    map.setZoom(zoomLevel);

}

function locateHouses(data) {

        deleteMarkers();

        data.List.forEach(function (tm) {
            var geo = tm.GeographicLocation;
            var housePosition = new google.maps.LatLng(geo.Latitude, geo.Longitude);

            var address = tm.Address;
            var price = tm.PriceDisplay;
            var trademe_url = '<a href="https://trademe.co.nz/' + tm.ListingId + '">View on Trademe</a>';


            var marker = new google.maps.Marker({
                position: housePosition,
                map: map,
                title: 'House'

            });

            markers.push(marker);

            var contentString = address + "<br>" + price + "<br>" + trademe_url;
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });

    var bounds = new google.maps.LatLngBounds();
    for(i=0;i<markers.length;i++) {
        bounds.extend(markers[i].getPosition());
    }

    map.fitBounds(bounds);
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setAllMap(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

//Sets markers in the map
function setAllMap(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

//Initialize the map and the styling features
function initialize() {

    var myLatlng = new google.maps.LatLng(-36.8630231,174.8654693);

    var mapOptions = {
        zoom: 11,
        center: myLatlng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
    };

    //Create the map object
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //Must apply this method for map to show
    applyStyling();

}

//Applies colours and styling of map
function applyStyling() {
    var featureOpts = [
        {
            stylers: [
                {hue: '#1EAB00'},
                //{ visibility: 'simplified' },
                {gamma: 0.5},
                {weight: 0.5}
            ]
        },
        {
            elementType: 'labels',
            stylers: [
                {visibility: 'on'}
            ]
        },
        {
            featureType: 'road.highway',
            stylers: [
                {color: '#76826D'}
            ]
        },
        {
            featureType: 'road.local',
            stylers: [
                {color: '#93AD90'}
            ]
        },
        {
            featureType: 'water',
            stylers: [
                {color: '#678B9C'}
            ]
        }
    ];

    var styledMapOptions = {
       name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts,styledMapOptions);
    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

