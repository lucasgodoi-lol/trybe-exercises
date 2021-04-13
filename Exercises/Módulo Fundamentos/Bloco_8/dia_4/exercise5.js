const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(letter) {
  // escreva seu código aqui
  return names.reduce((acc, curr) => {
    return  acc + curr.split('').reduce((acum, next) => {
      if(next.toLocaleLowerCase() === letter.toLocaleLowerCase()) {
        return acum +1 
      }return acum
    }, 0)
  }, 0)
}
assert.deepStrictEqual(containsA('a'), 20);