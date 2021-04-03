
const greetPeople = (people) => {
    let greeting = [];
  
    for (const person in people) {
     greeting.push(`a ${people[person]}`)
    }
    return greeting;
  };
  console.log(greetPeople(['Irina', 'Ashleigh', 'Elsa']))