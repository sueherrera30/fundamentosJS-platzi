
//vamos a guardar botones:
const btnEmpezar = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const ULTIMO_NIVEL = 10;

// creamos prototipo:
class Juego {
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 500)
    }
    inicializar(){
        //atamos this al juego y no al boton 
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        // va a a agregarle clase de css ya existente, llamar como string.
        btnEmpezar.classList.add('hide') 
        this.nivel = 1
        // guardamos en objeto las variables, no necesitamos poner this.atributo, si es que se llaman igual
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }
    siguienteNivel(){
        this.subnivel = 0
        // cada que se llegue a un nivel se va a iluminar la secuencia
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }
    transformarNumeroAColor(numero){
        switch(numero){
            // no necesitamos break ya que nunca se ejecutaria si es aue entra el return.
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    transformarColorANumero(color){
        switch(color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }
    iluminarSecuencia(){
        // va a recorrer el array de a secuencia hasta el nivel que este el usuario 
        // se reasigna el color DE ESTA MANERA obtenemos el color que se debe iluminar y llamar a la funcion para que lo ilumine.
        for(let i= 0; i < this.nivel;i++){
            //si usas var se ira pisando al medida que se ejecute el ciclo :O 
            const color = this.transformarNumeroAColor(this.secuencia[i])
            // i es importante por la secuencia 
            setTimeout(() =>  this.iluminarColor(color), 1000 * i)
            this.iluminarColor(color)
        }
    }
    iluminarColor(color){
        // el boton que tenga este color, agregale esta clase
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color),350)
    }
    apagarColor(color){
        this.colores[color].classList.remove('light');
    }
    agregarEventosClick(){
        // a cada color se ejecutará una funcion asincronamente, cuando js se quede sin tareas la va a ejecutar
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
    }
    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
    }
    elegirColor(ev){
     const nombreColor = ev.target.dataset.color
     const numeroColor = this.transformarColorANumero(nombreColor)
     this.iluminarColor(nombreColor)
     // se va a comparar color con numero, pero depediendo del subnivel en el que se encuentre.
       if(numeroColor === this.secuencia[this.subnivel]){
        this.subnivel++
        // si esta condicion sigueinte sucede, el jugador cambia de nivel
        if(this.subnivel === this.nivel){
            this.nivel++
            this.eliminarEventosClick()
            if(this.nivel === ULTIMO_NIVEL + 1){
                // gano
            }else {
                //aqui no estamos invocando si no mas bien que solo le decimos cual es la función que debe llamar.
                setTimeout(this.siguienteNivel, 1500)
            }
        }
       } else {
           //perdio 
       }
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

// cada que queramos agregar un atributo, no es necesaro que se ponga en el constructor (sol odeclararlo con this.nombreatributo = )

//EN ELEGIR COLOR:
    // al llamar eventos, y ponemos una funcion como parametro se suele poner como parametro el evento , e . ev
    // ev, en consola nos indica que es el mouseevent con muchos detalles, target nos dira en que boton se realizo etc.
    //con estos eventos, js aveces pierde el contexto ,en relación a this dentro de cada una de la funciones, si logueamos this,es el boton al que se esta llamando, no el evento en si,
    // aqui queremos que this, siga siendo el juego en si, por ello debemos bindear, vamos a atar, si no ponemos this, entonces el this seguira siendo el boton no el juego
    // vamos a llevar el bind hasta arrinba en inicializar.
    // En target, tenemis data sset que nos dira el color, lo guardamos en variable para despues compararlo en la secuencia de nuemeros