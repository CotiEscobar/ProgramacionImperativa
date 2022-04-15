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
  
console.log(personas[0].estatura);

for (let i = 0; i < personas.length; i++) {
    for (let j = 0; j < personas.length; j++) {
      if (personas[j].estatura > personas[j + 1].estatura) {
        let aux = personas[j];
        personas[j] = personas[j + 1];
        personas[j + 1] = aux;
      }
    }
  }
  