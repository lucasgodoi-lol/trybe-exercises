
const fn = (a) => {
    let num = []; 
    for(let index = 0; index < a.length; index ++) {
        if(a[index] > 40 ) {
            num.push(a[index])
        }
    }
    return num
}


let a = [40,50,10,20,5,67,1,2];
console.log(fn(a))

function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x - y;
    });
    results = [array[1], array[2]];
    return results;
};
console.log(secondThirdSmallest([900,1200,300,500]))

const factorial = (number) => {
    let num = 1;
    for(let index = number; index >= 1; index -= 1) {
        num *= index
    }
    return num
  }
  console.log(factorial(9))

//   const removeMiddle = (words) => {
//      const remove = words
//      remove.splice(2,1)
//      return remove
//     }
//  console.log(removeMiddle(['mouse', 'giraffe', 'queen', 'window', 'bottle']))
  
// const u = ['mouse', 'giraffe', 'queen', 'window', 'bottle']
// u.splice(2,1)

const removeMiddle = (words) => {
    const remove = Math.floor(words.length / 2)
    const results = [words[remove]]
    console.log(results)
    words.splice(remove,1)
    return results
   }
   console.log(removeMiddle(['mouse', 'giraffe', 'queen', 'window', 'bottle']))