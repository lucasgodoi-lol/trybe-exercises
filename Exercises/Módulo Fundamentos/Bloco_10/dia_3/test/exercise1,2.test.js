const result = require('../src/exercise1,2')

test('test return of function randomNumber', () => {
   result.randomNumber = jest 
   .fn()
   .mockReturnValue(10);
   expect(result.randomNumber()).toBe(10);
   expect(result.randomNumber).toHaveBeenCalled();
   expect(result.randomNumber).toHaveBeenCalledTimes(1)
})

test('test division of function randomNumber',() => {
   result.randomNumber = jest
   .fn()
   .mockImplementation((a , b) => a / b);
   expect(result.randomNumber(15, 3)).toBe(5);
   expect(result.randomNumber).toHaveBeenCalledTimes(1);
   expect(result.randomNumber).toHaveBeenLastCalledWith(15, 3)
})