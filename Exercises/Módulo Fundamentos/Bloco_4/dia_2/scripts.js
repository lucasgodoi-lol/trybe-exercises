// Exercicio 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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

// let valor = 0 ;

// for(let index = 0; index < numbers.length;index +=1){
//    valor = valor + numbers[index] / 10 ;
// }
// console.log(valor.toFixed(2))

// Exercicio 4

// let valor = 0; 

// for(let index = 0; index < numbers.length;index +=1){
//     valor = valor + numbers[index] / 10 ;
// }

//  if(valor > 20 ){
//     console.log("Valor maior que 20")
// }else {
//     console.log("Valor menor que 20")
//     }

// Exercicio 5

// let numeromaior = 0;

// for( let index =0;index  < numbers.length;index +=1){
//     if(numbers[index] > numeromaior){
//     numeromaior = numbers[index]
//     }
// }console.log("O numero maior é = " + numeromaior)

// Exerccicio 6
// let valor = 0;

// for(let index = 0;index < numbers.length;index += 1){
//   if(numbers[index] % 2 === 1){
//      valor += 1;
//   }else if (numbers[index] && valor === 0){
//       console.log("Nenhum valor ímpar encontrado")
//   }
// }  console.log(valor)

// Exercicio 7


// let numeroMenor = 1000;

// for(let index = 0;index < numbers.length;index += 1){
//     if( numbers[index] < numeroMenor){
//         numeroMenor = numbers[index]
//     }
// } console.log(numeroMenor)

// Exercicio 8

let numeros = []

for (let index = 1; index <= 25; index
    += 1) {
    numeros.push(index)
}
// console.log("Os numero são :" + numeros)

// // Exercicio 9 

for (let index = 1; index <= 25; index += 1) {
    // console.log(numeros[index] / 2)
}

//Bonus Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let index = 1; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index] < numbers[index2]) {
            let position = numbers[index2];
            numbers[index2] = numbers[index]
            numbers[index] = position;


        }
    }
}
console.log(numbers)
