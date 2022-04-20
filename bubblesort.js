//ORDENAMIENTO DE NUMEROS DE MENOR A MAYOR
let arrayNumeros = [17, 3, 31, 23, 16];

function bubbleSort(arr){
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - 1; j++){
        if (arr[j] > arr[j + 1]){
            let aux = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = aux;
        }
    }
}
return arr;
}
//console.log(bubbleSort(arrayNumeros));

//copia del array de numeros:
let arrayNumeros2 = [...arrayNumeros];
//console.log(`Copia del array de numeros usando spread op ${arrayNumeros2}`);
let arrayNumeros3 = arrayNumeros.slice();
//console.log(`Copia del array de numeros usando slice ${arrayNumeros3}`);

//ORDENAMIENTO DE NUMEROS DE MAYOR A MENOR
function mayorAMenor(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[i]<arr[i+1]){
        let aux = arr[i]; 
        arr[i] = arr[i+1]; 
        arr[i+1] = aux; 
      }
    }
  }
  return arr
}
//console.log(mayorAMenor(arrayNumeros2));

//ORDENAMIENTO DE ARRAY CON STRINGS
let nombres = ["Agustina", "Brenda", "bianca", "Laura", "constanza", "indra", "Paula"];

function ordenarNombres(arr){
  for (let i = 0; i< arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j]>arr[j+1]){
        let aux = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = aux;
      }
    }
  }
  return arr
}
//console.log(ordenarNombres(nombres));

//ORDENAMIENTO DE ARRAY CON STRINGS PASANDOLOS A MINUSCULA
function ordenarNombresEnMinuscula(arr){
  for (let i = 0; i< arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].toLowerCase() >arr[j+1].toLowerCase()){
        let aux = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = aux;
      }
    }
  }
  return arr
}
//console.log(ordenarNombresEnMinuscula(nombres));

//ORDENAMIENTO DE UN ARRAY DE OBJETOS
let personas = [
    {
      nombre: "Dua",
      apellido: "Lipa",
      ocupacion: "cantante",
      estatura: 173
    },
    {
      nombre: "Ariana",
      apellido: "Grande",
      ocupacion: "cantante",
      estatura: 160
    },
    {
      nombre: "Taylor",
      apellido: "Swift",
      ocupacion: "cantante",
      estatura: 180
    }
  ];
  
//console.log(personas[0].estatura);

for (let i = 0; i < personas.length; i++) {
    for (let j = 0; j < personas.length - 1; j++) {
      if (personas[j].estatura > personas[j + 1].estatura) {
        let aux = personas[j].estatura;
        personas[j].estatura = personas[j + 1].estatura;
        personas[j + 1].estatura = aux;
      }
    }
  }
console.table(personas);