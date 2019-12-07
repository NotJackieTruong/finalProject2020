function createDropdown(){
    var control=function(){function o(o){this.add=function(T){var t=document.createElement("div");if(t.innerHTML=T,o)switch(o){case"TOP_CENTER":map.controls[google.maps.ControlPosition.TOP_CENTER].push(t);break;case"TOP_LEFT":map.controls[google.maps.ControlPosition.TOP_LEFT].push(t);break;case"TOP_RIGHT":map.controls[google.maps.ControlPosition.TOP_RIGHT].push(t);break;case"LEFT_TOP":map.controls[google.maps.ControlPosition.LEFT_TOP].push(t);break;case"RIGHT_TOP":map.controls[google.maps.ControlPosition.RIGHT_TOP].push(t);break;case"LEFT_CENTER":map.controls[google.maps.ControlPosition.LEFT_CENTER].push(t);break;case"RIGHT_CENTER":map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(t);break;case"LEFT_BOTTOM":map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(t);break;case"RIGHT_BOTTOM":map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(t);break;case"BOTTOM_CENTER":map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(t);break;case"BOTTOM_LEFT":map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(t);break;case"BOTTOM_RIGHT":map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(t)}else console.log("err")}}var T={};return T.topCenter=new o("TOP_CENTER"),T.topLeft=new o("TOP_LEFT"),T.topRight=new o("TOP_RIGHT"),T.leftTop=new o("LEFT_TOP"),T.rightTop=new o("RIGHT_TOP"),T.leftCenter=new o("LEFT_CENTER"),T.rightCenter=new o("RIGHT_CENTER"),T.leftBottom=new o("LEFT_BOTTOM"),T.rightBottom=new o("RIGHT_BOTTOM"),T.bottomCenter=new o("BOTTOM_CENTER"),T.bottomLeft=new o("BOTTOM_LEFT"),T.bottomRight=new o("BOTTOM_RIGHT"),T}();

    var html1 = '<div class="container">'+
                '    <div class="dropDownControl" id="ddControl" title="A custom drop down select with mixed elements" onclick="(document.getElementById(\'myddOptsDiv\').style.display == \'block\') ? document.getElementById(\'myddOptsDiv\').style.display = \'none\' : document.getElementById(\'myddOptsDiv\').style.display = \'block\';"">'+
                '        Options'+
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
    control.topCenter.add(html1)
	
}

