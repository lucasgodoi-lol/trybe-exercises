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
console.log(addTurn(lesson2, 'turno', 'manhã'))


