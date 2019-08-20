var nombre = 'suerox', edad = 27;

function infoPersonal (nombrecito,años){
    console.log(`hola ella es ${nombrecito} y tiene ${años} de edad, incredibol right?`);
};

infoPersonal(nombre,edad);
infoPersonal('cristhian',30);
infoPersonal('nini',28)

// scope:

function nombreMayusculo (name) {
    name.toUpperCase();
    console.log(name)
};

nombreMayusculo (nombre);