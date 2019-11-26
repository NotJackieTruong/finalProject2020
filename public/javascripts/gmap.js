// //function ve polygon
// function drawPolygon(googlemap){
//     var phucxaPolygon = new google.maps.Polygon({
//         paths: arrCoor,
//         strokeColor: 'blue',
//         strokeOpacity: 0.2,
//         strokeWeight: 3,
//         fillColor: 'blue',
//         fillOpacity: 0.35

var maxPopulation = 58554
var minPopulation = 1410

function opacityOverlay(population){
    var opacity = (population - minPopulation)/(maxPopulation-minPopulation)
    return opacity;
}
// function ve polygon
function drawPolygon(googlemap, Pathcoordinate, id){
    var setPolygon = new google.maps.Polygon({
        paths: Pathcoordinate,
        strokeColor: 'white',
        strokeOpacity: 1,
        strokeWeight: 0.1,
        fillColor: 'red',
        fillOpacity: opacityOverlay(ObjectData[id].Population)

    });
    setPolygon.setMap(googlemap);
}

var geocoder;
var map;
var marker;
function initialize(){
    console.log("This file works and is from gmap.js")
    // var center ={lat: 21.0453913, lng:105.8172996}
    // var src='https://raw.githubusercontent.com/NotJackieTruong/finalProject2020/master/kmlFiles/HaNoi.kml'
    // var map = new google.maps.Map(
    //     document.getElementById('map'), {
    //         zoom:12,
    //         center: center
    //     })

    
    //  var marker = new google.maps.Marker({
    //     position: center,
    //     map: map
    // })
    
    //geolocation
   

    var initialLat = $('.search_latitude').val();
    var initialLong = $('.search_longitude').val();
    initialLat = initialLat?initialLat:21.0453913;
    initialLong = initialLong?initialLong:105.8172996;
    
    var LatLng = new google.maps.LatLng(initialLat, initialLong);
    var options = {
        zoom: 9,
        center: LatLng,
        
    };

    map = new google.maps.Map(document.getElementById("map"), options);
    
    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: LatLng
    });

    google.maps.event.addListener(marker, "dragend", function(){
        var point = marker.getPosition();
        map.panTo(point);
        geocoder.geocode({'LatLng': marker.getPosition()}, function(results, status){
            if(status == google.maps.GeocoderStatus.OK){
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                $('.search_addr').val(results[0].formatted_address);
                $('.search_latitude').val(marker.getPosition().lat());
                $('.search_longitude').val(marker.getPosition().lng());
            }
        })
    })



    //ve polygon theo id cua ObjectData
    for(var i = 0 ; i <  ObjectData.length; i++){
        drawPolygon(map, getCoordinate(i), i)
    }
}

$(document).ready(function(){
    initialize();

    var PostCodeid = '#search_location';
    $(function(){
        $(PostCodeid).autocomplete({
            source: function(request, response){
                geocoder.geocode({
                    'address': request.term
                }, function(results, status){
                    response($.map(results, function(item){
                        return{
                            label: item.formatted_address,
                            value: item.formatted_address,
                            lat: item.geometry.location.lat(),
                            lon: item.geometry.location.lng()
                        }
                    }))
                })
            }, 
            select: function(event, ui){
                $('.search_addr').val(ui.item.value);
                $('.search_latitude').val(ui.item.lat);
                $('.search_longitude').val(ui.item.lon);
                var latlng = new google.maps.LatLng(ui.item.lat, ui.item.lon);
                marker.setPosition(latlng);
                initialize();
            }
        })
    })

    $('.get_map').click(function(e){
        var address = $(PostCodeid).val();
        geocoder.geocode({'address': address}, function(results, status){
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                $('.search_addr').val(results[0].formatted_address);
                $('.search_latitude').val(marker.getPosition().lat());
                $('.search_longitude').val(marker.getPosition().lng());
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
        e.preventDefault();
    })

    google.maps.event.addListener(marker, 'drag', function(){
        geocoder.geocode({'latLng': marker.getPosition()}, function(results, status){
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    $('.search_addr').val(results[0].formatted_address);
                    $('.search_latitude').val(marker.getPosition().lat());
                    $('.search_longitude').val(marker.getPosition().lng());
                }
            }
        })
    })
})

