const { findUserById, getUserName} = require('../src/exercise2')


describe('teste a funcao getUserName',() => {
  test('teste se o id passado retorna um nome', () => {

     return  getUserName(5).then((name) => {
          expect(name).toBe('Paul')
      })
  } )
  test('teste se  o id passado nao existir retorna um erro', () => {
      expect.assertions(1) 
      return getUserName(3).catch(response => {
          const object = {error: 'User with 3 not found.'}
          expect(response).toEqual(object);
      })
  })
})