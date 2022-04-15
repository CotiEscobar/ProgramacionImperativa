/*Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.*/

//crear una funcion
//enviar como parametro un numero
//hacer un bucle
//iterar de 0 a 100 y mostrar por consola
//sumar el numero pasado x parametro con el de la iteracion, si es par: mostrar por consola
//usar un if 

/*function loopDePares(numero){
    let numDelLoop = 0;
    for(i = 0; i <= 100; i++){
        console.log(numDelLoop);
        numDelLoop = numDelLoop + 1;

        let numeroPar = numDelLoop + numero
        if(numeroPar % 2 === 0){
            console.log(`El ${numeroPar} es par`);
        }
    }
}
loopDePares(2);*/



/*Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.*/

//crear una funcion
//darle como parametro un (numero, palabra)
//hacer un loop de 0 a 100 y consologear cada numero del loop
//sumar los numeros iterados con los numeros del parametro y si es impar consologear la palabra del parametro

/*function loopDeImpares(numero, palabra){
    for(i = 0; i <= 100; i++){
        console.log(i);
        i = i + 1;

        let numeroImpar = i + numero;
        if(numeroImpar % 2 === 1){
            console.log(`${palabra}`);
        }
    }
}
loopDeImpares(2, "numero impar");*/



/*Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
    sumatoria(3) debe retornar 6 porque hace (1+2+3)
    sumatoria(8) debe retornar 36*/

//crear una funcion sumatoria
//darle parametro (numero)
//retornar la suma de todos los numeros anteriores incluido el mismo

/*function sumatoria(numero){
    let sumar = 0;
    for(let i = 1; i <= numero; i++){
        sumar += i;
    }
    return sumar;
}
console.log(sumatoria(8));*/



/*Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]*/

//crear una funcion nuevoArreglo
//mandar parametro (numero)
//crear una variable que contenga un array vacio
//crear un bucle que recorrar el array
//agregar elementos - usar un metodo

/*function nuevoArreglo(numero){
    let array = [];
    for(let i = 1; i <= numero; i++){
        array.push(i)
    }
    return array;
}
console.log(nuevoArreglo(5));*/


/*Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]*/

//crear una funcion split
//mandar como parametro un string

//SPLIT(texto, delimitador, [dividir_por_carácter], [quitar_texto_vacío])


/*Deberás crear una función llamada caracterDelMedio que reciba un string por parámetro y devuelva sus caracteres del medio. Ejemplo:
caracterDelMedio(“Digital House”) debe retornar “l”
caracterDelMedio(“hola”) debe retornar “ol”
caracterDelMedio(“cosas”) debe retornar “s”*/

//crear una funcion 
//enviar como parametro un string
//crear una variable que divida el largo del string (metodo length) a la mitad 
//retornar el resultado 

/*function caracterDelMedio(string){
    let palabra = string;
    let mitadDelString = (string.length / 2);
    let caracter;

    if(mitadDelString % 2 === 0) {
        mitadDelString = mitadDelString - 1;
        caracter = palabra.substr(mitadDelString, 2);
    } else {
       caracter = palabra.substr(mitadDelString, 1);
    }
    return caracter;
}
console.log(caracterDelMedio("constanza"));*/

/*Deberás crear una función llamada moverCeros que reciba un arreglo como parámetro y devuelva otro con los números “0” ordenados al final. Ejemplo:
    moverCeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
    moverCeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]*/

/*let arrayDeNumeros = [1,2,0,1,0,1,0,3,0,1];
function moverCeros(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
        }
    }
}

console.log(moverCeros(arrayDeNumeros));*/

// funciona con dos 0 seguidos
 
let uno = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
let dos = [1, 2, 0, 0, 1, 1, 0, 3, 0, 1];

function moverZeros(arr) {
    let ceros = [];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        ceros.push(arr[i]);
    } else {
      res.push(arr[i]);
    }
    }
    for (let i = 0; i < ceros.length; i++) {
        res.push(ceros[i]);
     }
    return res;
}
console.log(moverZeros(uno));
console.log(moverZeros(dos));

// Deberás crear una función que convierta de snake_case o kebab-case a camelCase. La primera letra del resultado debe estar en mayúsculas solo si en el string original estaba en mayúscula. Ejemplo:
// “el-guerrero-silencioso” debería convertirse en “elGuerreroSilencioso”
// “El_guerrero_silencioso” debería convertirse en “ElGuerreroSilencioso”
 
function conversor(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "_" || str[i] === "-") {
        str = str.replace(str[i + 1], str[i + 1].toUpperCase());
        str = str.replace(str[i], "");
      }
    }
    return str;
  }
// console.log(conversor("Hola_mina_gonzalez"));
// console.log(conversor("hola-mina-gonzalez"));


// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false
 
 
let palindromo = (string)=>{
    let inverso = ""
    for (let i = string.length - 1; i >= 0; i--) {
       inverso += string[i]
    }
    return string === inverso ? true : false
}
//console.log(palindromo("menem"))

  