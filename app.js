const prompt = require("prompt-sync")({sigint: true});

function generadorMatrices(num1,num2){
    let matrizNueva = [];
    for (let i=0; i<num1; i++){
        matrizNueva.push([]);
        for (let j=0; j<num2; j++){
            let num = Math.floor(Math.random() * 10);
            matrizNueva[i].push(num)
        }
    }
    return matrizNueva;
}
console.table(generadorMatrices(5,5));