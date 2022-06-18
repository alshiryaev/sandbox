const { kangaroo } = require('./kangaroo');

test('kangaroo', () => {
    expect(kangaroo(0, 3, 4, 2)).toBe('YES');
    expect(kangaroo(0, 2, 5, 3)).toBe('NO');
});