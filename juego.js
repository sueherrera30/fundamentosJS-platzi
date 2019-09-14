
//vamos a guardar botones:
const btnEmpezar = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');

// creamos prototipo:
class Juego {
    constructor(){
        this.inicializar()
    }
    inicializar(){
        // va a a agregarle clase de css ya existente, llamar como string.
        btnEmpezar.classList.add('hide') 
    }
}
function empezarJuego() {
    //creamos prototipo en base a padre.
    const juego = new Juego()
}

// boton  de inicializar, estará oculto, es el trabajo de la funcion inicializar.