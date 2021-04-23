// const { TestScheduler } = require('jest');
const ex1 = require('../src/exercise1,2,3');
describe('test showString original implementation', () => {
  test('test function showString', () => {
    const spyShowString = jest
      .spyOn(ex1, 'showString')
      .mockImplementation((str) => str.toLowerCase());
    expect(spyShowString('AMANHÃ')).toBe('amanhã');
    ex1.showString.mockRestore();
    expect(ex1.showString('pikachu')).toBe('PIKACHU');
  });
});