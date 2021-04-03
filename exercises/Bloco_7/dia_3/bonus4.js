const assert = require('assert')

const getLargestNumber = (array) => {
    let largestNumber = 0
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] > largestNumber) {
            largestNumber = array[index];
        }
    }
    return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const parameter2 = [300,500,4100,50,1999,2]
const result2 = 4100
assert.strictEqual(getLargestNumber(parameter), result)
assert.strictEqual(getLargestNumber(parameter2), result2)
assert.notStrictEqual(getLargestNumber(parameter2), parameter)
