// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//       ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//     }
//     // console.log(`${ifScope} + o que estou fazendo aqui ? :O `); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);
// funçao com sort .
let i = 0;
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) =>{
    return   a - b;
})
console.log(oddsAndEvens)

// Fazendo na mao
let number = 0;
const numeros = () =>{
   for(let index = 1; index <  oddsAndEvens.length; index +=1 ){
       for(let index1 = 0; index1 < oddsAndEvens.length; index1 +=1){
           if(oddsAndEvens[index] < oddsAndEvens[index1]){
               number = oddsAndEvens[index]
               oddsAndEvens[index] = oddsAndEvens[index1]
               oddsAndEvens[index1] = number
           }
       }
   }
}
numeros();
console.log(oddsAndEvens)