const arrayLengthRecursive = require('./arrayLengthRecursive');

test('arrayLengthRecursive', () => {
    expect(arrayLengthRecursive([1, 2, 3])).toEqual(3);
    expect(arrayLengthRecursive([])).toEqual(0);
    expect(arrayLengthRecursive([33])).toEqual(1);
});