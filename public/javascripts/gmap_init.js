function initMap() {
    // initialize the center
    var initialLat = $('.search_latitude').val();
    var initialLong = $('.search_longitude').val();
    //Thua thien hue lat lng
    initialLat = initialLat ? initialLat : 16.467397;
    initialLong = initialLong ? initialLong : 107.59053259999996;
    var LatLng = new google.maps.LatLng(initialLat, initialLong);

    // create options for the map
    var options = {
        zoom: 6,
        gestureHandling: 'cooperative',
        center: LatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        zoomControl: true,
        streetViewControl: false,
    };
    //create map
    map = new google.maps.Map(document.getElementById("map"), options);

    //create geocoding map
    geocoder = new google.maps.Geocoder();
    //create data layer and infowindow
    infowindow = new google.maps.InfoWindow()
    data_layer = new google.maps.Data({ map: map });
    // heatmap = new google.maps.visualization.HeatmapLayer();
    // trafficLayer = new google.maps.TrafficLayer();
    // transitLayer = new google.maps.TransitLayer();
    // transitLayer = new google.maps.BicyclingLayer();
    ProvinceLevelMap()
    // BDSBadinh()

    //create marker
    marker = new google.maps.Marker({
        position: LatLng
    });
    data_layer.addListener('mouseover', function(event){
        data_layer.overrideStyle(event.feature, {strokeColor: 'White',strokeWeight: 2,zIndex: 10});
        var name
        var delta = maxPopulation-minPopulation
        var population, percentage
        if (currentmap_level == 'Province') {
            name = event.feature.getProperty("Name")
            population = event.feature.getProperty("population")
        }
        else if (currentmap_level == 'District') {
            name = event.feature.getProperty("Ten_Huyen")
            population = event.feature.getProperty("Dan_So")
        }
        else if (currentmap_level == 'Ward') {
            name = event.feature.getProperty('Ward')
            population = event.feature.getProperty("Population")
        }
        percentage = (population - minPopulation)/delta*100
        $("#data-caret").css("left", percentage - 1.5 + "%")
        document.getElementById('PolygonName').innerHTML = name
    })

    data_layer.addListener('mouseout', function(event){
        data_layer.revertStyle(event.feature);
    })

    data_layer.addListener('click', function (event) {
        var feat = event.feature;
        var html
        var bounds = new google.maps.LatLngBounds();
        data_layer.forEach(function (feature) {
            feat.getGeometry().forEachLatLng(function (latlng) {
                bounds.extend(latlng);
            });
        });
        map.fitBounds(bounds);
        
        if (currentmap_level == 'Province') {
            html = "<b>" + feat.getProperty("Name") + "</b><br>" + feat.getProperty("population")+ "</b><br>";
           
            detailInfo(feat.getProperty("Name"), feat.getProperty("population"), feat.getProperty("area"), feat.getProperty('density'), feat.getProperty("imageLink"))
            $('#image_description').text(feat.getProperty("img_description"))
            infowindow.setContent(html);
            infowindow.setPosition(bounds.getCenter());
            infowindow.open(map);
        }
        else if (currentmap_level == 'District') {
            html = "<b>" + feat.getProperty("Ten_Tinh") + "</b><br>" + feat.getProperty("Ten_Huyen") + "</b><br>" + feat.getProperty("Dan_So");
            infowindow.setContent(html);
            infowindow.setPosition(bounds.getCenter());
            infowindow.open(map);
        }
        else if (currentmap_level == 'Ward') {
            html = "<b>" + feat.getProperty('Province') + "</b><br>" + feat.getProperty('District') + "</b><br>" + feat.getProperty('Ward') + "</b><br>" + feat.getProperty('Population');
            infowindow.setContent(html);
            infowindow.setPosition(bounds.getCenter());
            infowindow.open(map);
        }
        map.setCenter(bounds.getCenter());
    })

    data_layer.addListener('dblclick', function (event) {
        var feat = event.feature;
        infowindow.close()
        if (currentmap_level == 'Province') {
            nameSearch = getFixedName(feat.getProperty("Name"))
            DistrictLevelMap(nameSearch)
        }
        else if (currentmap_level == 'District') {
            nameSearch2 = getFixedName(feat.getProperty("Ten_Huyen"))
            WardLevelMap(nameSearch, nameSearch2)
        }
    })

    //dropdown menu as a custom control in map
    createDropdown();
    var searchControlDiv = document.createElement('div');
    // var centerControl = new CenterControl(searchControlDiv, map);
    searchControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(searchControlDiv);
    // marker.setMap(map);
}

function detailInfo(address, population, area, density, image){
    var densityExpo = "Density: "+density + "/km"+"<sup>" + 2 + "</sup>"
    var areaExpo = "Area: " + area +"/km"+"<sup>" + 2 + "</sup>"
    $('#info_address').text("City: "+ address)
    $('#info_population').text("Population: " + population)
    $('#info_area').html(densityExpo)
    $('#info_density').html(areaExpo)
    $('#info_image').attr('src', image)
}

//get latlng when searching
$(document).ready(function () {
    //autocomplete search
    var PostCodeid = '#search_location';
    $('.get_map').click(function (e) {
        var address = $(PostCodeid).val();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                marker.setPosition(results[0].geometry.location)
                map.setCenter(results[0].geometry.location);
                map.fitBounds(results[0].geometry.viewport);
                $('#info_title').text(address)
                $('#info_address').text(results[0].formatted_address);
                $('#search_lat').text("Latitude: "+results[0].geometry.location.lat());
                $('#search_lng').text("Longitude: "+results[0].geometry.location.lng());
                var search_addr = '<b>' + results[0].formatted_address + '</b>'
                infowindow.setContent(search_addr)
                infowindow.setPosition(results[0].geometry.location)
                drawSearch(results[0].address_components)
                console.log(results[0].address_components)
                

            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
        // map.setZoom(9)
        marker.setMap(map)
        e.preventDefault();

        // return marker.getPosition().lat(), marker.getPosition().lng();
    })
})

