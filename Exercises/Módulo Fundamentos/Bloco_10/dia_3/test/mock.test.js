const math = require('../src/mock')


test('Faça o mock da funcão subtrair e teste sua chamada.', () => {
    math.subtrair = jest.fn()
    math.subtrair()
    expect(math.subtrair).toHaveBeenCalled()
})

test('Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". Teste a chamada e o retorno.', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
})

test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    math.somar()
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar(5, 50)).toBe(55)
})

test(`Faça o mock da função dividir e implemente um retorno padrão com o valor "15". 
Implemente também os seguintes valores para a primeira e segunda chamadas: "2" e "5".
 Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.`, () => {
    math.dividir = jest
        .fn()
        .mockReturnValue(15)
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(5)
    expect(math.dividir).toHaveBeenCalledTimes(0)
    expect(math.dividir()).toBe(2)
    expect(math.dividir).toHaveBeenCalledTimes(1)
    expect(math.dividir()).toBe(5)
    expect(math.dividir).toHaveBeenCalledTimes(2)
    //  expect(math.dividir()).toBe(5)

})

describe('testes', () => {
    const mockSubtrair = jest
        .spyOn(math, 'subtrair')
        .mockReturnValue(20)
    test(`Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. 
    Defina como retorno padrão o valor '20'. 
    Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.`, () => {
        expect(mockSubtrair()).toBe(20)
        expect(mockSubtrair).toBeCalledTimes(1)
        math.subtrair.mockRestore()
        expect(math.subtrair(2, 1)).toBe(1);
    })
})
