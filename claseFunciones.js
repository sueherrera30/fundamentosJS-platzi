var nombre = 'suerox', edad = 27;

function infoPersonal (nombrecito,años){
    console.log(`hola ella es ${nombrecito} y tiene ${años} de edad, incredibol right?`);
};

infoPersonal(nombre,edad);
infoPersonal('cristhian',28);
infoPersonal('nini',29)

// scope:

function nombreMayusculo (name) {
    name = name.toUpperCase();
    console.log(name)
}
nombreMayusculo (nombre);

// objetos: 
var sue = {
    apodo:'suerox',
    edad: 27,
    hobby: 'cross',
    instrumento: 'cello',
}
var alan = {
    apodo: 'alanrex',
    edad: 37,
    hobby: 'dinos',
    instrumento: 'guitarra',
}
function nombreObjeto (persona){
    console.log(persona.instrumento)
};
nombreObjeto(alan);
nombreObjeto(sue);
 
function nombreObjetoDos({ hobby,apodo,instrumento }){  
    // es necesario reasignar el parametro.
   hobby =  hobby.toUpperCase();
    console.log(`Hola!!! el es ${apodo} ama mucho ${hobby} y toca ${instrumento}`)
}
nombreObjetoDos(alan);
nombreObjetoDos(sue);
nombreObjetoDos({hobby:'hacer burpees',instrumento:'sax',apodo:'el chikarcas'});


// DESTRUCTURAR OBJETOS:

// en lugar de duplicar en nombre de funcion,
// el stributo como : 
    //var nombre = persona.nombre 
// podemos destructurar objeto que es lo mismo que:
// vamos a declarar la variable tal quer se refiere al atributo de cierto objeto(este objeto debe pasarse como parametro de la func, y lllamarlo especificasmente cuando se invoca function)
function nombreObjetoTres(persona){  
    // var apodo = persona.apodo
    var { apodo, instrumento } = persona;
    console.log(`Hola!!! el es ${apodo.toUpperCase()} y toca ${instrumento}`);
}
nombreObjetoTres(alan)
nombreObjetoTres(sue)

/// PARAMETROS COM OREFERNCIA:
var cumple = (persona) => {
    var personaNueva=   {
    ...persona,
    edad:persona.edad += 1,
    regaloIdeal: 'piano',
    comida: ['chilaquiles','pastel']
}
console.log(`Hola!!! el es ${personaNueva.apodo.toUpperCase()} y su comida favorita es  ${personaNueva.comida[0]}`);
}
/// FUNCIONES QUE RETORNAN VALORES: 

// En este caso estamos almacenando en una variable un valor que sera fijo, al ser asi se debe amacenar en una cosntante,
// ya que son valores que no de  deben modificarse, es uan biuena practica guardarlos con nombres en MAYUSCULAS y separados
// de guón bajo.

const MAYORIA_DE_EDAD = 18;
// aqui retornamos el valor de nuestra condicional.
function mayorEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}
function ImprimeSiesMayorDeEdad(persona){
    if(mayorEdad(persona)) {
        console.log(`tiene ${persona.edad}, es mayor de edad :)`);
    }
}
ImprimeSiesMayorDeEdad(sue);

// ARROW FUNCTION: 
// es como una funcion anonima , osea una funcion asignada a una variable, como:
// Eso mismo pero en una sola linea que puede remplazar o ser lo mismo que funcion de arriba:mayorEdad :
//ARROW FUNCTION, Su sintaxis es asi, por lo regular se usa  de esta manera si tiene mucho codigo 
// si el return es muy pequeño podemos = QUITAR  EL RETURN Y LAS LLAVES, ADEMÁS DE LOS PARENTESIS DEL PARAMETRO :O

//opcion UNO , donde solo obvias parentesis de parametro:
        //const validateAge = persona => { return persona.edad >= MAYORIA_DE_EDAD};

//opcion DONDE , donde bvia parentesis de parametro Y SI SOLO UNA LINEA, voy a quitar  RETURN Y LAS LLAVES:
        //const validateAge = persona => persona.edad >= MAYORIA_DE_EDAD;

// opcion TRES, donde estoy destructurando el objeto del parametro, ojo aqui, debe ir en parentesis y llaves para indicar que esun objeto.
const validateAge = ({ edad }) => edad >= MAYORIA_DE_EDAD;

const printIfIsOlder = (persona) => {
     // por lo regular aqui se pone RETURN pero como estamos usando console.log, choca.
     if(validateAge(persona)){
        console.log('es mayorcito este beib :D <3');
     }
}
printIfIsOlder(alan);



