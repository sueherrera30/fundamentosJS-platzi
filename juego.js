
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
        this.generarSecuencia()
        this.siguienteNivel()
    }
    inicializar(){
        // va a a agregarle clase de css ya existente, llamar como string.
        this.elegirColor = this.elegirColor.bind(this)
        btnEmpezar.classList.add('hide') 
        this.nivel = 5
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }
    siguienteNivel(){
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }
    transformarNumeroAColor(numero){
        switch(numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
            // aqui no es necesario poner break por return 
        }
    }
    iluminarSecuencia(){
        // nivel ira hasta el nivel donde se encuentra el juego 
        // se reasigna el color DE ESTA MANERA obtenemos el color que se debe iluminar y llamar a la funcion para que lo ilumine.
        for(let i= 0; i < this.nivel;i++){
            //si usas var se ira pisando al medida que se ejecute el ciclo :O 
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() =>  this.iluminarColor(color), 1000 * i)
            this.iluminarColor()
        }
    }
    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color),350)
    }
    apagarColor(color){
        this.colores[color].classList.remove('light');
    }
    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
    }
    elegirColor(ev){
        const nombreColor =
    }
  
   
}
function empezarJuego() {
    juego = new Juego();
}

// boton  de inicializar, estará oculto, es el trabajo de la funcion inicializar.

// general secuencia de colores, que usuario debe repetir a lo largo del juego:

//array de nuemros que representan los colores, en constructor, generar secuencia en una funcion , definira la secuencia en un atributo 
// otra masnera de generar array es con palabra new  MAS NUMERO DE ELEMENTOS. y lo llenamos con funcion fill(pasara como parametro el valor con el que quiere estar lleno ese espacio de index, ponemos cero para que este vario pero si existente).
// Y QUE debe estar lleno y no podra ser mapeado.

// al mapear, lo que haremos es poner math random, valor entre 0 y 1 da random , lo multiplamos por 4 , por que es el numero de colores, lo vamos a redondear, para tener numero entero .
// al inicializar, poner nivel ,este esta en funcion inicializar.

//JS nos permite guardar atributos , si se llaman gual sin la necesidad de poner 2 pubtos, si es que la la tenemos guardada en una VARIABLE
// vamos a guardar en objeto, los colores, dentr de funcion inicializar.

//transformarColor, pasara el numero a un color 

// lo que hace el for, es pedir que cada uno de los numero del arreglo se transforme en color.


/// this se referira al objeto juego, pero cuando queremos que se contextualice a un elemento como el boton
// podemos usar . bind que significa como atar o enlazar, mira este metodo atalo a este this, debemos especificar el this.
// si no lo ponemos, 
// con el bind, el this, sera el juego no cada uno de los botones.