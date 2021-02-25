let a = 5;
let b = 8;

let soma = a + b;
// console.log(soma)

let subtraçao = a - b;
// console.log(subtraçao)

let divisao = a / b;
// console.log(divisao)

let multiplicacao = a * b;
// console.log(multiplicacao)

let modulo = a % b;
// console.log(modulo)

// Exercicios 2
a = 10;
b = 20;

if (a > b) {
    // console.log( "a é menor que b")
} else if (b > a) {
    //  console.log(" b é maior que a")
}

// Exercicios 3

a = 50;
b = 130;
c = 300;

if (a > b && a > c) {
    // console.log ("50 é o numero maior")
} else if (b > a && b > c) {
    // console.log ("130 é o numero maior")
} else {
    // console.log("300 é o numero maior")
}

// Exercicios 4
a = 40

if (a > 0) {
    // console.log("positive")
} else if (a < 0) {
    // console.log("negative")
} else {
    // console.log(0)
}
// Exercicio 5 
a = 60
b = 60
c = 60
let trianguloEquilatero = a + b + c;

if (trianguloEquilatero === 180) {
    // console.log (true)
} else {
    // console.log(false)
}

// Exercicio 6
let xadrez = "Rainha";

switch (xadrez.toLowerCase()) {
    case "bispo":
        // console.log("se move em diagonal")
        break;
    case "rei":
        // console.log("se move na vertical e na horizontal")
        break;
    case "torre" :
        // console.log("se move reto")
        break;
    case "rainha" :
        // console.log("se move de todas as formas")
        break;;
    case "pipa" :
        // console.log("erro")
        break;
}

// Exercicio 7 
let nota = 95

if (nota >= 90 ){
    // console.log ("A")
}
else if (nota >= 80){
    // console.log ("B")
}
else if (nota >= 70){
    // console.log("C")
}else if (nota >= 60){
    // console.log("D")
}else if (nota >=50){
    // console.log("E")
}else if (nota < 50){
    // console.log("F")
}else if (nota < 0 || nota > 100){
    // console.log ("Erro")
}

// Exercicio 8 
a = 5
b = 3
c = 7

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0 ){
    // console.log(true)
}else  {
    // console.log(false)
}

// Exercicio 9
a = 2
b = 7
c = 4

if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1 ){
    // console.log(true)
}else {
     // console.log(false)
}

Exercicio 10

let custoProduto = 300;
let valrDeVenda = 500;
let impostoProduto = 300 * 0.2;
let valorCustoTotal = custoProduto + impostoProduto;
let lucro = valrDeVenda - valorCustoTotal;


if ( custoProduto < 0 || valrDeVenda < 0){
    console.log("Erro")
}else {
    console.log(lucro * 1000)
}

// Exercicio 11

let salarioBruto = 3000;
let aliquota ; 0

if( salarioBruto <= 1556.94){
  aliquota = salarioBruto * 0.08;
}else if (salarioBruto >=1556.95 && salarioBruto <= 2594.92 ){
  aliquota = salarioBruto * 0.09;
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82 ){
  aliquota = salarioBruto * 0.11; 
}else {
    aliquota = 550.88;
}

let salarioBase = salarioBruto - aliquota;

let aliquotair = 0;

if (salarioBase <= 1903.98){
    aliquotair = 0;
}else if (salarioBase >= 1903.98 && salarioBase <= 2826.65){
    aliquotair = salarioBase *  0.075 - 142.80;
}else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquotair = salarioBase * 0.15 - 354.80;
}else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquotair = salarioBase * 0.225 -  636.13
}else {
    aliquotair = salarioBase * 0.275 - 868.36
}

let salarioLiquido = salarioBase - aliquotair;
console.log(salarioLiquido)
