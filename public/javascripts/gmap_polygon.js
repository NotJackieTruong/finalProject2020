let maxPopulation = 0
let minPopulation = 0
var polygonArray = []
var choice = 2 //1: ward level -- 2: province level -- 3: district level
var currentmap_level
var map
let nameSearch = 'null'

function getFixedName(name){
    var result;
    if(name == 'Hà Nội')
        result = 'Ha Noi'
    else if( name == 'Thái Nguyên')
        result = 'Thai Nguyen'
    else {
        result =  name
    }
    return result
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

// Ve polygon ward level
function drawPolygon(googlemap, Pathcoordinate, id){
    var setPolygon = new google.maps.Polygon({
        paths: Pathcoordinate,
        strokeColor: 'purple',
        strokeOpacity: 10,
        strokeWeight: 0.2,
        visible: true,
        fillColor: colorOverlay(getPopulation(ObjectData[id].Population)),
        fillOpacity: 5,
        tag: "Phường/Xã/Thị Trấn: " + ObjectData[id].Ward 
        +"\nQuận/Huyện/Thành Phố: "+ ObjectData[id].City
        +"\nTỉnh/Thành Phố: "+ObjectData[id].Province
        +"\nDân Số: "+ObjectData[id].Population,
    });
    polygonArray.push(setPolygon);
    setPolygon.setMap(googlemap);
    addListenersOnPolygon(setPolygon);
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
        marker.setPosition(event.latLng);
        map.panTo(event.latLng);
        });
    data_layer.addListener('dblclick', function(event){
        var feat = event.feature;
        nameSearch= feat.getProperty("Name")
        DistrictLevelMap(map,nameSearch)
        console.log(nameSearch)
    })
}
function initMap() {
    initialize();
}