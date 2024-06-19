const {maximum69Number} = require('./maximum69Number');

describe('maximum69Number', () => {
    test('9669 => 9969', () => {
        expect(maximum69Number(9669)).toBe(9969);
    });
});