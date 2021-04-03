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
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz')
assert.strictEqual(myFizzBuzz(25), 'buzz')
assert.notStrictEqual(myFizzBuzz(36), false)
assert.strictEqual(myFizzBuzz('Lucas'), false)
