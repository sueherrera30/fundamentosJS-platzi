const API_URL = 'https://swapi.co/api/';
// :id, se esta refiriendo a un numero, que cabiaremos dinamicamente.
const PEOPLE_URL ='people/:id';

// metrodo que nos permite hacer un request $get acepta varios parametros, como url que queremos acceder,:

// promero parametro es todo lo que compone o se neesita para referirse a la url a acceder,
// se le arega un metodo replace para poner dinamicamente el numero que se desea : `${API_URL}${PEOPLE_URL.replace(':id',1)}`

// const peopleUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`; ---> ya no la usamos ahorita se paso a funcion obtener personajes.
// crossdomain, es un objeto con las opciones.
const options = { crossDomain: true }

//esta funcion se ejecuta solo si es success.
//const characters = [];
const onPeopleResponse = function (character) { 
    console.log(`hola terricola mi nombre es ${character.name}`)
    // characters.push(character.name)
    // characters.map((character) => console.log(character))
}
//  MULTIPLES PERSONAJES! 
// vamos a usar una funcion en lugar de una variable con url fija, sino una funcion que nos permita crear muchas url con diferentes ids.

// function obtenerPersonaje (id){
//   const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
//   $.get(url, options, onPeopleResponse).fail(()=>console.log('esto se rompio'));
// }
// al llamar no sabremos el orden, esto es el asincronismo de js :(
// A) 
//  obtenerPersonaje(1);
// obtenerPersonaje(2);
// obtenerPersonaje(3);

//B) con for 
// for(var i = 0; i < 10; i++){
//     obtenerPersonaje(i);
// }
//llamar a callback para que se vallan ordenando
// obtenerPersonaje(1, function(character){
//     console.log(`hola yo soy ${character.name}`)
// })

//ahora obtener personaje recibira una promesa:
//no olvidar retornar promesa con return 
// en constructor de promesa,se pasa una funcion con parametros de resolve y reject( se puede usar functio o arrow function)
// dentro de funcion de promesa  realizar el llamado asincrono, la peticion


function obtenerPersonaje (id){    
    return new Promise((resolve,reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        //aqui vamos a llamar a la callback donde veremos si es resolve o reject 
        .get(url,options,function(data){
            resolve(data)
            //estafuncion resolve no se ejecutará hasta que la funcion aue la esta llamando se ejecute :O osea que el GET SEA EXITOSO.
        })
        // le pasamos fail por si se rechaza, pasandole funcion de parametro
        .fail(() =>reject(id))
        .then(function(personaje){
            console.log(`hola yo soy ${personaje.name} y soy el personaje numero ${id}`)
        }).catch(onError)       
    }) 

    function onError (id) {
        console.log(`ocurrio un ERROR el personaje ${id}`)   
      }
  }
//ahora llamamos a la persona, pasandole el id que me interesa
//al then le pasamos funcion con l oque queremos que haga el personaje 
// aqui ya nos van a salir en orden la asincronia, mientras que console.log de arriba en linea 61 aun esta desordenado.

    // VERSION FUNCIONAL PERO SIN AWAIT:
    // var ids = [1,2,3,4,5,6,7,9,10,11,12];
    // var promesas = ids.map(id => obtenerPersonaje(id))
    // Promise
    // .all(promesas)
    // .then((personajes) =>console.log(personajes))
    // .catch(onerror)


     //GUARDAMOS EN VARIABLE: cuando todas las promesas se resuelvan guardamelas acá

        // con await la ejecución de nuestra función se detendrá hasta que todas las promesas esten resueltas.
        //pasa usar await debemos de marcarla como ASINCRONA con ASYNC antes de la funcion  
        // toda la parte asincrtona debe poner en un bloque llamada try, dentro de try, lo asincrono, y en catch el error.
    async function obtenerLosPersonajes(){
        var ids = [1,2,3,4,5,6,7,9,10,11,12];
        var promesas =  ids.map(id => obtenerPersonaje(id)) 
        try {
            var personajes =  await Promise.all(promesas)
            // esto es lo que queremos que haga el codigo:
            console.log(personajes)
        }
        catch(id){
            onError(id)
        }
    }
    // llamado de funcion asincrona 
    obtenerLosPersonajes()

    //asinc away no lo soporta todos los nav.