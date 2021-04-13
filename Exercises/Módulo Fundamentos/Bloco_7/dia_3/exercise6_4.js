const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, str) => {
    let findIndex = -1;
    for(let index = 0; index < array.length; index += 1) {
        if(array[index] === str) {
            findIndex = index
        }
    }
    return findIndex
}


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
