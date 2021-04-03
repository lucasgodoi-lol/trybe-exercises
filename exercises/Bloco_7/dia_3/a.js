
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