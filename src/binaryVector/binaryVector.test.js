const getMaxLength = require('./binaryVector');

test('getMaxLenght', () => {
    const vector1 = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1];
    const result1 = getMaxLength(vector1);
    expect(result1).toBe(10);

    const vector2 = [0, 1, 1, 0, 0, 1];
    const result2 = getMaxLength(vector2);
    expect(result2).toBe(2);

    const vector3 = [1, 0];
    const result3 = getMaxLength(vector3);
    expect(result3).toBe(1)

    const vector4 = [0, 0];
    const result4 = getMaxLength(vector4);
    expect(result4).toBe(0);

    const vector5 = [1, 1, 1, 1];
    const result5 = getMaxLength(vector5);
    expect(result5).toBe(4);
});