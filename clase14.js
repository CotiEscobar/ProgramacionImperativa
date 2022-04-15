/*const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]
function edadMenoresA18 (arrEdades) {
let elMenor = arrEdades[0]
    for (let i = 1; i < arrEdades.length; i++){
        if (arrEdades[i] < elMenor) {
            elMenor=arrEdades[i]
            
        }
    }
    return elMenor
}
console.log(edadMenoresA18(edades));
/*
function edadMenoresA18 (arrEdades) {
let menores = []
    for (let i = 0; i < arrEdades.length; i++){
        if (arrEdades[i] < 18) {
            menores.push(arrEdades[i]);
            
        }
    }
    return menores 
}

console.log(edadMenoresA18(edades))*/

// RESOLUCION HECHA POR MI
const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    { titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo"
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente"
  }
];
// a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

/*function menoresATreinta(array){
    let nuevoArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i].edadTitular < 30){
            nuevoArray.push(array[i]);
        }
        
    }
    return nuevoArray;
}
console.log(menoresATreinta(arrayCuentas));*/

// b. Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
/*
function mayoresATreinta(array){
    let nuevoArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i].edadTitular >= 30){
            nuevoArray.push(array[i]);
        }
        
    }
    return nuevoArray;
}
console.log(mayoresATreinta(arrayCuentas));*/

// c. Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
// d. Obtener la cuenta con el titular de la misma más joven.

/*function titularMenor(array){
    let elMenor = array[0].edadTitular;
        for(let i = 1; i < array.length; i++){
            if (array[i].edadTitular < elMenor){
                elMenor = array[i];
            }
        }
    return elMenor;
}
console.log(titularMenor(arrayCuentas));*/

// e. Obtener un nuevo array por cada tipo de cuenta.

/*function tipoDeCuentaSueldo(array){
    let cuentaSueldo = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].tipoCuenta === "sueldo"){
            cuentaSueldo.push(array[i]);
        }
    }
    return cuentaSueldo;
}
console.log(tipoDeCuentaSueldo(arrayCuentas));

function tipoDeCuentaCorriente(array){
    let cuentaCorriente = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].tipoCuenta === "corriente"){
            cuentaCorriente.push(array[i]);
        }
    }
    return cuentaCorriente;
}
console.log(tipoDeCuentaCorriente(arrayCuentas));*/

//Obtener la cuenta con el menor saldo.
//Obtener la cuenta con el mayor saldo.

/*function menorSaldo(array) {
    let min = array[0].saldo;
    let saldoMin;

    for(let i = 0; i < array.length; i++){
        if (array[i].saldo < min) {
            min = array[i].saldo;
            saldoMin = array[i];
        }
    } return saldoMin;
}
console.log(menorSaldo(arrayCuentas));*/
/*
function mayorSaldo(array){
    let max = array[0].saldo;
    let saldoMax;

    for(let i = 0; i < array.length; i++){
        if (array[i].saldo > max){
            max = array[i].saldo;
            saldoMax = array[i];
        }
    } return saldoMax;
}
console.log(mayorSaldo(arrayCuentas));*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// a. Incrementar en 1 todas las edades.

/*function incrementarEdad(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i] + 1);
    }
}
console.log(incrementarEdad(edades));*/

// b. Obtener el promedio de edades.

/*function promedio(array){
    let suma = 0
    let cantidad = 0
        for (let i = 0; i < array.length; i++){
            suma += array[i]
            cantidad ++
        }
        return suma/cantidad
    }
    console.log(promedio(edades));*/

// c. Obtener el mayor. 

function elMayor(array){
    let max = array[0];

    for (let i = 0; i < array.length; i++){
        if(array[i] > max ){
            max = array[i];
        }
    } return max;
}
console.log(elMayor(edades));