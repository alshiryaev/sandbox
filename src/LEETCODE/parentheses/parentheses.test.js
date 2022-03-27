const {validParentheses} = require('./parentheses');
const { expect } = require('chai');

describe('parenthesis', () => {
    it('() => true', () => {
        expect(validParentheses('()')).true();
    });

    it('([]) => true', () => {
        expect(validParentheses('([])')).true();
    });

});