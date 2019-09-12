const sue = {
    apodo: 'sueter',
    edad: 27,
    peso: 55,
}

const sueLucero = {
 ...sue,
}

// Magic numbers, datos globales
const DIAS_DEL_AÑO = 3;
const INCREMENTO_PESO = 0.2;

//acciones, subir o bajar de peso con funciones arrow:

const subirPeso = persona => console.log(persona.peso += INCREMENTO_PESO);
const adelgazar = ({ peso }) => console.log( peso -= INCREMENTO_PESO);

// for( var i= 1; i <= DIAS_DEL_AÑO; i++){
//     const random = Math.random();
//     // este .25 equivale al 25% de los dias
//     // si el random es menor, el 25% de las veces se ejecuta este codigo.
//     if(random < 0.25){
//         //aumenta peso
//         subirPeso(sueLucero);
//     console.log(`sue bajo de peso ${sueLucero.peso} kilos, incredibooool :D )`)
//     }
//     // esto equivale al 75% del peso , lo restante
//     else if(random < 0.5){
//     // adelgaza  
//     adelgazar(sueLucero);
//     }
// }
///WHILE : 
//codigo se ejecuta hasta que la condición se rompa:
const META = sueLucero.peso - 3;
//hacemos funciones, acciones que nos indiquen si eso que hace le sube o baja el peso en cierto periodo del año, los nuero representan el porcentaje de dias.
// estas funciones nso darám true o false.

// const comeMucho = () => Math.random() < 0.3;

// const haciaEjercicio = () => Math.random() < 0.7;

// while(sueLucero.peso > META){
//     if(comeMucho()){
//         subirPeso(sueLucero);
//     }
//     if(haciaEjercicio()){
//         adelgazar(sueLucero);
//     }
// }

console.log(` al finalizar el año ${sueLucero.apodo} pesa ${sueLucero.peso}`)

// SWITCH:
// const signo = prompt('holi, ¿cuál es tu signo?');
// switch (signo) {
//     case 'aries':
//         console.log('En el trabajo, Aries no deberá ser tan exigente consigo mismo, mucho menos si las cosas no salen como las tiene planeadas');
//     break;
//     case 'cancer':
//         console.log('Alguien cercano sabrá aconsejar a Aries sobre un asunto relacionado con el amor, serán lecciones que podrían poner en práctica');
//     break;
//     case 'scorpio':
//         console.log('Una buena nutrición ayudará a Aries a su salud.');        
//     break;
//     default:
//         console.log('que bueno que no crees en esto')
// }
// filter : 
    luisa = {
        altura: 1.60,
        edad: 30,
        hobby: 'ser divertida',
        librosLeidos: 100,
    },
    edgar = {
        altura: 1.80,
        edad: 35,
        hobby: 'crossfit',
        librosLeidos: 55,
    },
    lalo = {
        altura: 1.90,
        edad: 25,
        hobby: 'crossfit',
        librosLeidos: 45,
    }
const personas = [luisa,edgar,lalo]
const esAlto = ({altura}) => altura >= 1.80;

const personasAltas = personas.filter(esAlto);
console.log(personasAltas);

//MAP - pasa a centimetro:
const pasaCentimetros = persona => ({
    ...persona,
    altura: persona.altura * 100,
})
const personasAltas2 = personas.map(pasaCentimetros);
console.log(personasAltas2);

for(var i= 0; i < personasAltas2.length;i++){
    console.log(`este morro en centimetros mide ${personasAltas2[i].altura}`)
}
// REDUCE 
//forma de realziarlo con for:

// ojo acumulador debe ir por fuera.
var acumulador = 0;
for (var i= 0; i < personas.length; i++){
    acumulador = acumulador + personas[i].librosLeidos;
}
console.log(`estas personas en total hay leido ${acumulador}`)

//con reduce:
const conteoLibros = (acumulador, {librosLeidos}) => acumulador += librosLeidos;
const totalLibros = personas.reduce(conteoLibros,0);
console.log(`estas personas en total hay leido ${totalLibros}`)