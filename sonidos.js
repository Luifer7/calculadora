
window.addEventListener("keyup", function (event) {

    
   
  
    if (event.key == " ") {
        console.log("has presionado espacio");
      
    } 
    
  },false);


// Funcion sonidos  



function sonidosBotones() {
    const soniditos = new Audio ('k.mp3');
    soniditos.play();
    soniditos.loop = false;
    soniditos.playbackRate = 3;
     
}  