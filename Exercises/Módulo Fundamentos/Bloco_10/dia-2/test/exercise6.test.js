const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (animalAge) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
     const animal = Animals.filter(({age}) => age === animalAge);
     if(animal.length !== 0) {
       return  resolve(animal)
     }
     return reject('Nenhum animal com essa idade!')
    },3000)
  })
);

const getAnimal =  (animalAge) => {
  // Adicione o código aqui.
    return findAnimalByAge(animalAge).then((animal) => animal)
   
};
// ---------------------
console.log(getAnimal(1))

  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  })

  describe('Quando não existe o animal com a idade  procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(7).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });