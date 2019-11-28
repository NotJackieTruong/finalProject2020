var maxPopulation = 81690
var minPopulation = 0

//Hiện thông tin polygon
var addListenersOnPolygon = function(polygon) {
    google.maps.event.addListener(polygon, 'click', function (event) {
        alert(polygon.tag)
    });  
  }

//lấy population từ database
function getPopulation(P){
    if(isNaN(P)){
        var a = P.replace(/\,/g,'')
        a = parseInt(a)
        return a
    }
    else{
        return P
    }
}

//đổi độ đậm nhạt
function opacityOverlay(population){
    var opacity = (population - minPopulation)/(maxPopulation-minPopulation)
    return opacity;
}

//Đổi màu polygon
function colorOverlay(population){
    var heso = (population - minPopulation)/(maxPopulation-minPopulation)//dân số tăng hệ số tăng
    var colorchange = heso*510 //dân số tăng colorchange tăng
    var red = green = blue = 0
    if( colorchange < 100){
        red = colorchange*2.55
        green = 255
    }
    else{
        red = 255
        green = (-51/82)*colorchange+13005/41
    }
    return ["rgb(",red,",",green,",",blue,")"].join("")
}
//Lẩy center polygon
function polygonCenter(poly) {
    var latitudes = [];
    var longitudes = [];
    var vertices = poly.getPath();

    // put all latitudes and longitudes in arrays
    for (var i = 0; i < vertices.length; i++) {
        longitudes.push(vertices.getAt(i).lng());
        latitudes.push(vertices.getAt(i).lat());
    }

    // sort the arrays low to high
    latitudes.sort();
    longitudes.sort();

    // get the min and max of each
    var lowX = latitudes[0];
    var highX = latitudes[latitudes.length - 1];
    var lowy = longitudes[0];
    var highy = longitudes[latitudes.length - 1];

    // center of the polygon is the starting point plus the midpoint
    var centerX = lowX + ((highX - lowX) / 2);
    var centerY = lowy + ((highy - lowy) / 2);

    return (new google.maps.LatLng(centerX, centerY));
}

// function ve polygon
function drawPolygon(googlemap, Pathcoordinate, id){
    var setPolygon = new google.maps.Polygon({
        paths: Pathcoordinate,
        strokeColor: 'purple',
        strokeOpacity: 10,
        strokeWeight: 0.2,
        fillColor: colorOverlay(getPopulation(ObjectData[id].Population)),
        fillOpacity: 5,
        tag: "Phường: "+ObjectData[id].Ward+"\nThành phố: "+ ObjectData[id].City+"\nTỉnh: "+ObjectData[id].Province+"\nDân Số: "+ObjectData[id].Population ,
        
    });
    setPolygon.setMap(googlemap);
    addListenersOnPolygon(setPolygon);
    // const marker = new google.maps.Marker({
    //     map: map,
    //     label: 'name',
    //     position: polygonCenter(setPolygon),
    //     icon: {
    //         path: google.maps.SymbolPath.CIRCLE,
    //         scale: 0
    //     }
    //   });
}


var geocoder;
var marker;
var map;

function initialize() {
    var initialLat = $('.search_latitude').val();
    var initialLong = $('.search_longitude').val();
    initialLat = initialLat?initialLat:21.0453913;
    initialLong = initialLong?initialLong:105.8172996;
    
    var LatLng = new google.maps.LatLng(initialLat, initialLong);
    var options = {
        zoom: 9,
        center: LatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), options);
    
    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: LatLng
    });

    google.maps.event.addListener(marker, "dragend", function(){
        console.log("helloakljflka")
        var point = marker.getPosition();
        map.panTo(point);
        geocoder.geocode({'LatLng': marker.getPosition()}, function(results, status){
            if(status == google.maps.GeocoderStatus.OK){
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                $('.search_addr').val(results[0].formatted_address);
                $('.search_latitude').val(marker.getPosition().lat());
                $('.search_longitude').val(marker.getPosition().lng());
                marker.setMap(map);
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
    //autocomplete search
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
