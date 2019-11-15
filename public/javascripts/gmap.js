function initMap(){
    console.log("This file works and is from gmap.js")
    var center ={lat: 21.0453913, lng:105.8172996}
    var src='https://raw.githubusercontent.com/NotJackieTruong/finalProject2020/master/kmlFiles/HaNoi.kml'
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom:6,
            center: center
        })
    // var marker = new google.maps.Marker({
    //     position: center,
    //     map: map,
    //     });
    var haNoiLayer = new google.maps.KmlLayer(src,{
        suppressInfoWindows: true,
        preserveViewport: false,
        map:map
    })
    var markers = [];
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow();

    map.addListener("click", function(e) {
        // Clear all old markers after click
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null)
        }
        markers = [];

        // Create new marker with position is e.latLng
        // code

        geocoder.geocode(
            { "location": e.latLng },
            function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    infowindow.setContent(
                    "<div>" +
                        "<b>Address :</b> " + results[0].formatted_address + "<br>" +
                        "<b>Latitude :</b> " + results[0].geometry.location.lat() + "<br>" +
                        "<b>Longitude :</b> " + results[0].geometry.location.lng() +
                    "</div>"
                    );
                    infowindow.open(map, marker);
                } else {
                    console.log("No results found");
                }
                } else {
                console.log("Geocoder failed due to: " + status);
                }
            }
            );

            map.panTo(marker.position); // Set new point to center of map

            markers.push(marker); // add new marker to markers array
        });
  
}
