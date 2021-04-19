const API_URL = 'https://icanhazdadjoke.com/';
const count = () => {
    const numbers = [];
    for (let index = 1; index <= 10; index += 1) {
        const random = Math.round(Math.random() * 50)
        numbers.push(random)
    }
    const numbers2 = numbers.map(number => number ** 2)
        .reduce((acc, number) => acc + number, 0)
    return numbers2
}

const divisao = (fn) => {
    const array = [2, 3, 5, 10]
    const newArray = array.map(number => Math.round(fn() / number))
    return newArray
}

const sumOfArray = (fn) => {
   const valor =  fn.reduce((acc, number) => acc + number, 0)
 return  new Promise((resolve, reject) => {
    if(valor < 8000) {
        resolve(valor)
    }
}).then((number) => console.log(`A soma de todas os arrays da divisao do numero é  ${number}`))
}


const fetchJoke = (fn) => {
    new Promise((resolve, reject) => {
        if (fn < 8000) {
            resolve(fn)
        }
        reject(fn)
    })
        .then((number) => console.log(`Promisse resolvida a soma de todos os números são: ${number} e o array com a divisao desse numero por 2, 3, 5, 10 é `, divisao(count)))
        .catch((number) => console.log(`"É mais de oito mil! Essa promise deve estar quebrada!" `))
}
fetchJoke(count())
