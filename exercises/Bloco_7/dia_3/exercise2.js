const assert = require('assert')

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
  
  assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ])
  assert.notDeepStrictEqual(myRemove([1,2,3,4],3), [1,2,3,4])
  assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4])
  const myList = [5,6,7,9]
  assert.deepStrictEqual(myRemove(myList, 10),[5,6,7,9])