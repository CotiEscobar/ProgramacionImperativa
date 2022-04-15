const prompt = require("prompt-sync")({sigint: true});
//condicionales

function edadParaElBar(edad) {
    if (edad < 0) {
        console.log("Error, edad inválida. Por favor ingrese un numero válido.");
    } else if (edad == 21) {
        console.log("Bienvenido! Felicidades por llegar a mayoría de edad.");
    } else if (edad % 2 == 1) {
        console.log("Sabías que tu edad es impar?");
    }
}
//declarar funcion llamada totalAPagar()
//darle parametros vehiculo y litrosConsumidos
//hacer un if
    //si el vehiculo es coche: precio x litro $86
    //si es moto: 70
    //si es autobus: 55

    //si los litros consumidos estan entre 0 y 25 se añade $50 al total
    //si los litros consumidos son mayores a 25 se añade $25
//fin

function totalAPagar(vehiculo, litrosConsumidos) {
    let pagoPorVehiculo;
    let pagoPorLitrosConsumidos;

    if (vehiculo == "coche") {
        pagoPorVehiculo = 86;
    } else if (vehiculo == "moto") {
        pagoPorVehiculo = 70;
    } else if (vehiculo == "autobus") {
        pagoPorVehiculo = 55;
    }       

    if (litrosConsumidos <= 25) {
        pagoPorLitrosConsumidos = 50;
    } else if (litrosConsumidos > 25) {
        pagoPorLitrosConsumidos = 25;
    }

    let resultadoPagoTotal = pagoPorVehiculo + pagoPorLitrosConsumidos;
    return resultadoPagoTotal;
}

//clientes eligen un sandwich base con su precio
//el sistema debe preguntar que pan y sumar el precio
//el sistema debe preguntar ingredientes extra y agregar el preciO
//crear una funcion que deje al us elegir un sandwich base
//enviar como parametro el sandwich
//hacer un if con los tipos de sandwich y asignarles el precio
//console log con un string que diga cuanto es el total a pagar

let base = prompt("Ingrese la base: ");
let pan = prompt("Ingrese el pan: ");
let queso = prompt("Quiere queso (S/N): ");
let tomate = prompt("Quiere tomate (S/N): ");
let lechuga = prompt("Quiere lechuga (S/N): ");
let cebolla = prompt("Quiere cebolla (S/N): ");
let mayonesa = prompt("Quiere mayonesa (S/N): ");
let mostaza = prompt("Quiere mostaza (S/N): ");

let total_base = 0;
let total_pan = 0;
let total_add = 0;
let total = 0;

function sandwiches(
  base,
  pan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza
) {
  switch (base) {
    case "pollo":
      total_base =  150;
      break;
    case "carne":
      total_base =  200;
      break;
    case "veggie":
      total_base =  100;
      break;
  }

  switch (pan) {
    case "blanco":
      total_pan =  50;
      break;
    case "negro":
      total_pan =  60;
      break;
    case "sinGluten":
      total_pan = 75;
      break;
  }

  queso === "S" ? (total_add = total_add + 20) : total_add;
  tomate === "S" ? (total_add = total_add + 15) : total_add;
  lechuga === "S" ? (total_add = total_add + 10) : total_add;
  cebolla === "S" ? (total_add = total_add + 15) : total_add;
  mayonesa === "S" ? (total_add = total_add + 5) : total_add;
  mostaza === "S" ? (total_add = total_add + 5) : total_add;

  total = total_base + total_pan + total_add;

  return total;
}

sandwiches(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza);

console.log("El total es: " + total);

//creá una función que reciba un parámetro numérico y verifique si el mismo es el
//número secreto.El número secreto deberá ser seleccionado de manera random de
//entre 1 y 10. En caso de ser correcto,
//retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
//mensaje de aliento junto con el número ingresado y el secreto.

let numero = prompt("Elegi un numero del 1 al 10: ");

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function numeroSecreto() {
    if (numero == numeroAleatorio) {
        console.log("Felicidades! Adivinaste el numero secreto");
    } else {
        console.log(`No adivinaste. Ingresaste el ${numero} pero el numero secreto era ${numeroAleatorio}`);
    }

}
numeroSecreto();


function numeroSecreto(num) {
    const generarAleatorio = (min , max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    let aleatorio = generarAleatorio(1,11);

    if (num === aleatorio) {
        console.log("Felicidades! Adivinaste el numero secreto")
    } else {
        console.log(`No adivinaste pero puedes seguir intentando. Ingresaste el ${numero} pero el numero secreto era ${aleatorio}`);
    }
}

for (let i = 0; i <= 100; i++){
    console.log(numeroSecreto(numero));
}

//crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
//altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
//siguiente:
// la velocidad debe ser menor a 1000 km/h
// la altura debe ser mayor o igual a 2000 m y menor a 3000 m

function abrirParacaidas(velocidad, altura){
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        console.log("El paracaidas se abre");
    } else {
        console.log("El paracaidas no se abre");
    }
}

//usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
//"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
//inglés.
//En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
//informe que la palabra ingresada es incorrecta.

let palabra = prompt(`Ingresa una de estas palabras "casa", "perro", "pelota", "árbol" o "genio" :`);

switch (palabra) {
    case "casa":
        console.log("house");
    break;
    case "perro":
        console.log("dog");
    break;
    case "pelota":
        console.log("ball");
    break;
    case "arbol":
        console.log("tree");
    break;
    case "genio": 
        console.log("genius");
    break;
    default:
        console.log("La palabra ingresada es incorrecta");
    break;
}
//
let valoracionPelicula = prompt("Contanos si la pelicula te parecio(muy mala, mala, mediocre, buena, muy buena): ");

switch (valoracionPelicula) {
    case "muy mala":
        console.log(`Calificaste la pelicula como ${valoracionPelicula}. Lo lamentamos mucho`)
    break;
    case "mala":
        console.log(`Calificaste la pelicula como ${valoracionPelicula}. Lo lamentamos mucho`)
    break;
    case "mediocre":
        console.log(`Calificaste la pelicula como ${valoracionPelicula}. Lo lamentamos mucho`)
    break;
    case "buena":
        console.log(`Calificaste la pelicula como ${valoracionPelicula}. Gracias por tu visita`)
    break;
    case "muy buena":
    console.log(`Calificaste la pelicula como ${valoracionPelicula}. Gracias por tu visita`)
    default:
        console.log(`Ingresaste un valor invalido`);
break;
}