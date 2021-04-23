const ex6 = require('../src/ex6');
describe('testing function showDog', () => {
  ex6.showDog = jest.fn();
  afterEach(ex6.showDog.mockReset);
  test('test resolve showDog', async () => {
    ex6.showDog.mockResolvedValue('request success');
    ex6.showDog();
    expect(ex6.showDog).toHaveBeenCalled();
    expect(ex6.showDog).toHaveBeenCalledTimes(1);
    expect(ex6.showDog()).resolves.toBe('request success');
    expect(ex6.showDog).toHaveBeenCalledTimes(2);
  });
  test('test reject showDog', async () => {
    ex6.showDog.mockRejectedValue('request failed');
    expect(ex6.showDog).toHaveBeenCalledTimes(0);
    expect(ex6.showDog()).rejects.toBe('request failed');
    expect(ex6.showDog).toHaveBeenCalledTimes(1);
  });
});