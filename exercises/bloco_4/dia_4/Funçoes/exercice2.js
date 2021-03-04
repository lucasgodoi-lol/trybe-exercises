// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function biggerValue(value){
let maior = 0;
let indice = 0;
    for(let index = 0;index < value.length;index += 1 ){

     if(value[index] > maior ){
         maior = value[index]
         indice = index
     }
     
}
return indice
}
console.log(biggerValue([2, 3, 6, 7, 10, 1]))