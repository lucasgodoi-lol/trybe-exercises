// const pessoasProcesso = [
//     {name: 'Lucas',nota: 150, email: 'lucazgodoy@hotmail.com'},
//     {name: 'Joana', nota:40, email:'joana@hotmail.com'},
//     {name: 'Julia', nota:100, email:'julia@hotmail.com'},
//     {name:'Mauro', nota:30, email:'Mauro@hotmail.com'},
//     {name:'Mauricio', nota: 120, email:'mauricio@hotmail.com'},
//     {name:'Pedro', nota:60, email:'pedro@hotmail.com'}
// ]

// const pessoasAprovadas = pessoasProcesso.filter(pessoa => pessoa.nota >= 100)
// // console.log(pessoasAprovadas)

// const enviarEmail = (pessoa) => {
//    const part1 = `${pessoa.email}, Parabéns ${pessoa.name} sua nota foi: ${pessoa.nota} `
// //    console.log(part1)
//    return part1
// }

// pessoasAprovadas.forEach(pessoa => enviarEmail(pessoa))

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter(verifyEven);

// // console.log(isEven); // [ 30, 22 ]

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 3 === 0);

// // console.log(isEven2); // [ 30, 22 ]

// const objPeople = [
//     { name: 'José', age: 21 },
//     { name: 'Lucas', age: 19 },
//     { name: 'Maria', age: 16 },
//     { name: 'Gilberto', age: 18 },
//     { name: 'Vitor', age: 15 },
//   ];
  
//   const verifyAgeDrive = (arrayOfPeople) => (
//     arrayOfPeople.filter((people) => (people.age < 18))
//   );
  
// //   console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

//   const names = [
//       {name: 'lucas', age:10},
//       {name: 'Maria', age:11}, 
//       {name: 'Gustavo', age:13 },
//       {name: 'fernanda', age:12}
//   ]

//   const removeStudante = (obj) => {
//       const newNames = obj.filter(name => name.age <= 12)
//       return newNames
//   }
// //   console.log(removeStudante(names))

  
// const num = [1,3,6,78,2]


// const a = []
// let b = 1
// for(let index = 5; index >= 1; index -= 1) {
//    a.push(b  *= index)
// }
// console.log(a)
// console.log(dobroNum)
// // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
// const numbers = [13, 20, 10, 45, -555];
// const a = []

// for(let index =0; index < numbers.length; index +=1) {
//    if(numbers[index] > 0 ){
//       a.push(numbers[index] * -1)
//    } else {
//        a.push(numbers[index] * 1)
//    }
// }

// const negativeNumbers = numbers.map((number) => number > 0 ? number * -1 : number * 1);

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// // console.log(numbers); // [ 1, 2, 3, 4, -5 ]
// // console.log(a)

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const  y = (listProducts, listPrice) => {
//  return  listProducts.map((products, index) =>  `${products}: ${listPrice[index]}`)
// }
// console.log(y(products, prices))

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

//   const a = estudantes.filter((estudante) => (estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`)
//   console.log(a)

const studentAprove = (students, nome) => {
  const studentsInfo = students.find(student => student.nome === nome)
  return studentsInfo.materias.map(materias => `${materias.name} ${(materias.nota >= 80) ?  'Aprovado' : 'Reprovado'} `)
}
console.log(`Primeiro estudante 
${studentAprove(estudantes, 'Natalia')}`)
console.log(`Segundo Estudante 
${studentAprove(estudantes, 'Maria')}`)
console.log(`Terceiro estudante 
${studentAprove(estudantes, 'Jorge')}`)