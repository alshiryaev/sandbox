const getSimpleNumbers = require('./simpleNumbers');

test('getSimpleNumbers', () => {
  const result1 = getSimpleNumbers(2, 10);
  expect(result1).toEqual([2, 3, 5, 7]);
  const result2 = getSimpleNumbers(90, 100);
  expect(result2).toEqual([97]);
});