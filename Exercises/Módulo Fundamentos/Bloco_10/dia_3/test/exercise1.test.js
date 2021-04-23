const result = require('../src/exercise1')

test('test return of function aleatorieNumber', () => {
   result.aleatorieNumber = jest 
   .fn()
   .mockReturnValue(10);
   expect(result.aleatorieNumber()).toBe(10);
   expect(result.aleatorieNumber).toHaveBeenCalled();
   expect(result.aleatorieNumber).toHaveBeenCalledTimes(1)
})