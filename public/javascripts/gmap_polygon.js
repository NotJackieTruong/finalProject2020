let maxPopulation = 0
let minPopulation = 0
var currentmap_level
var map
let nameSearch = 'null'
let nameSearch2 = 'null'
var geocoder;
var marker;
var data_layer;
var infowindow;
var heatmap;
var trafficLayer;
var transitLayer;
var bikeLayer;
var visible = 'on'
//bỏ dấu tiếng việt
function getFixedName(str) {
    if (str == undefined) {
        return undefined
    }
    else {
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
        str = str.replace('Tp. ','')
        str = str.replace('Tx. ','')
        // str = str.replace(/ /g, '')
        return str;
    }
}
function storeCoordinate(xVal, yVal, array) {
    array.push({ lng: xVal, lat: yVal })
}
// lấy coordinate HN
function getCoordinate(id) {
    var CoordinateString = ObjectData[id].WardCoordinates
    var arr = CoordinateString.split(/,| /)
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 1
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
        }
    }
    var Coordinate = []
    for (var i = 0; i < arr.length;) {
        storeCoordinate(arr[i], arr[i + 1], Coordinate);
        i = i + 2
    }
    return Coordinate
}
// draw layer from search result
function drawSearch(arrString) {
    switch (arrString[1].types[0]) {
        case "administrative_area_level_2":
            if (arrString[0].types[0] == 'locality') {
                nameSearch = getFixedName(arrString[0].short_name)
                DistrictLevelMap(nameSearch)
            }
            else {
                nameSearch2 = getFixedName(arrString[1].short_name)
                nameSearch = getFixedName(arrString[2].short_name)
                WardLevelMap(nameSearch, nameSearch2)
            }
            break;
        case "administrative_area_level_1":
            if (arrString[0].types[0] == 'locality' || arrString[0].types[0] == 'establishment') {
                nameSearch =  getFixedName(arrString[0].short_name)
                nameSearch2 = getFixedName(arrString[1].short_name)
            }
            else {
                nameSearch2 = getFixedName(arrString[0].short_name)
                nameSearch = getFixedName(arrString[1].short_name)  
            }
            WardLevelMap(nameSearch, nameSearch2)
            break;
        case "country":
            nameSearch = getFixedName(arrString[0].short_name)
            DistrictLevelMap(nameSearch)
            break;
    }
    console.log(nameSearch,nameSearch2)
}
//lấy population từ database
function getPopulation(P) {
    if (isNaN(P)) {
        var a = P.replace(/\,/g, '')
        a = parseInt(a)
        return a
    }
    else {
        return P
    }
}
//đổi độ đậm nhạt
function opacityOverlay(population) {
    var opacity = (population - minPopulation) / (maxPopulation - minPopulation)
    return opacity;
}
//Đổi màu polygon
function colorOverlay(population) {
    var heso = (population - minPopulation) / (maxPopulation - minPopulation)//dân số tăng hệ số tăng
    var colorchange = heso * 510 //dân số tăng colorchange tăng
    var red = green = blue = 0
    if (colorchange < 50) {
        red = colorchange * 2.55
        green = colorchange * 2.55 + 127.5
    }
    else {
        red = 255
        green = (3 / 21160) * colorchange * colorchange + (-1341 / 2116) * colorchange + (151470 / 529)
    }
    if (population == 'null') {
        red = green = blue = 0
    }
    return ["rgb(", red, ",", green, ",", blue, ")"].join("")
}
//Lẩy center polygon
function polygonCenter(path) {
    var longitudes = []
    var latitudes = []
    var vertices = path; // arry coordinate có dạng [{lat:, lng:}, {},...,{}]

    // put all latitudes and longitudes in arrays
    for (var i = 0; i < vertices.length; i++) {
        longitudes.push(vertices[i].lng);
        latitudes.push(vertices[i].lat);
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
// Data Layer with current level : Ward
function WardLevelMap(name1, name2) {
    if (visible == 'on') {
        currentmap_level = 'Ward'
        heatmap.setMap(null)
        data_layer.forEach(function (feature) {
            data_layer.remove(feature);
        });
        maxPopulation = 81690
        minPopulation = 0
        // var url = 'https://storage.googleapis.com/map_population/'+name1+'.json'
        // console.log(url)
        for (var i = 0; i < ObjectData.length; i++) {
            if (getFixedName(ObjectData[i].Province) == name1 && getFixedName(ObjectData[i].District) == name2) {
                var color = colorOverlay(getPopulation(ObjectData[i].Population))
                data_layer.add(
                    {
                        geometry: new google.maps.Data.Polygon([getCoordinate(i)]),
                        properties: {
                            color: color,
                            id: i,
                            Province: ObjectData[i].Province,
                            District: ObjectData[i].District,
                            Ward: ObjectData[i].Ward,
                            Population: ObjectData[i].Population
                        }
                    })
                data_layer.setStyle(function (feature) {
                    console.log('Ward  level drawn, current map level is: ' + currentmap_level + 'of district: ' + nameSearch2 + ' city: ' + nameSearch)
                    var color = feature.getProperty('color');
                    var opacity = feature.getProperty('fillOpacity')
                    return ({
                        strokeColor: 'purple',
                        strokeOpacity: 1,
                        strokeWeight: 0.2,
                        fillOpacity: 1,
                        fillColor: color,
                    });
                });
            }
        }
    }
}
//Data Layer with current level : District
function DistrictLevelMap(name) {
    if (visible == 'on') {
        currentmap_level = 'District'
        heatmap.setMap(null)
        data_layer.forEach(function (feature) {
            // If you want, check here for some constraints.
            data_layer.remove(feature);
        });
        if (name == 'null') {
            alert('No city or province selected')
        }
        else {
            for (var i = 0; i < districtLevel.length; i++) {
                if (name == districtLevel[i].Province) {
                    maxPopulation = districtLevel[i].Max
                    minPopulation = districtLevel[i].Min
                }
            }
            infowindow.close()
            data_layer.loadGeoJson(
                'https://storage.googleapis.com/map_population/DistrictlevelFULL.json'
            )
            data_layer.setStyle(function (feature) {
                console.log('District level drawn, current map level is: ' + currentmap_level + ' of ' + nameSearch)
                var P = feature.getProperty('Dan_So')
                var provinceName = feature.getProperty('Ten_Tinh')
                var color = colorOverlay(P)
                var visibleState
                if (name == getFixedName(provinceName))
                    visibleState = true
                else
                    visibleState = false
                return {
                    strokeColor: 'purple',
                    strokeOpacity: 1,
                    strokeWeight: 0.2,
                    fillOpacity: 1,
                    fillColor: color,
                    visible: visibleState
                }
            })
        }
    }

}
//initialize gg map on the website
function ProvinceLevelMap() {
    // option = show or hide
    if (visible == 'on') {
        currentmap_level = 'Province'
        data_layer.forEach(function (feature) {
            data_layer.remove(feature);
        });
        heatmap.setMap(null)
        maxPopulation = 8598700
        minPopulation = 327000
        data_layer.loadGeoJson(
            'https://storage.googleapis.com/map_population/citylevelBoundary.json'
        )
        data_layer.setStyle(function (feature) {
            console.log('Province level drawn, current map level is: ' + currentmap_level)
            var cityname = feature.getProperty('Name')
            var color, p
            for (var i = 0; i < StringData.length; i++) {
                if (cityname == StringData[i].City) {
                    color = colorOverlay(StringData[i].Population * 1000)
                    p = StringData[i].Population * 1000
                    feature.setProperty("population", p)
                }
            }
            return {
                strokeColor: 'purple',
                strokeOpacity: 1,
                strokeWeight: 0.4,
                fillOpacity: 1,
                fillColor: color,
            }
        })
    }
}
function geocoderFunction(address) {
    geocoder.geocode({ address: address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.fitBounds(results[0].geometry.viewport);
        }
    });
}
function marker(address) {
    // console.log(address)
    // setTimeout(geocoder.geocode({ 'address': address }, function (results, status) {
    //     if (status == google.maps.GeocoderStatus.OK) {
    //         var m = new google.maps.Marker({
    //             map: map,
    //             position: results[0].geometry.location
    //           });
    //         map.setZoom(10)
    //         map.setCenter(results[0].geometry.location)
    //         console.log(results[0].formatted_address)
    //     }
    //     else{
    //         throw('No results found: ' + status);
    //     }
    // }), 200)

}
function HeatMapDensity() {
    if (currentmap_level != 'heatmap' && visible == 'on') {
        var zoom = map.getZoom()
        currentmap_level = 'heatmap'
        data_layer.forEach(function (feature) {
            data_layer.remove(feature);
        });
        var heatmapData = []
        var centerPath
        for (var i = 0; i < ObjectData.length; i++) {
            centerPath = polygonCenter(getCoordinate(i))
            weight = getPopulation(i) * zoom
            heatmapData.push({ location: centerPath, weight: weight })
        }
        heatmap.setOptions({
            data: heatmapData,
            radius: 15,
            map: map
        })
    }
}
function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}
function TrafficMap() {
    trafficLayer.setMap(map);
}
function BDSBadinh() {
    currentmap_level = 'bds'
    data_layer.forEach(function (feature) {
        data_layer.remove(feature);
    });
    heatmap.setMap(null)
    for (var i = 0; i < Badinh.length; i++) {
        setTimeout(marker(Badinh[i].Address), 200)
    }
}

