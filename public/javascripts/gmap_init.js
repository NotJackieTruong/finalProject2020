var geocoder;
var marker;
var map;
var data_layer;
var infowindow;
 
function initialize() {
    // initialize the center
    var initialLat = $('.search_latitude').val();
    var initialLong = $('.search_longitude').val();
    initialLat = initialLat?initialLat:21.0453913;
    initialLong = initialLong?initialLong:105.8172996;
    var LatLng = new google.maps.LatLng(initialLat, initialLong);

    // create options for the map
    var options = {
        zoom: 9,
        center: LatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions:{
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
    };
    //create map
    map = new google.maps.Map(document.getElementById("map"), options);
    //create geocoding map
    geocoder = new google.maps.Geocoder();
    //create data layer and infowindow
    data_layer = new google.maps.Data({map: map});
    infowindow = new google.maps.InfoWindow();
    dataLayer(2,data_layer,infowindow)

    //create marker
    ProvinceLevelMap(map)
    marker = new google.maps.Marker({
        map: map,
        position: LatLng
    });

    //dropdown menu as a custom control in map
    createDropdown();
    var searchControlDiv = document.createElement('div');
    var centerControl = new CenterControl(searchControlDiv, map);
    searchControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(searchControlDiv);
    marker.setMap(map);
    map.panTo(marker.position)

}

//get lat long when searching
$(document).ready(function(){
    initialize();
    //autocomplete search
    var PostCodeid = '#search_location';

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

})

//create a control on gmap
function CenterControl(controlDiv, map){
    controlDiv.style.clear = 'both';
     // Set CSS for the search control border.
     var searchUI = document.createElement('div');
     searchUI.id = 'searchUI';
     searchUI.title = 'Click to recenter the map';
     
     controlDiv.appendChild(searchUI);

     // Set CSS for the search control interior.
     var searchControlText = document.createElement('div');
     searchControlText.id= 'searchText';
     searchUI.appendChild(searchControlText);

     searchUI.addEventListener('click', function(){
        openNav();
     })
     // Set CSS for the check box control border
    //  var checkBoxUI = document.createElement('div');
    //  checkBoxUI.id = 'checkBoxUI'
    //  controlDiv.appendChild(checkBoxUI);

    // // Set CSS for the checkbox control interior
    // var checkBoxText = document.createElement('div');
    // checkBoxText.id = 'checkBoxTex'
    // checkBoxText.innerHTML='Hide'

    // //call show/hide polygon function when click
    // checkBoxUI.addEventListener('click', function(){
    //     if(checkBoxText.innerHTML=='Hide'){
    //         checkBoxText.innerHTML='Show';
    //         $('#checkBoxUI').css("background-image","url(/images/tick-blank.svg)")
    //         data_layer.setStyle({visible: false})
    //         infowindow.close()
    //     }
    //     else if(checkBoxText.innerHTML=='Show'){
    //         checkBoxText.innerHTML='Hide'
    //         $('#checkBoxUI').css("background-image","url(/images/tick.svg)")
    //         console.log(currentmap_level)
    //         console.log(nameSearch)
    //         if(currentmap_level == 'Province'){
    //             ProvinceLevelMap(map)
    //         }   
    //         if(currentmap_level == 'District'){
    //             DistrictLevelMap(map, nameSearch)
    //         }
    //     }
    // })
}


