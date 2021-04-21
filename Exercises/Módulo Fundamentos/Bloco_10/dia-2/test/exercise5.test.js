const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (animalName) => (
    // Adicione o código aqui.
    new Promise ((resolve, reject ) => {
        setTimeout(() => {
            const arrayAnimals = Animals.find(({name}) => name === animalName);
           if(arrayAnimals !== undefined) {
            return resolve(arrayAnimals)
           } 
           return  reject('Nenhum animal com esse nome!')
        }, 1000)
    })
   
  );
  
  const getAnimal = (name) => {
    // Adicione o código aqui.
    return  findAnimalByName(name).then((animal) => animal)
  };
  // ---------------------

    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    })

    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
