
// Escucho cuando mi documento HTML se carge
window.addEventListener('load',   () => {

    

    //Capturo mi pantalla donde se haran las operaciones por medio del ID
    const pantalla = document.getElementById("input");

    //Capturo los botones numericos por medio de la clase
    const botones = document.getElementsByClassName("verde");

    //Capturo mis botones de operadores por medio de una clase
    const operadores = document.getElementsByClassName("obscuro");

    //pongo mis botones numericos en un arreglo de elementos HTML
    const botonesNumericos = Array.from(botones);

    //pongo mis botones numericos en un arreglo de elementos HTML
    const botonesOperadores = Array.from(operadores);

    

    
    // Le agrego el evento CLICK a los BtnNumericos por medio de ForEach 
    // y el TagName.
    botonesNumericos.forEach((button)=> {
        button.addEventListener('click', () => {
            calculadora(button,pantalla)
        })
        
    })

    
    // Le agrego el evento CLICK a los BtnOperadores por medio de ForEach
    // y el TagName.
    botonesOperadores.forEach((button)=> {
        button.addEventListener('click', () => {
            calculadora(button,pantalla);
           
        })
    })
})


function calculadora(button,pantalla) {

    
    switch (button.innerHTML) {
        case 'c':
            borrar(pantalla);

            break;
        case '=':
            calcular(pantalla)
            break;    
    
        default:
            actualizar(pantalla, button)
            break;
    }
}


function calcular(pantalla) {
    sonidosBotones();
   pantalla.innerHTML = eval(pantalla.innerHTML);
}

function actualizar(pantalla, button) {
    sonidosBotones();
    if (pantalla.innerHTML == 0) {
        pantalla.innerHTML = '';
    }
    pantalla.innerHTML += button.innerHTML;
}

function borrar(pantalla) {
    sonidosBotones();
     pantalla.innerHTML = 0;
}










