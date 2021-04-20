const searchEmployee = require('./exerciseBonus')

describe('Testes function searchEmployee', () => {
 test('Teste se é uma funcao', () => {
     expect(typeof searchEmployee).toBe('function')
 })
 test('Se retorna um erro quando o id nao existir', () => {
     expect(() => searchEmployee('23945-2')).toThrow('ID não identificada')
 })
})