function HeatMapDensity(){
    var heatmapData = []
    var centerPath
    for(var i = 0; i < ObjectData.length; i ++){
        centerPath = polygonCenter(getCoordinate(i))
        weight = getPopulation(ObjectData[i].Population)/81690
        heatmapData.push({location: centerPath, weight: weight})
    }
    return heatmapData
}


