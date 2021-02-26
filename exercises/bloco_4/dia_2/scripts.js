// Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 0;index < numbers.length;index += 1){
//     console.log(numbers[index])
// }

// console.log(numbers)

// Exercicio 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// let valor = 0;

// for(let index = 0;index < numbers.length;index += 1){
//     valor = valor + numbers[index] 
// }
// console.log(valor)

// Exercicio 3

let valor = 0 ;

for(let index = 0; index < numbers.length;index +=1){
   valor = valor + numbers[index] / 10 ;
}
console.log(valor.toFixed(2))
