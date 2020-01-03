function openNav() {
    document.getElementById("sideMenu").style.width = "400px";
    var mapWidth = document.getElementById("map").offsetWidth /3.5;
    console.log(mapWidth)
    if($(window).width() <= 1024){
      document.getElementById("sideMenu").style.width = mapWidth +"px"
    }

  }
  
function closeNav() {
  document.getElementById("sideMenu").style.width = "0";
  
}

// new function to open and close side menu
function close(){
  var mapsBarContainer = document.getElementById('maps_bar_container')
  var windowWidth = screen.width
  var mapContainer = document.getElementsByClassName('maps_map_container')
  console.log(mapsBarContainer.offsetWidth)
  console.log(windowWidth)
  if(mapsBarContainer.offsetWidth==320){
    mapContainer[0].style.width='100%'
    mapContainer[0].style.left = '0'
    mapsBarContainer.style.width = '0'

  } else if(mapsBarContainer.offsetWidth==0){
      mapContainer[0].style.width='calc(100% - 320px)'
      mapContainer[0].style.left='320px'
      mapsBarContainer.style.width = '320px'
  }
}