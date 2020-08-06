const parenthesis = require('./parenthesis');
const { expect } = require('chai');

describe('parenthesis', () => {
    it('1 => ()', () => {
        const [result] = parenthesis(1);
        expect(result).to.equals('()');
    });

});