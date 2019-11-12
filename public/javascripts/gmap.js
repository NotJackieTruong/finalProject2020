function initMap(){
    console.log("This file works")
    var uluru ={lat: 21.0453913, lng:105.8172996}
    var src=import('../kmlFiles/HaNoi.kml')
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom:6,
            center: uluru
        })
    var haNoiLayer = new google.maps.KmlLayer(src,{
        suppressInfoWindows: true,
        preserveViewport: false,
        map:map
    })
    haNoiLayer.addListener('click', function(event){
        var content=event.featureData.infoWIndowHtml;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML=content;
    })
    var marker = new google.maps.Marker({
        position:uluru, 
        title: "uluru",
        map:map,
    });
    marker.setMap(map);
}
