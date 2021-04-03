const assert = require('assert')

function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x - y;
    });
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const secondParameter = [760,233,500,700,]
const result2 = [500,700]
assert.deepStrictEqual(secondThirdSmallest(parameter), result)
assert.deepStrictEqual(secondThirdSmallest(secondParameter), result2)
