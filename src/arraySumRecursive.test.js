const sum = require('./arraySumRecursive');

test('arraySumRecursive', () => {
    expect(sum([2, 4, 6])).toBe(12);
    expect(sum([-2, -4, 6])).toBe(0);
});