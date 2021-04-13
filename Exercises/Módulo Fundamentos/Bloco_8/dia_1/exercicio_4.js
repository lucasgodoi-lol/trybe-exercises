
const resultAnswers = (rigthAnswers, studentAnswers) => {
    let count = 0;
    for(let index = 0; index < rigthAnswers.length; index += 1 ){
        if(rigthAnswers[index] === studentAnswers[index]) {
            count +=1
        }  
        if (rigthAnswers[index] !== studentAnswers[index] && studentAnswers[index] !== 'N.A' ) {
            count -= 0.5
        }
    }
    return count
}

const finalCount = (gabarito, fn) => {
    const respostasGravadas = gabarito;
    return (respostasDoAluno) => `O total de acertos na prova são: ${fn (respostasGravadas, respostasDoAluno)}`
}
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const rigthAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const final = finalCount(rigthAnswers, resultAnswers);
console.log(final(studentAnswers))
