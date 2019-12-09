var geocoder;
var marker;
var data_layer;
var infowindow;
function initMap() {
    // initialize the center
    var initialLat = $('.search_latitude').val();
    var initialLong = $('.search_longitude').val();
    //Thua thien hue lat lng
    initialLat = initialLat?initialLat:16.467397;
    initialLong = initialLong?initialLong:107.59053259999996;
    var LatLng = new google.maps.LatLng(initialLat, initialLong);

    // create options for the map
    var options = {
        zoom: 6,
        center: LatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions:{
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        zoomControl: true,
    };
    //create map
    map = new google.maps.Map(document.getElementById("map"), options);
    //create geocoding map
    geocoder = new google.maps.Geocoder();
    //create data layer and infowindow
    infowindow =new google.maps.InfoWindow()
    data_layer = new google.maps.Data({map: map});

    //create marker
    ProvinceLevelMap()
    marker = new google.maps.Marker({
        map: map,
        position: LatLng
    });

    // listener
    data_layer.addListener('mouseover',function(event){
        var feat = event.feature;
        var html
        if(currentmap_level == 'Province'){
            html = "<b>"+feat.getProperty("Name")+"</b><br>"+feat.getProperty("population");
            infowindow.setContent(html);
            infowindow.setPosition(event.latLng);
            infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
            infowindow.open(map);
        }
        else if(currentmap_level == 'District'){
            html = "<b>"+feat.getProperty("Ten_Tinh")+"</b><br>"+feat.getProperty("Ten_Huyen")+"</b><br>"+feat.getProperty("Dan_So");
            infowindow.setContent(html);
            infowindow.setPosition(event.latLng);
            infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
            infowindow.open(map);
        }
        else if (currentmap_level == 'Ward'){
            html = "<b>"+feat.getProperty('Province')+"</b><br>"+feat.getProperty('District')+"</b><br>"+feat.getProperty('Ward')+"</b><br>"+feat.getProperty('Population');
            infowindow.setContent(html);
            infowindow.setPosition(event.latLng);
            infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
            infowindow.open(map);
        }
        map.setCenter(event.latLng)
        map.setZoom(8)
    })
    
    data_layer.addListener('click',function(event){
        var feat = event.feature;
        var a = feat.getGeometry('coordinates')
        console.log(a)
        infowindow.close()
        if(currentmap_level == 'Province'){
            nameSearch = getFixedName(feat.getProperty("Name"))
            DistrictLevelMap(nameSearch)
        }
        else if(currentmap_level == 'District'){
            nameSearch2 = getFixedName(feat.getProperty("Ten_Huyen"))
            WardLevelMap(nameSearch,nameSearch2)
        }
    })

    //dropdown menu as a custom control in map
    createDropdown();
    var searchControlDiv = document.createElement('div');
    var centerControl = new CenterControl(searchControlDiv, map);
    searchControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(searchControlDiv);
    marker.setMap(map);
    map.panTo(marker.position)
}

//get lat long when searching
$(document).ready(function(){
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
                var search_addr = '<b>'+results[0].formatted_address + '</b>'
                infowindow.setContent(search_addr)
                infowindow.setPosition(marker.getPosition())
                drawSearch(results[0].formatted_address)
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
            console.log(results[0].geometry.location)
        });
        map.setZoom(9)
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


