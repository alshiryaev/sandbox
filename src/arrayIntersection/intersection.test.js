const intersection = require('./intersection');

test('intersection', () => {
    const result1 = intersection([1, 2, 3, 4, 5], [3, 5, 6, 7, 8]);
    expect(result1).toEqual([3, 5]);

    const result = intersection([1, 2, 3, 4, 5], [3, 5, 6, 7, 8, 9, 10, 11]);
    expect(result).toEqual([3, 5]);
});