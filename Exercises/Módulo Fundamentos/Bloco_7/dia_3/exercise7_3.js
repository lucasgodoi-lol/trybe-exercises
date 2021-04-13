
const assert = require('assert')
const greaterThanTen = (array) => {
    let results = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > 10) {
        results.push(array[index])
      }
    }
    return results;
  };
  
  const parameter = [4, 10, 32, 9, 21];
  const result = [32, 21];
  let a = [40,50,10,20,5,67,1,2];
 assert.deepStrictEqual(greaterThanTen(parameter), result)
 assert.deepStrictEqual(greaterThanTen(a),[40,50,20,67])