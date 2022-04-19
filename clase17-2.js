/*** 1 ***/
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
/*** 2 ***/
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
//console.table(matriz10por10);
/*** 3 ***/
/* a) crear una función que nos retorne la sumatoria de la primer y última columna (sumar la primera Y ya la última)
   b) crear una función que nos retorne la sumatoria de la quinta y sexta fila (la suma de ambas)*/
let matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],// i 0
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],// i 1
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],// i 2
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],// i 3
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],// i 4 
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],// i 5
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],// i 6
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];
function sumarPrimerColumna(){
sumatoria = 0;
for (let i=0; i<matrix.length;i++){
  for(let j=0; j<matrix[i].length;j+=9){
      sumatoria += matrix[i][j]
  }
}
return sumatoria;
}
//console.log(sumarPrimerColumna());

function sumarQuintaYSextaFila(){
  sumatoria = 0;
  for(let i=5;i<=6;i++){
    for(let j=0; j<matrix[i].length;j++){
      sumatoria += matrix[i][j]
    }
  }
return sumatoria;
}
//console.log(sumarQuintaYSextaFila());
/*Por último, vamos a generar dos funciones:
c) Una va a sumar los valores en la diagonal marcada en rojo.
d) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.*/
//let matrizDe10 = matrixBuilder();
 
function sumaAscendente(matriz) {
  let sumatoria = 0;
  for (let i = 0; i < matriz.length; i++) {
    sumatoria += matriz[i][i];
  }
  return sumatoria;
}
//console.log(sumaAscendente(matrizDe10));
 
function sumaDescendente(matriz) {
  let sumatoria = 0;
  for (let i = 0; i < matriz.length; i++) {
    sumatoria += matriz[i][matriz.length - (1 + i)];
  }
  return sumatoria;
}
//console.log(sumaDescendente(matrizDe10));