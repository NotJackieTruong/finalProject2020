let maxPopulation = 0
let minPopulation = 0
var choice = 2
var map
function storeCoordinate(xVal,yVal, array){
    array.push({lng: xVal, lat: yVal})
}
// lấy coordinate HN
function getCoordinate(id){
    var CoordinateString = ObjectData[id].WardCoordinates
    var arr = CoordinateString.split(/,| /)
    for( var i = 0; i < arr.length; i++){ 
        arr[i] = arr[i]*1 
    }
    for( var i = 0; i < arr.length; i++){ 
        if ( arr[i] === 0) {
        arr.splice(i, 1); 
        }   
    }
    var Coordinate = []
    for( var i = 0; i < arr.length; ){
        storeCoordinate(arr[i],arr[i+1],Coordinate);
        i  = i+2
    }
    return Coordinate
}
//Hiện thông tin polygon
var addListenersOnPolygon = function(polygon) {
    google.maps.event.addListener(polygon, 'click', function (event) {
        alert(polygon.tag)
        if(polygon.getVisible() == true){
            polygon.setVisible(false)
        }
        else{
            polygon.setVisible(true)
        }
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

function dataLayer(map,choice){
    var data_layer = new google.maps.Data({map: map});
    //Ward level layer
    if (choice == 1){
        maxPopulation = 81690
        minPopulation = 0
        for(var i = 0 ; i <  ObjectData.length; i++){
            var color = colorOverlay(getPopulation(ObjectData[i].Population))
            data_layer.add(
                {
                    geometry: new google.maps.Data.Polygon([getCoordinate(i)]),
                    properties:{
                        color: color,
                        id: i,
                        clickable: true
                    }
                }) 
            data_layer.setStyle(function(feature) {
                var color = feature.getProperty('color');
                var click = feature.getProperty('clickable')
                return ({
                    strokeColor: 'purple',
                    strokeOpacity: 10,
                    strokeWeight: 0.2,
                    fillOpacity: 5,
                    fillColor: color,
                    clickable: click,
                });
            });
            data_layer.addListener('click', function(event) {
                console.log(event.feature.getProperty('id'))
              });
        }
    }
    //District level layer
    else if( choice == 2){
        maxPopulation = 8598700
        minPopulation = 327000
        data_layer.loadGeoJson(
            'https://storage.googleapis.com/map_population/citylevelBoundary.json'
        )
        data_layer.setStyle(function(feature){
            var cityname = feature.getProperty('Name')
            var color
            for( var i = 0; i< StringData.length; i++){
                if(cityname == StringData[i].City){
                    color = colorOverlay(StringData[i].Population*1000)
                }
            }
            return{
                strokeColor: 'purple',
                strokeOpacity: 10,
                strokeWeight: 0.2,
                fillOpacity: 5,
                fillColor: color
            }
                
        })
    }
    //Province level layer
    else if( choice == 3){
        maxPopulation = 797840
        minPopulation = 83
        data_layer.loadGeoJson(
            ''
            )
        data_layer.setStyle(function(feature){
            var P = feature.getProperty('Dan_So')
            var color = colorOverlay(P)
            return{
                strokeColor: 'purple',
                strokeOpacity: 10,
                strokeWeight: 0.2,
                fillOpacity: 5,
                fillColor: color
            }   
        })
    }
    else if(choice == 4){
        data_layer.setStyle({visible: false})
    }
}
//initialize gg map on the website

function initMap() {
    initialize();
}