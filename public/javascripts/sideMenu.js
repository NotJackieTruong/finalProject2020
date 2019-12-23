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