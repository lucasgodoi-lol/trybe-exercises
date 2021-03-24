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

const addTurn = (object, key, value) => {
    object[key] = value;
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

const sizeOfObject = (object1,object2, object3) => {
    const size1 = Object.entries(object1);
    const size2 = Object.entries(object2);
    const size3 = Object.entries(object3);
    return `O tamanho do primeiro Objeto é ${size1.length}, do segundo: ${size2.length}, do terceiro ${size3.length}`; 
}
console.log('Exercicio 3')
console.log(sizeOfObject(lesson1, lesson2, lesson3));

// Exercicio 4

const valuesOfObject = (object) => {
    const valueOfObject = Object.values(object);
    return valueOfObject;
}
console.log('Exercicio 4')
console.log(valuesOfObject(lesson1));

// Exercicio 5

