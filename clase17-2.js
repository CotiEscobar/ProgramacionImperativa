/* Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos. */
 let matrizPorCinco = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
  ];
/* Luego, escribe un algoritmo para sumar todos los numeros en la matriz. */
  function sumarMatriz(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
      }
    }
    return suma;
  }
//console.log(sumarMatriz(matrizPorCinco));

/*Completa la función para que retorne una matriz de 10x10. */
function generarMatriz10por10(num1, num2) {
  let matrizNueva = [];
  for (let i = 0; i < num1; i++) {
    matrizNueva.push([]);
    for (let j = 1; j <= num2; j++) {
      let num = i * 10 + j;
      matrizNueva[i].push(num);
    }
  }
  return matrizNueva;
}
let matriz10por10 = generarMatriz10por10(10, 10);
console.table(matriz10por10);
/*Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.*/