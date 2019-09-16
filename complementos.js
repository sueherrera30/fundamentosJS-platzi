//  DECLARAR VARIABLES:

// var, se pdora modificar en cualquier lado.
// al usar let el alcance la de la variabe  cse vav reducvir al bloque de codigo donde esta siendo utilizada.
// let reduce su ALCANCE AL BLOQUE AL QUE ES UTILIZADO, se podra usar, pero debe declarar mas arriba para que agarre un bloque mas grande donde si la identifique.
// CONST: no podemos volver a asignar la variable, no se puede reasignar solo inicializar.
// si podemos modificar el elemento por ejemplo un array que este guasrdado ahi, pero el tipo de valor no podra ser reasignado.

// si hacemos un for, y declaramos la i con let, si quiero loguear por fuera del for, me dira que no existe, por que no etra en el alcance, solo cubrira el bloque del for.
// lo mejor es usar let, para no redefinir una variable y esta reasignando: NO USAR VAR.-

// TIERMPO EN JS:

//marth.abs - nos calculara el numero absoluto, si es negativo lo transformara a positivo.
 function diasEntreFechas(fecha1,fecha2){
     const unDia = 1000 * 60 * 60 * 24
     const diferencia = Math.abs(fecha1 - fecha2)
     return Math.floor(diferencia/unDia);
 }

 // RECURSIVIDAD:

 // mnecesitamos un caso base y un caso recursivo, cuando el caso base, cuando el dividendo es menor estricto del divisor


 //MEMORIZACION 


