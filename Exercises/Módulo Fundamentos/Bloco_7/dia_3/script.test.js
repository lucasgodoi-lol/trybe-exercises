// const assert = require('assert'); // Sintaxe para incluir o módulo assert

const contNumber = (number) =>  {
   let conta = 0;
   for(let index = 1; index <= number; index +=1){
       conta += index;
   }
   return conta
}


test('teste o tipo da contNumber', () => {
   expect(typeof contNumber).toBe('function')
})

describe('Soma dos indices', () => {
 test('Soma do indice 1 ao 5', () => {
    expect(contNumber(5)).toBe(15)
 })
 test('Soma do indice 1 ao 3', () => {
   expect(contNumber(3)).toBe(6)
})
test('Soma do indice 1 ao 1', () => {
   expect(contNumber(1)).toBe(1)
})
test('Soma do indice 1 ao 2', () => {
   expect(contNumber(2)).toBe(3)
})
})
// assert.strictEqual(typeof(contNumber),  'function');
// assert.strictEqual(contNumber(5), 15)
// assert.strictEqual(contNumber(3), 6)
// assert.strictEqual(contNumber(1), 1)
// assert.strictEqual(contNumber(2), 3)

// const assert = require('assert');

