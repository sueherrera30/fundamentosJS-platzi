var nombre;
nombre = 'sue', apellido = 'Martinez cancetines', edad = 27;

console.log('hola' + ' ' + nombre + ' ' + '¿cuantos años tienes? dicen que' + ' ' + edad + ' ' + '¿cierto?');

var nombreMayusculo = nombre.toUpperCase();
console.log(nombreMayusculo)

var primeraletraNombre = nombre.charAt(0);
console.log(primeraletraNombre)

var cantidadletras = nombre.length;
console.log(cantidadletras)

var interpolacion = `que onda ya vi que te llamas ${nombre} ${apellido.toUpperCase()} las letras nones de tu nombre es ${nombre.substr(0,2).toUpperCase()}`;
console.log(interpolacion);

// ultima letra: 

var longitud = nombre.length;
var ultimaLetra = nombre.charAt(longitud -1);
console.log(ultimaLetra);

var concatenado = nombre.concat(' ' + apellido);
console.log(concatenado);

var incluido = nombre.includes('e');
console.log(incluido);

var repetir = nombre.repeat(5);
console.log(repetir);

var repetirDividido = repetir.split('');
console.log(repetirDividido);
// no divide por string si no por letritas :(

    var remplazar = nombre.replace('s','F');
    console.log(remplazar);