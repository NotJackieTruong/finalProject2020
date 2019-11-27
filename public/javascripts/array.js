// test tach string coordinate thanh array coordinate objects *OK*
function storeCoordinate(xVal,yVal, array){
    array.push({lng: xVal, lat: yVal})
}
function getCoordinate(id){
    var CoordinateString = ObjectData[id].Coordinates
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
