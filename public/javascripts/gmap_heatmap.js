function HeatMapDensity(Gmap, visible) {
    currentmap_level = 'heatmap'
    data_layer.forEach(function (feature) {
        data_layer.remove(feature)
    })
    var heatmapData = []
    var centerPath
    for (var i = 0; i < ObjectData.length; i++) {
        centerPath = polygonCenter(getCoordinate(i))
        weight = getPopulation(i)
        heatmapData.push({ location: centerPath, weight: weight })
    }
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        radius: 10
    });
    if (visible == true) {
        heatmap.setMap(null)
        heatmap.setMap(Gmap);
    }
    else
        heatmap.setMap(null)
}

