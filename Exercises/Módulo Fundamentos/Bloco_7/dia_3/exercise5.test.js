const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
test('se o objeto 1 é igual ao o objeto 2', () => {
  expect(obj1).toEqual(obj2)
})
test('se o objeto 2  não é igual ao o objeto 3', () => {
  expect(obj2).not.toEqual(obj3)
})
// assert.deepStrictEqual(obj1,obj2,true)
// assert.notDeepStrictEqual(obj2,obj3,true)
