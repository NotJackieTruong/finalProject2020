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
    // google.maps.event.addListener(marker, "dragend", function(){
    //     var point = marker.getPosition();
    //     map.panTo(point);
    //     geocoder.geocode({'LatLng': marker.getPosition()}, function(results, status){
    //         if(status == google.maps.GeocoderStatus.OK){
    //             map.setCenter(results[0].geometry.location);
    //             marker.setPosition(results[0].geometry.location);
    //             $('.search_addr').val(results[0].formatted_address);
    //             $('.search_latitude').val(marker.getPosition().lat());
    //             $('.search_longitude').val(marker.getPosition().lng());
    //             marker.setMap(map);
    //         }
    //     })
    // })


    //ve polygon theo id cua ObjectData
    for(var i = 0 ; i <  ObjectData.length; i++){
        drawPolygon(map, getCoordinate(i), i)
    }

    var searchControlDiv = document.createElement('div');
    var centerControl = new CenterControl(searchControlDiv, map);

    searchControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchControlDiv);

    // var checkBoxDiv = document.createElement('div');
    // var checkBoxControl = new checkBoxControl(checkBoxDiv, map);
    // checkBoxDiv.index = 1;
    // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(checkBoxDiv);


}

$(document).ready(function(){
    initialize();
    //autocomplete search
    var PostCodeid = '#search_location';
    // $(function(){
    //     $(PostCodeid).autocomplete({
    //         source: function(request, response){
    //             geocoder.geocode({
    //                 'address': request.term
    //             }, function(results, status){
    //                 response($.map(results, function(item){
    //                     return{
    //                         label: item.formatted_address,
    //                         value: item.formatted_address,
    //                         lat: item.geometry.location.lat(),
    //                         lon: item.geometry.location.lng()
    //                     }
    //                 }))
    //             })
    //         }, 
    //         select: function(event, ui){
    //             $('.search_addr').val(ui.item.value);
    //             $('.search_latitude').val(ui.item.lat);
    //             $('.search_longitude').val(ui.item.lon);
                
    //             var latlng = new google.maps.LatLng(ui.item.lat, ui.item.lon);
    //             marker.setPosition(latlng);
    //             initialize();
    //         }
    //     })
    // })

    $('.get_map').click(function(e){
        var address = $(PostCodeid).val();
        geocoder.geocode({'address': address}, function(results, status){
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                $('#search_addr').val(results[0].formatted_address);
                $('#search_latitude').val(marker.getPosition().lat());
                $('#search_longitude').val(marker.getPosition().lng());
            
        
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
        e.preventDefault();
        return marker.getPosition().lat(), marker.getPosition().lng();
    })

    // google.maps.event.addListener(marker, 'drag', function(){
    //     geocoder.geocode({'latLng': marker.getPosition()}, function(results, status){
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             if (results[0]) {
    //                 $('#search_addr').val(results[0].formatted_address);
    //                 $('#search_latitude').val(marker.getPosition().lat());
    //                 $('#search_longitude').val(marker.getPosition().lng());
    //             }
    //         }
    //     })
    // })
})

//create a control on gmap
function CenterControl(controlDiv, map){
     // Set CSS for the search control border.
     var searchUI = document.createElement('div');
     searchUI.id = 'searchUI';
     searchUI.title = 'Click to recenter the map';
     controlDiv.style.clear='both'
     controlDiv.appendChild(searchUI);

     // Set CSS for the search control interior.
     var searchControlText = document.createElement('div');
     searchControlText.id= 'searchText';
     searchUI.appendChild(searchControlText);

     searchUI.addEventListener('click', function(){
        openNav();
     })

     // Set CSS for the check box control border
     var checkBoxUI = document.createElement('div');
     checkBoxUI.id = 'checkBoxUI'
     controlDiv.appendChild(checkBoxUI);

     // Set CSS for the checkbox control interior
    //  var filters = document.getElementById('filters');

    //  var item = filters.appendChild(document.createElement('div'));
    //  var checkBoxText = document.createElement('input')
    //  var checkbox = item.appendChild(checkBoxText);
    //  checkbox.type='checkbox';
    //  checkbox.checked= true;
    var checkBoxText = document.createElement('div');
    checkBoxText.id = 'checkBoxTex'
    checkBoxText.innerHTML='Polygon'
    checkBoxUI.appendChild(checkBoxText)
    checkBoxUI.addEventListener('click', function(){
        removePolygon();
    })
}

// function checkBoxControl(checkBoxDiv, map){
//     var controlUI = document.createElement('div');
//     controlUI.style.backgroundColor = '#fff';
//     controlUI.style.border = '0px solid #fff';
//     controlUI.style.borderRadius = '2px';
//     controlUI.style.boxShadow = '0 1px 4px -1px rgba(0,0,0,.3)';
//     controlUI.style.cursor = 'pointer';
//    //  controlUI.style.marginBottom = '22px';
//     controlUI.style.height="40px";
//     controlUI.style.width="40px";
//     controlUI.style.backgroundImage='url(/images/search.svg)';
//     controlUI.style.margin='10px';
//     controlUI.style.textAlign = 'center';
//     controlUI.title = 'Click to recenter the map';
//     checkBoxDiv.appendChild(controlUI);

//     var controlText = document.createElement('input');
//     controlText.style.color = 'rgb(25,25,25)';
//     controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
//    //  controlText.style.fontSize = '16px';
//     controlText.style.padding='2px 2px 2px 2px';
//     controlText.style.lineHeight = '38px';
//     controlText.style.paddingLeft = '5px';
//     controlText.style.paddingRight = '5px';
//    //  controlText.innerHTML = 'Search';
//     controlUI.appendChild(controlText);

//  }
