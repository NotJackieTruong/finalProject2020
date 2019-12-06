var geocoder;
var marker;
var map;
var data_layer;
var infowindow;
var control=function(){function o(o){this.add=function(T){var t=document.createElement("div");if(t.innerHTML=T,o)switch(o){case"TOP_CENTER":map.controls[google.maps.ControlPosition.TOP_CENTER].push(t);break;case"TOP_LEFT":map.controls[google.maps.ControlPosition.TOP_LEFT].push(t);break;case"TOP_RIGHT":map.controls[google.maps.ControlPosition.TOP_RIGHT].push(t);break;case"LEFT_TOP":map.controls[google.maps.ControlPosition.LEFT_TOP].push(t);break;case"RIGHT_TOP":map.controls[google.maps.ControlPosition.RIGHT_TOP].push(t);break;case"LEFT_CENTER":map.controls[google.maps.ControlPosition.LEFT_CENTER].push(t);break;case"RIGHT_CENTER":map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(t);break;case"LEFT_BOTTOM":map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(t);break;case"RIGHT_BOTTOM":map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(t);break;case"BOTTOM_CENTER":map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(t);break;case"BOTTOM_LEFT":map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(t);break;case"BOTTOM_RIGHT":map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(t)}else console.log("err")}}var T={};return T.topCenter=new o("TOP_CENTER"),T.topLeft=new o("TOP_LEFT"),T.topRight=new o("TOP_RIGHT"),T.leftTop=new o("LEFT_TOP"),T.rightTop=new o("RIGHT_TOP"),T.leftCenter=new o("LEFT_CENTER"),T.rightCenter=new o("RIGHT_CENTER"),T.leftBottom=new o("LEFT_BOTTOM"),T.rightBottom=new o("RIGHT_BOTTOM"),T.bottomCenter=new o("BOTTOM_CENTER"),T.bottomLeft=new o("BOTTOM_LEFT"),T.bottomRight=new o("BOTTOM_RIGHT"),T}();
 
var html1 = '<div class="container">'+
'    <div class="dropDownControl" id="ddControl" title="A custom drop down select with mixed elements" onclick="(document.getElementById(\'myddOptsDiv\').style.display == \'block\') ? document.getElementById(\'myddOptsDiv\').style.display = \'none\' : document.getElementById(\'myddOptsDiv\').style.display = \'block\';"">'+
'        My Box'+
'        <img class="dropDownArrow" src="http://maps.gstatic.com/mapfiles/arrow-down.png"/>'+
'    </div>'+
'    <div class = "dropDownOptionsDiv" id="myddOptsDiv">'+
'        <div class = "dropDownItemDiv" id="mapOpt"  title="This acts like a button or click event" onClick="alert(\'option1\')">Option 1</div>'+
'        <div class = "dropDownItemDiv" id="satelliteOpt" title="This acts like a button or click event" onClick="alert(\'option2\')">Option 2</div>'+
'        <div class="separatorDiv"></div>'+
'        <div class="checkboxContainer" title="This allows for multiple selection/toggling on/off" onclick="(document.getElementById(\'terrainCheck\').style.display == \'block\') ? document.getElementById(\'terrainCheck\').style.display = \'none\' : document.getElementById(\'terrainCheck\').style.display = \'block\';">'+
'        <span role="checkbox" class="checkboxSpan ">'+
'            <div class="blankDiv" id="terrainCheck">'+
'                <img class="blankImg" src="http://maps.gstatic.com/mapfiles/mv/imgs8.png" />'+
'            </div>'+
'        </span>             '+
'        <label class="checkboxLabel">On/Off</label>             '+
'    </div>          '+
'    </div>'+
'</div>';
	







function initialize() {
    var initialLat = $('.search_latitude').val();
    var initialLong = $('.search_longitude').val();
    initialLat = initialLat?initialLat:21.0453913;
    initialLong = initialLong?initialLong:105.8172996;
    
    var LatLng = new google.maps.LatLng(initialLat, initialLong);
    var options = {
        zoom: 9,
        center: LatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions:{
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
    };
    map = new google.maps.Map(document.getElementById("map"), options);
    geocoder = new google.maps.Geocoder();
    data_layer = new google.maps.Data({map: map});
    infowindow = new google.maps.InfoWindow();
    dataLayer(2,data_layer,infowindow)
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: LatLng
    });
    control.topCenter.add(html1)
    var searchControlDiv = document.createElement('div');
    var centerControl = new CenterControl(searchControlDiv, map);

    searchControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(searchControlDiv);


}

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
    checkBoxText.innerHTML='Hide'

    //call show/hide polygon function when click
    checkBoxUI.addEventListener('click', function(){
        if(checkBoxText.innerHTML=='Hide'){
            checkBoxText.innerHTML='Show';
            $('#checkBoxUI').css("background-image","url(/images/tick-blank.svg)")
            dataLayer(4,data_layer,infowindow)
        }
        else if(checkBoxText.innerHTML=='Show'){
            checkBoxText.innerHTML='Hide'
            $('#checkBoxUI').css("background-image","url(/images/tick.svg)")
            dataLayer(choice,data_layer,infowindow) 
        }
    })
}

