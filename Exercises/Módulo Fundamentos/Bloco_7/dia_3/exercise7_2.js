const assert = require('assert')
const removeVowels = (word) => {
  const characters = word.split('');
  const results = []; 
  let conta = 0;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      characters[index] = conta +=1;
    } 
  }
    const resultado = characters.join('')
    results.push(resultado)
     return  resultado
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const fn = removeVowels(parameter)
assert.strictEqual(fn, result)
assert.strictEqual(removeVowels('Lucas'), 'L1c2s')