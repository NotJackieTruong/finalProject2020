function initMap(){
    console.log("This file works and is from gmap.js")
    var uluru ={lat: 21.0453913, lng:105.8172996}
    var src='https://raw.githubusercontent.com/NotJackieTruong/finalProject2020/master/kmlFiles/HaNoi.kml'
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
    haNoiLayer.addListener('click', function(event) {
        var content = event.featureData.description;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
      });
}
