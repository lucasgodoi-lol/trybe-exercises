const assert = require('assert');
// escreva a função removeMiddle aqui

const removeMiddle = (words) => {
    const remove = Math.floor(words.length / 2)
    const results = [words[remove]]
    words.splice(remove,1)
    return results
   }


const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);