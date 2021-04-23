const uppercase = require('../src/exercise1')

test('Verifica se transforma em uppercase',  (done) => {
  uppercase('trybe', (callback) => {
   expect(callback).toBe('TRYBE')
   done()
  })
})