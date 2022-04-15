const prompt = require("prompt-sync")({sigint: true});
// *** 1 ***
/*let frase = prompt(`Ingresa la frase que más te guste: `);
console.log(`${frase}`);*/

// *** 2 ***
/*let nombre = prompt(`Escribi tu nombre por favor: `);
console.log(`Hola ${nombre}!!!`);*/

//*** 3 ***
/*let primerNum = Number(prompt(`Ingresa un numero: `));
let segundoNum = Number(prompt(`Ingresa otro numero: `));

let total = primerNum + segundoNum;

console.log(`El total es ${total}`);*/

//*** 4 ***
/*let anioNacimiento = Number(prompt(`Ingresa el año en el que naciste: `));
let edad = 2022 - anioNacimiento;

console.log(`Tenes ${edad} años!`);*/

//*** 5 ***

//*** 6 ***
/*
for (let i = 0; i < 100; i ++) {
    let resultadoSuma = i + 1;
    
    if (resultadoSuma % 2 === 0) {  
    console.log(`El resultado es: ${resultadoSuma}`)
    }
}*/
//*** 7 ***
/*
let nombres = ["Pedro", "Pablo", "Maria", "Diana"];

function nombrar(nombre){
    console.log(`Hola, ${nombre}`);
}
for (let i = 0; i < nombres.length; i ++){
    console.log(nombres[i]);
}
*/
//*** 8 ***
/*
let numero = prompt(`Ingresa un numero: `);
let porcentaje = numero * 0.18;

    if (numero > 500) {
       console.log(`El 18% de ${numero} es ${porcentaje}`);
    }*/
//*** 9 ***
/*let arreglo = [17, 16, 23, 3];
function elemento() {
    if (arreglo.length < 3) {
        console.log(-1);
    } else {
        console.log(arreglo[2]);
    }
}
elemento();
*/
//*** 10 ***
/*
let num = prompt(`Ingrese un numero de hasta 2 cifras: `);

function numeroDosCifras(){
    if (num < 10) {
        let faltaParaDos = (10 - num);
        console.log(`El numero que ingresaste es de una cifra, te falta ${faltaParaDos} como minimo`);
    } else if (num < 100) {
        let faltaParaTres = (100 - num);
        console.log(`El numero que ingresaste es de dos cifras, para que sean tres cifran necesitas como minimo ${faltaParaTres}`);
    }
}   
numeroDosCifras();
*/
//*** 11 ***

//*** 12 ***
let n = Number(prompt(`Ingrese un numero natural: `))
function sumaNumerosNaturales() {
    let sumar = 0;
    for (let i = 0; i <= n; i++){
        sumar += i;
    }
    console.log(sumar);
}
sumaNumerosNaturales();