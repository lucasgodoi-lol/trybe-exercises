const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Exercicio parte 2 
// Exercicio 1 

const addTurn = (object, keys, value) => {
    object[keys] = value;
    return object
}
console.log('Exercicio 1')
console.log(addTurn(lesson2, 'turno', 'manhã'))

// Exercicio 2

const showTheKeys = (object) => {
    const keys = Object.keys(object)
    return keys
}
console.log('Exercicio 2')
console.log(showTheKeys(lesson1))

// Exercicio 3

const sizeOfObject = (object) => {
    const size = Object.entries(object);
    return size.length;
}
console.log('Exercicio 3')
console.log(sizeOfObject(lesson3));


