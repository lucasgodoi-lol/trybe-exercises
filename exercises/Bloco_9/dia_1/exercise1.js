const animal = ({name, age, status}) => `Meu cachorro ${name} é muito ${status}, apesar de ter ${age} anos ele ainda brinca muito`
const eu = ({name, age, country}) => `Meu nome é ${name} tenho ${age} anos e moro no ${country} `

const functionObj = (fn) => {
  const objeto = {
      name: 'Lucas',
      age: 24, 
      country: 'Brasil',
      dog: {
          name: 'Eve',
          age: 8,
          status: 'feliz'
      }
  }
  if(fn === animal) {
      return fn(objeto.dog)
  }
  return fn(objeto)
}
console.log(functionObj(eu))
console.log(functionObj(animal))

const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (fn) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return fn(userToReturn)
};

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser