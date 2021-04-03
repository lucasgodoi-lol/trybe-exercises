const assert = require('assert'); // Sintaxe para incluir o módulo assert

const contNumber = (number) =>  {
   let conta = 0;
   for(let index = 1; index <= number; index +=1){
       conta += index;
   }
   return conta
}


assert.strictEqual(typeof(contNumber),  'function');
assert.strictEqual(contNumber(5), 15)
assert.strictEqual(contNumber(3), 6)
assert.strictEqual(contNumber(1), 1)
assert.strictEqual(contNumber(2), 3)

const assert = require('assert');

