var maxPopulation = 81690
var minPopulation = 0

//Hiện thông tin polygon
var addListenersOnPolygon = function(polygon) {
    google.maps.event.addListener(polygon, 'click', function (event) {
      alert(polygon.tag);
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
    if( colorchange < 70){
        red = colorchange*(51/14)
        green = 255
    }
    else{
        red = 255
        green = (-51/88)*colorchange+13005/44
    }
    return ["rgb(",red,",",green,",",blue,")"].join("")
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
}
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 21.0453913, lng:105.8172996},
        zoom: 9
    });

    //ve polygon theo id cua ObjectData
    for(var i = 0 ; i <  ObjectData.length; i++){
        drawPolygon(map, getCoordinate(i), i)
    }
}