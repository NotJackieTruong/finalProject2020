
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
        strokeColor: 'red',
        strokeOpacity: 1,
        strokeWeight: 0.1,
        fillColor: 'blue',
        fillOpacity: opacityOverlay(ObjectData[id].Population)
    });
    setPolygon.setMap(googlemap);
}
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 21.0453913, lng:105.8172996},
        zoom: 12
    });

    //ve polygon theo id cua ObjectData
    for(var i = 0 ; i <  ObjectData.length; i++){
        drawPolygon(map, getCoordinate(i), i)
    }
}