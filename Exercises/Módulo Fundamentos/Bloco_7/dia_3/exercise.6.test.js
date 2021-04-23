// const assert = require('assert');
// escreva a função addOne aqui
const addOne = (myArray) => {
    const arrayVazio = []
  for(let index = 0; index < myArray.length; index +=1 ) {
     arrayVazio.push(myArray[index] + 1)
  }
  return arrayVazio
}
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];

const expected = [32, 58, 13, 6];
const output = addOne(myArray);

test('Type of addOne()',() => {
  expect(typeof addOne).toBe('function')
})

describe('testes addOne()',() => {
  test('Cada item do array somado com + 1', () => {
    expect(addOne([31, 57, 12, 5])).toEqual([32, 58, 13, 6])
  })
  test('Sem mudança', () => {
    expect(myArray).toEqual(unchanged)
  })
})

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);





