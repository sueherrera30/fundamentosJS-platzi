const sue = {
    apodo: 'sueter',
    edad: 27,
    peso: 55,
}

const sueLucero = {
 ...sue,
}

// Magic numbers, datos globales
const DIAS_DEL_AÑO = 365;
const INCREMENTO_PESO = 0.2;

//acciones, subir o bajar de peso con funciones arrow:

const subirPeso = persona => console.log(persona.peso += INCREMENTO_PESO);
const adellgazar = ({ peso }) => console.log( peso -= INCREMENTO_PESO);

for( var i= 1; i <= DIAS_DEL_AÑO; i++){
    const random = Math.random();
    // este .25 equivale al 25% de los dias
    // si el random es menor, el 25% de las veces se ejecuta este codigo.
    if(random < 0.25){
        //aumenta peso
        subirPeso(sueLucero);
        console.log(`sue subio de peso ${sueLucero.peso} kilos, shameee :()`)
    }
    // esto equivale al 75% del peso , lo restante
    else if(random < 0.5){
        // adelgaza 
        adellgazar(sueLucero);
        console.log(`sue bajo de peso ${sueLucero.peso} kilos, incredibooool :D )`)
    }
}

