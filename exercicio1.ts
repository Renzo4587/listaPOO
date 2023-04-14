const entrada = require("readline-sync")
let numeros: number[] = []
let maior: number = 0;
let menor: number = 0;
numeros[0] = 2
for (let i = 0; i < 14; i++) {
    numeros[i] = parseFloat(entrada.question(''));
    
}
for(let i = 0; i <15; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    }
    if(numeros[i] < menor){
        menor = numeros[i];
    }
    
}


console.log("o maior numero é: ", maior);
console.log("o menor numero é: ", menor);