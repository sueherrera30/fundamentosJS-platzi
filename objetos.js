// prototipo,clase - constructor : 
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log('hola!! el hetor');
}

const dany = new Persona('dany','merlos','1.93');
const juanito = new Persona('juanito','martinez','1.33');
const sue = new Persona('sue','herrera','1.53');
const chuy = new Persona('chuy','reyes','1.97');

sue.saludar();
console.log(sue);

// original 
Persona.prototype.soyAlto = function(){
    if(this.altura >= 1.8) {
        console.log("soy un GIGANTE!!!")
    }
    else {
        console.log('estoy enanito');
    }
}
// refactoriza: 
 //Persona.prototype.soyAltote = () => this.altura >= 1.8?console.log("soy un GIGANTE!!!"):console.log('estoy enanito')
 Persona.prototype.soyAltote = function(){this.altura >= 1.8?console.log("soy un GIGANTE!!!"):console.log('estoy enanito')} 
sue.soyAltote();
chuy.soyAltote();

/// HERENCIA PROTOTIPAL: 
// cframos prototipo
function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}
//hacemos una accion

Desarrollador.prototype.greeting = function() {
    console.log(`soy ${this.nombre} de la familia ${this.apellido}`);
}
const suerox = new Desarrollador('suerox','herrera');

suerox.greeting();

// function heredaDe(prototipoPadre,prototipoHijo){
//     // se inicia el proceso,se crea una funcion anonima vacia, puede nombrarse fn o noop, dentro hereda de, vamos a asignar herencia.
//     const fn = function(){}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn
//     claseHija.prototype.constructor = prototipoHijo; 
// }

// herencia con ecmascript6  clases - constructor y super (super nos ayuda a usar this para heredar propiedades de clase padre en este caso con esto desarrolladora va a heredar de persona ):
//prototipo padre
class Mono {
    constructor(apodo,color,lenguaje){
        this.apodo = apodo
        this.color = color
        this.lenguaje = lenguaje
    }
    saludar(fn){
        // fn es un parametro que se esta refiriendo a la funcion de abajo responder saludo 
        const { apodo,color, lenguaje } = this
        console.log(`quiubo lobo yo soy ${apodo} y me gusta el ${color} no programo, pero conozco un poco de ${lenguaje}`)
        if(fn){
            fn(apodo,color,lenguaje)
        }
    }
}
// hereda, prototipo nuevo.
class Desarrolladora extends Mono {
    constructor(apodo,color,lenguaje){
        super(apodo,color,lenguaje)
    }
    saludar(fn){
        const { apodo,color,lenguaje} = this
        console.log(`quiubo lobo yo soy ${apodo} y me gusta el ${color}`) 
        if(fn){
            fn(apodo,color,lenguaje)
        }  
    }
}
//creo elementos nuevos
const lucero = new Mono('suerito','rosa clarito','javascript');
const meme = new Desarrolladora('memecita','azul','ruby');
const emmanuelCross = new Mono('el emma','rojo','python');


function respondersaludo(apodo,color,lenguaje){
    console.log(`buenos dias ${apodo}`)
    if(lenguaje){
        console.log(`a mira no sabia que desarrollabas en ${lenguaje} `)
    }
}
lucero.saludar()
emmanuelCross.saludar(respondersaludo)
meme.saludar(respondersaludo)