/*Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase.*/
function contarVocales(texto) {
    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let contador = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (vocales.indexOf(texto[i]) >= 0) {
        ++contador;
      }
    }
    return contador;
  }
//console.log(contarVocales("texto"));
/*/**
 * Realiza una función que escriba
 *  una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
*/
for(let i=0; i<=6;i++){
    let resultado = '';
    
    for(let j=0; j<=i; j++){
        resultado += '* ';
        }
}
//console.log(resultado);
for(let i=1; i<=30; i++){
    for(let j=1; j<i; j++){
        console.log(i);
    }
}