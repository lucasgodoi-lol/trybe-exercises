const primeiraClasse = (nomeCompleto) => {
   const object = {
        nomeCompleto,
        email: `${nomeCompleto.split(' ').join('_').toLowerCase()}@trybe.com`
    }
    return object
}
const newEmployees = () => {
    const employees = {
      id1: primeiraClasse('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: primeiraClasse('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: primeiraClasse('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };
console.log(newEmployees());