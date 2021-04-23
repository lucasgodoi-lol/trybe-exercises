// const assert = require('assert')

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  // implemente seus testes aqui
  

 describe('testes myRemove',() => {
  test('Ve se remove o numero 3 do array', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4])
 })
 test('Ver se nao é igual ao mesmo array ', () => {
  expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4])
})
test('Ve se remove o numero 5 do array', () => {
  expect(myRemove([1,2,3,4,5], 5)).toEqual([1,2,3,4])
})
test('Ve se remove o numero 10 do array', () => {
  expect(myRemove(myList, 10)).toEqual(myList)
})
 })

  // assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ])
  // assert.notDeepStrictEqual(myRemove([1,2,3,4],3), [1,2,3,4])
  // assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4])
  const myList = [5,6,7,9]
  // assert.deepStrictEqual(myRemove(myList, 10),myList)