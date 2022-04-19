/*Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.*/
let matrizPorCinco = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
    ];
    
function entreDiezYMil(arr){
    let sumatoria = 0;
    for (let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] >= 10 && arr[i][j] < 1000){
                sumatoria += arr[i][j]
            }
        }
    }
    return sumatoria;
}
console.log(entreDiezYMil(matrizPorCinco));