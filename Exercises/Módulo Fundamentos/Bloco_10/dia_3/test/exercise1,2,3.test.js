const result = require('../src/exercise1,2,3')

test('test return of function randomNumber', () => {
   result.randomNumber = jest
      .fn()
      .mockReturnValue(10);
   expect(result.randomNumber()).toBe(10);
   expect(result.randomNumber).toHaveBeenCalled();
   expect(result.randomNumber).toHaveBeenCalledTimes(1)
})

test('test division of function randomNumber', () => {
   result.randomNumber = jest
      .fn()
      .mockImplementation((a, b) => a / b);
   expect(result.randomNumber(15, 3)).toBe(5);
   expect(result.randomNumber).toHaveBeenCalledTimes(1);
   expect(result.randomNumber).toHaveBeenLastCalledWith(15, 3)
})

test('test implementation randomNumber', () => {
   const spyRandom = jest
      .spyOn(result, 'randomNumber')
      .mockImplementation((a, b, c) => a * b * c);
   expect(spyRandom(2, 2, 3)).toBe(12);
   result.randomNumber.mockReset();
   result.randomNumber = jest
      .fn()
      .mockImplementation((a) => a * 2);
   expect(result.randomNumber(100)).toBe(200);
});


describe('test functions showString , showFirstLetter and concatStrings', () => {
   test('test function showString', () => {
      result.showString = jest
         .fn()
         .mockImplementation((str) => str.toLowerCase());
      expect(result.showString('AMANHÃ')).toBe('amanhã');
   })
   test('test function showFirstLetter', () => {
      result.showFirstLetter = jest
         .fn()
         .mockImplementation((str) => str[str.length - 1]);
      expect(result.showFirstLetter('Lucas')).toBe('s')
   })
   test('test function concatStrings', () => {
      result.showFirstLetter = jest
         .fn()
         .mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);
      expect(result.showFirstLetter('Car', 'li', 'tos')).toBe('Carlitos')
   })
})

