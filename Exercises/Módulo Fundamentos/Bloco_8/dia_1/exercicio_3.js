// const correctAnswer = () => {
//   const correct = 'higher order function'
//   return correct;
// }



// const gabarito = (user) => {
//   if(user.toLowerCase() === correctAnswer().toLocaleLowerCase()) {
//       return true;
//   } 
//   return false ;
// }

// console.log(gabarito('HIGHER ORDER FUNCTIONA'))
const user =  (user,correct) => {
    if (correct.toLowerCase() === user.toLowerCase()) {
        return true
    } 
    return false
}
const correctAnswer = (correct, fn) => {
    return (user) => fn (user, correct) 
     }
const gabarito = correctAnswer('HIGHER', user)
console.log(gabarito('high'))