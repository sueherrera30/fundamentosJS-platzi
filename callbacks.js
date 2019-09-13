const API_URL = 'https://swapi.co/api/';
// :id, se esta refiriendo a un numero, que cabiaremos dinamicamente.
const PEOPLE_URL ='people/:id';

// metrodo que nos permite hacer un request $get acepta varios parametros, como url que queremos acceder,:

// promero parametro es todo lo que compone o se neesita para referirse a la url a acceder,
// se le arega un metodo replace para poner dinamicamente el numero que se desea : `${API_URL}${PEOPLE_URL.replace(':id',1)}`

const peopleUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
// crossdomain, es un objeto con las opciones.
const options = { crossDomain: true }

//esta funcion se ejecuta solo si es success.
const onPeopleResponse = function (character) { 
    console.log(`hola terricola mi nombre es ${character.name}`)
}

$.get(peopleUrl, options, onPeopleResponse);