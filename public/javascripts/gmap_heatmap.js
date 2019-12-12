function HeatMapDensity(Gmap, visible) {
    var zoom = Gmap.getZoom()
    currentmap_level = 'heatmap'
    data_layer.forEach(function (feature) {
        data_layer.remove(feature)
    })
    var heatmapData = []
    var centerPath
    for (var i = 0; i < ObjectData.length; i++) {
        centerPath = polygonCenter(getCoordinate(i))
        weight = getPopulation(i)*zoom
        heatmapData.push({ location: centerPath, weight: weight })
    }
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        radius: 15
    })
    if (visible == true) {
        heatmap.setMap(null)
        google.maps.event.addListener(Gmap, 'zoom_changed', function () {
            projection = new MercatorProjection()
            console.log(projection.getNewRadius(map, 15))
            heatmap.setOptions({radius: projection.getNewRadius(map, 15)})
        });
        heatmap.setMap(Gmap);
    }
    else
        heatmap.setMap(null)
}

