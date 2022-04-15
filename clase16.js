/* ---------------------------1------------------------------------
Escriban un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”.*/

/*function ceroAlCien(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
           console.log("fizzbuzz");
        } else if(i % 3 === 0){
            console.log("fizz");
        } else if(i % 5 === 0){
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}
ceroAlCien();*/

/*-------------------------2------------------------------------------
Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'.*/
/*let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
var index = 1;

function indice(unArray, unIndice){
   console.log(unArray[unIndice]);
}
indice(array, index);*/

/*--------------------3-------------------------------------------
Escribir una función que, dado un número de mes, devuelva la cantidad
de días de ese mes —suponiendo que no es un año bisiesto.

function diasDelMes(numeroMes) {
    let cantidadDeDias;
    if ([4, 6, 9, 11].includes(numeroMes)) {
      cantidadDeDias = 30;
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(numeroMes)) {
      cantidadDeDias = 31;
    } else {
      cantidadDeDias = 28;
    }
    return cantidadDeDias;
  }
  
  console.log(diasDelMes(7));*/

/*-----------------------------4---------------------------------
Escribir una función de JavaScript que invierta un número. Por ejemplo,
si x = 32443, la salida debería ser 34423.

function reverse(num) {
  num = num + "";
  let aux = "";

  for (let i = num.length - 1; i >= 0; i--) {
    aux += num[i];
  }
  return +aux;
}
console.log(reverse(123));*/
/*--------------------------5-----------------------------------------

*/