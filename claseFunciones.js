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
    edad: 27,
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