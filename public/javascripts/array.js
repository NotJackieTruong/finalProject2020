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
var maxPopulation = 81690
var minPopulation = 0
var polygonArray = []
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
    if (choice == 1){
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
    else if( choice == 2){
        data_layer.loadGeoJson(
            'https://00e9e64bac9543943d06b90e19f4258fa64b34b48d08941859-apidata.googleusercontent.com/download/storage/v1/b/map_population/o/citylevelBoundary.json?qk=AD5uMEsqZKU8oIgNsTdWV-6K2XjzFloQ1j05rMzYUM8qTTdv-WDPFMD8vHDV6DcAduo8tnjMAhL2gh2cmRwXan_qIUtJHD4oPRqRr2Omyw0nMkyQ7Phx16reoHTfLE2MfJeBU3ctn1euz-etCkCI2E5JvLKSaYAKsdv3HRlQmHz2xjIhBLgR_DFcBjenzpuHga8BM1vPlIG_ZR5PrhLKe31upwaRPPJYcVYjv2dnr_jIvZtBW62AoJVRsAbbaYlU7ggYGaks37VSW0DmVVOdTSWjt2k-EvzxL-mVToSeQcmQGAmCWrp29NWf8p9IkXaetjn09hqeWOEgoRDH2X0iDoZi96-akXG1Gz_yWCfelPDlAZlJtRzcNXtHRR23JtW_e1_2Zs_RbZabH8mV480uSE-_XSNN95LGxvSReC_g5vdt1EyrHOkC1iStB3wm_O1aYektnriflmgfMNaiHYv-C3mfC_cCLeSL_-hJakjWawDvb09Oml25NUjfnzTuAQSL-wZNwTmcXAtmZIiScm00MtFJQnhzqfftESvg4S_CIVhjWp2IiVi120Fqgq4ScctElwhahB4__5BQs8PeYCQ9uwO674Eg3xh39k2QsC1_if-HMVhH9CfDKKkkH6J-1a5dJ3FeIIB_YF71mHwiFXdpV1XeI2KkrKJTXWfF8l-X-Qyk2I8-IFh-8rItbkSzecDpjdP1rW3pVcaSUdgywYNE_SjxC54xVrqhpUO2b10URijo0PQZDcBZgGUKCWCjFvl54oDLH3qCvEEgMwXaXWvT3tBrULTQHyD933_icMcAKb4is25pP9ilE8I'
        )
        data_layer.setStyle({
                strokeColor: 'purple',
                strokeOpacity: 10,
                strokeWeight: 0.2,
                fillOpacity: 5,
                fillColor: 'pink',
        })
    }
}
var choice = 2
var map
function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        zoom: 9,
        center: {lat: 21.0453913,lng: 105.8172996} 
    });
    dataLayer(map,choice)
}
