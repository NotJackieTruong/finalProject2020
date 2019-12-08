let maxPopulation = 0
let minPopulation = 0
var polygonArray = []
var choice = 2 //1: ward level -- 2: province level -- 3: district level
var currentmap_level
var map
let nameSearch = 'null'

//bỏ dấu tiếng việt
function getFixedName(str) {
    if(str == undefined)
    {
        return undefined
    }
    else{
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }
    
}
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
    if (population == 'null'){
        red= green = blue = 0
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
// Create Data Layer
function dataLayer(choice,data_layer,inforwindow){
    //Ward level layer
    if (choice == 1){
        maxPopulation = 81690
        minPopulation = 0
        for(var i = 0 ; i <  ObjectData.length; i++){
            if(ObjectData[i].Province == "Hà Nội"){
                var color = colorOverlay(getPopulation(ObjectData[i].Population))
                data_layer.add(
                    {
                        geometry: new google.maps.Data.Polygon([getCoordinate(i)]),
                        properties:{
                            color: color,
                            id: i,
                            clickable: true,
                            Province: ObjectData[i].Province,
                            City: ObjectData[i].City,
                            Ward: ObjectData[i].Ward,
                            Population: ObjectData[i].Population
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
            // }
        }
        // for(var i = 0 ; i < 100 /*ObjectData.length */; i++){
        //     drawPolygon(map,getCoordinate(i),i)
        }
        data_layer.addListener('click', function(event) {
            var feat = event.feature;
            var html = "<b>"+feat.getProperty('Province')+"</b><br>"+feat.getProperty('City')+"</b><br>"+feat.getProperty('Ward')+"</b><br>"+feat.getProperty('Population');
            inforwindow.setContent(html);
            inforwindow.setPosition(event.latLng);
            inforwindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
            inforwindow.open(map);
         });
    }
}
//Data Layer with current level : District
function DistrictLevelMap(map,name){
    currentmap_level = 'District'
    maxPopulation = 797840
    minPopulation = 83
    infowindow.close()
    console.log(nameSearch)
    data_layer.loadGeoJson(
        'https://storage.googleapis.com/map_population/DistrictlevelFULL.json'
        )
    data_layer.setStyle(function(feature){
        var P = feature.getProperty('Dan_So')
        var provinceName = feature.getProperty('Ten_Tinh')
        var color = colorOverlay(P)
        var visibleState
        if(name == getFixedName(provinceName))
            visibleState =  true
        else
            visibleState = false
        return{
            strokeColor: 'purple',
            strokeOpacity: 10,
            strokeWeight: 0.2,
            fillOpacity: 5,
            fillColor: color,
            visible: visibleState
        }   
    })
    data_layer.addListener('click', function(event) {
        var feat = event.feature;
        var html = "<b>"+feat.getProperty("Ten_Tinh")+"</b><br>"+feat.getProperty("Ten_Huyen")+"</b><br>"+feat.getProperty("Dan_So");
        infowindow.setContent(html);
        infowindow.setPosition(event.latLng);
        infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
        });
}
//initialize gg map on the website
function ProvinceLevelMap(map){
    // option = show or hide
    currentmap_level = 'Province'
    maxPopulation = 8598700
    minPopulation = 327000
    data_layer.loadGeoJson(
        'https://storage.googleapis.com/map_population/citylevelBoundary.json'
    )
    data_layer.setStyle(function(feature){
        var cityname = feature.getProperty('Name')
        var color,p
        for( var i = 0; i< StringData.length; i++){
            if(cityname == StringData[i].City){
                color = colorOverlay(StringData[i].Population*1000)
                p = StringData[i].Population*1000
                feature.setProperty("population", p)
            }
        }
        return{
            strokeColor: 'purple',
            strokeOpacity: 10,
            strokeWeight: 0.2,
            fillOpacity: 5,
            fillColor: color,
        }   
    })
    data_layer.addListener('click', function(event) {
        var feat = event.feature;
        var html = "<b>"+feat.getProperty("Name")+"</b><br>"+feat.getProperty("population");
        infowindow.setContent(html);
        infowindow.setPosition(event.latLng);
        infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
        infowindow.open(map);
        });
    data_layer.addListener('dblclick', function(event){
        var feat = event.feature;
        nameSearch= feat.getProperty("Name")
        DistrictLevelMap(map,nameSearch)
    })
}
function initMap() {
    initialize();
}