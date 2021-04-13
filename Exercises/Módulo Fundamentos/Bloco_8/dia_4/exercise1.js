
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(obj) {
  // escreva seu código aqui
  return obj.reduce((acc, array) => acc.concat(array), [])

  
      
}

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);