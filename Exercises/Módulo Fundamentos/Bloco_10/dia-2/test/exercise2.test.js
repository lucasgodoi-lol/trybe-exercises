const { findUserById, getUserName} = require('../src/exercise2')


// describe('teste a funcao getUserName',() => {
//   test('teste se o id passado retorna um nome', () => {

//      return  getUserName(5).then((name) => {
//           expect(name).toBe('Paul')
//       })
//   } )
//   test('teste se  o id passado nao existir retorna um erro', () => {
//       expect.assertions(1) 
//       return getUserName(3).catch(response => {
//           const object = {error: 'User with 3 not found.'}
//           expect(response).toEqual(object);
//       })
//   })
// })

describe('testa resultados da funcao getUserName em caso de usário encontrado ou não', () => {
    test('testa se o resultado da funcao quando usuario é encontrado', async() => {
        const response = await getUserName(4);
        expect(response).toBe('Mark')
    })
    test('testa resultado quando usario não é encontrado', async () => {
        try {
            await getUserName(3)
        } catch(error) {
            expect(error).toEqual({error: 'User with 3 not found.'})
        }
    })
} )