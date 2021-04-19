const assert = require('assert')

const myFizzBuzz = (num) => {
   if(num % 3 === 0 && num % 5 === 0) {
       return 'fizzbuzz'
   }else if (num % 3 === 0) {
       return 'fizz'
   } else if (num % 5 === 0) {
       return 'buzz'
   }
   if(typeof num !== 'number') {
       return false
   }
}

describe('testes se os numeros são divisiveis por 3 e 5 , 3 ou 5', () => {
    test('Ve se o numero é divisivel por 3 e 5 retorna fizzBuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    test('Ve se o numero é divisivel por 3 e retorna fizz', () => {
        expect(myFizzBuzz(36)).toBe('fizz')
    })
    test('Ve se o numero é divisivel por 5 e retorna buzz', () => {
        expect(myFizzBuzz(25)).toBe('buzz')
    })
    test('Ve se o parametro passado nao for um numero retorna false', () => {
        expect(myFizzBuzz('lucas')).toBe(false)
    })
    test('Ver se sendo testado com o metodo de nao ser igual retorna falso', () => {
        expect(myFizzBuzz(36)).not.toBe(false)
    })
})
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(9), 'fizz')
// assert.strictEqual(myFizzBuzz(25), 'buzz')
// assert.notStrictEqual(myFizzBuzz(36), false)
// assert.strictEqual(myFizzBuzz('Lucas'), false)
