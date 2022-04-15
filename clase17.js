/*let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
console.table(arrayMatriz);

console.table(arrayMatriz[1][1]);*/
/*let matriz = [
    [6, 2, 7, 1, 5],
    [6, 7, 4, 5, 10],
    [71, 12, 11, 16, 15],
    [96, 18, 18, 19, 20],
    [21, 12, 63, 24, 15]
  ];
  function suma(){
  for (let i = 0; i < matriz.length; i++) {
      console.log(`fila ${i}`);
    for (let j = 0; j < matriz[i].length; j++) {
        console.log( matriz[i][j] += 1);
    }
  }
}
console.log(suma(matriz));*/
/*Dada el siguiente cuadro, armar la matriz de 10x10, la cual deberá quedar así: */
let matrix = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
]

/*crear una función que retorne la suma de todos los elementos de la matriz.*/
/*function sumatoria(){
    let sumatoria = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          sumatoria += matrix[i][j];
      }
    } return sumatoria;
}
console.log(sumatoria(matrix));*/

/******1******/
//Primero vamos a crear una matriz de 2x2 con Js.
let arrayMatriz = [];
let arrayX = ["x0", "x1", "x2"];
let arrayY = ["y0", "y1", "y2"];

arrayMatriz[0] = arrayX;
arrayMatriz[1] = arrayY;
//console.table(arrayMatriz);

/******2******/
//¿Cómo accedo al valor almacenado en 1-1?
//console.table(arrayMatriz[1][1]);

/******3******/
//¿Cómo puedo cambiar el valor almacenado en 1-0?
arrayMatriz[1][0] = "coti";
//console.table(arrayMatriz);

/******4******/
//¿Cómo podemos optimizar el funcionamiento de una matriz?
for (let i=0; i<arrayMatriz.length; i++){
  console.log(arrayMatriz[i]);
}
/******4******/
//Cómo podemos imprimir con un ciclo for la primera columna solamente
/*for (let i=0; i<arrayMatriz.length; i++){
  console.log(arrayMatriz[i][0])
}*/
//Y luego, solo la primera fila.
/*for(let i=0; i<= arrayMatriz.length; i++) {
  console.log(arrayMatriz[0][i])
}*/
//Recorrer toda la matriz:

//Bucle que recorre el primer array
for(let i=0; i<arrayMatriz.length; i++) {
  //Bucle que recorre el array que está en la posición i
  for(let j=0; j<arrayMatriz[i].length; j++) {
      console.log(arrayMatriz[i][j]);
  }
}


