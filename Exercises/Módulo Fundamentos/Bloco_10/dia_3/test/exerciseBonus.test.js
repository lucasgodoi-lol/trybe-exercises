const api = require('../src/exerciseBonus')


test('Teste se a api retorna uma piada', async () => {
   const objeto =  {
        'id': '7h3oGtrOfxc',
        'joke': 'Whiteboards ... are remarkable.',
        'status': 200
      }
    api.fetchJoke =  jest 
    .fn()
    .mockResolvedValue(objeto)
    api.fetchJoke().then((response) => {
        expect(response.joke).toEqual('Whiteboards ... are remarkable.')
    })
     
})