// Exercise Bonus
const skills = ['Java Script','Phyton','CSS','HTML','Linux']

const frase = (str) => {
    const string = `Tryber X aqui!`
    const array = string.split(' ');
    for (let index = 0; index < array.length; index += 1) {
        if(array[index].toLocaleLowerCase() === 'x'.toLocaleLowerCase()) {
            array[index] = `${str}`
        }
    }
    return `${array.join(' ')} 
    Tudo Bem ?`
}

frase('Lucas')

const returne  = (fn) => {
   let string = `${fn}
   Minhas Principais Habilidades São :
   `;
   for(let index = 0; index < skills.length; index +=1 ) {
      string =  `${string} 
       -${skills[index]}`
   }
   string = `{ ${string}

    #Go Trybe
   }`
   return string
}
// console.log(returne(frase('Lucas')))

const comidas = ['Pizza','Lanche','COMIDA JAPONESA <3','VACA atolada!'] 

let frasee = `
 Minhas comidas favoritas são :
 `

for (let index = 0; index < comidas.length;index += 1) {
   frasee = `${frasee}
   -${comidas[index]} 
    `
}



const jogosFavoritos = ['League Of Legends', 'League Of Legends','League Of Legends']

let jogos = `Meus jogos favoritos são: `
for(let index = 0; index < jogosFavoritos.length; index += 1) {
    jogos = `${jogos} 
    ${jogosFavoritos[index]}
    `
}
jogos = `${jogos} 
KKKK `

const fn = returne(frase('Lucas'))
const person = `##################

${fn} 
#########################

${frasee}
######################

${jogos}

###############
`
console.log(person)