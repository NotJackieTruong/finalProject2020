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
            'https://storage.cloud.google.com/map_population/citylevelBoundary.json'
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
            'https://00e9e64bac3ce133168b8606b9dc5c3b092801c19804e92137-apidata.googleusercontent.com/download/storage/v1/b/map_population/o/DistrictlevelFULL.json?qk=AD5uMEtgewFeTvnYYNeMrxZ51Irg8964s9PzrVgKDRCzFBJBGdxLjSMh4KwMIdl7gamLUD4YcKuV0RORkCEGsF5wwqmUx9v7PcPlzL4WQ_fq7-yROOPgWQnsrbaF7ysd3QxOB7_7dhb8LtYHTkxeX41hks1IdvORzusz-gbwdm8S2DG2EgNEMlEmHGQHg5sXCV_hACqvGRmhmmATcmKRZDvV7ccyuvY8HPoAdvptbV2WNA1ummw0T8b67hqDwEUymk12KmJGtJNPS3NhgfvDOGkZeUyyLIcbXdlJZty_2XI8v1dr9Pi8pHyYr4kqIx7UCbmOJI8DIQdE814XfN4lRlSAfdUJEghYp6UEWSmh-tzcWne-LeCaq8s2d6-81STG3ocHcAv9dNI7YamLwBtXc1O4jX8OAK3TcewrdCUCjraBKhkksqR7Jxtj3aoNKM-NaDiiEvC3ddiVDBhn-gDQjt3uJUCrczhF7YEvkLRAnBQdU8WbMRHEEkcruN4KjW6_NFmRpb938_8rzIGW9L3x7FsgirUN0Syf87Bx-TS4RWMp0DZYC9sXX-yFAVvDqD4GQgjvWJBRQgUjelzRb1SehX4cREH81P_MfSGyP-E1U0tpOhK6qfcM05oV16xMguLg7S3CSCNn-A1KlfupIm52SV33aYd_YWfx7bLiB-dupiS0-47pXTsKhxnPT-hBd-gE3Fo17S1ecWlOVZ0UPXufk-O4Lz6doxMLsaFUGtbS-x77Dh0-QPhyn-OUwmheWM40xi7UnkFedcwKvIy02MZfrH0fMEDi-RzHahj-m9HNZB8vr7P_OKqJnLE'
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
}
 
function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        zoom: 5,
        center: {lat: 21.0453913,lng: 105.8172996} 
    });
    dataLayer(map,choice)
}
