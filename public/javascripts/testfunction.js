// var id = ??
// id dung chung cho arrInfor va arrCoordinate

//thu tao array chua nhieu array
var arrAll = []
var arrAlter = []
var m = 0
var arrInfor = []
var maxPopulation = 10000
var minPopulation = 5000

// luu cac arrCoordinate thanh 1 arrAll dung cho for loop
for(var j = 0; j < 20; j++){
    for( var i = 0; i < arr.length; ){
        storeCoordinate((arr[i]+m),(arr[i+1]+m),arrAlter);
        i  = i+2
    }
    m+=0.008
    arrAll.push({array: arrAlter,id: j})
    arrAlter = []
}

//function tinh color opacity cua 1 area 
function opacityOverlay(population){
    var opacity = (population - minPopulation)/(maxPopulation-minPopulation)
    return opacity;
}

// test array infor, object format: { danso, opacity, id}
var n = 5000
for(var j = 0; j < 20; j++){
        arrInfor.push({population: n, opaR: opacityOverlay(n), id: j})
        n = n+250
}
console.log(arrInfor)

// function ve polygon
function drawPolygon(googlemap, arrCoordinate, i){
    var phucxaPolygon = new google.maps.Polygon({
        paths: arrCoordinate,
        strokeColor: 'red',
        strokeOpacity: 0,
        strokeWeight: 3,
        fillColor: 'blue',
        fillOpacity: arrInfor[i].opaR
    });
    phucxaPolygon.setMap(googlemap);
}

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 21.0453913, lng:105.8172996},
        zoom: 12
    });

    // ve cac polygon cho tat ca cac arrCoordinate co trong arrAll
    for(var i = 0 ;  i<arrAll.length; i++){
        drawPolygon(map,arrAll[i].array,i)
        console.log(arrAll[i].id)
    }
    
}