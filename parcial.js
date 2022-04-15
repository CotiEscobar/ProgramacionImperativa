/*  EJERCICIO 1
1- Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:
nombre
apellido 
camada
esParcial (VERDADERO)*/
let estudiante = {
    nombre: "Paula Constanza",
    apellido: "Escobar",
    camada: 7,
    esParcial: true, 
};
/*
2-  Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 
	 NOTA < 4 :           desaprobado
 4 <= NOTA < 7 :  debe rendir examen final 
	 NOTA >= 7 :         promocionado.  
La función deberá retornar la condición final del alumno (solo retorna la palabra). 
Al momento de llamar a la función, deberás mostrar la siguiente frase: 
	“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]” 
 */
let numeroDeNota = 9;
function nota(numero){
    let condicionFinal;
    if(numero < 4){
        condicionFinal = "desaprobado";
    } else if(numero >= 4 && numero < 7){
        condicionFinal  = "debe rendir examen final";
    } else if(numero >= 7){
        condicionFinal = "promocionado";
    }
    return condicionFinal;
}
console.log(`El alumno obtuvo una nota igual a ${numeroDeNota} por lo tanto su condición es ${nota(numeroDeNota)}.`);
/*EJERCICIO 2
1- Crea 1 array llamado clase.  
2- Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
A) Agrega estos 3 objetos al array llamado clase.
B) Imprimir el array para ver que contenga esos objetos.
*/
let clase = [
    {
        nombre: "Esteban",
        apellido: "Piazza",
        bimestre: 1,
    },
    {
        nombre: "Leandro",
        apellido: "Borelli",
        bimestre: 1,
    },
    {
        nombre: "Martin",
        apellido: "Cejas",
        bimestre: 1,
    }
]
console.log(clase);
/*
3- Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición. 
4- Deberás hacer el correcto llamado de la función mostrando el array clase antes y después de llamar a siguienteCursada.*/
function siguienteCursada(array){
    let nuevoArray = [];
    for(let i = 0; i < array.length; i++){
        array[i].bimestre += 1;
        nuevoArray.push(array[i])
    }
    return nuevoArray;
}
console.log(clase); //muestra el antes
console.log(siguienteCursada(clase)); //muestra el despues

/*EJERCICIO 3
1. Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su progreso completo en PlayGround (true, false). Para ello deberán: 
Crear una constante asistenciaMinima que almacene el número mínimo de asistencias permitidas para la aprobación de la materia, en este caso serán 23 asistencias mínimas. 
La función deberá recibir como parámetros la cantidad de asistencias  y la condición final ante PlayGround del alumno.
Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su progreso final está completo. Si alguna de estas opciones no se cumple, el alumno será automáticamente desaprobado. 
Deberá retornar un string aprobado o desaprobado según corresponda
*/
const asistenciaMinima = 23;

function aprobacionPorAsistencias(asistencias, condicionFinal){
    if(asistencias >= 23 && condicionFinal === true){
        return "aprobado"
    } else {
        return "desaprobado"
    }
}
console.log(aprobacionPorAsistencias(25, true));
console.log(aprobacionPorAsistencias(21, true));