const { validParentheses } = require('./parentheses');

test('parenthesis', () => {
    // it('() => true', () => {
    //     expect(validParentheses('()')).true();
    // });

    // it('([]) => true', () => {
    //     expect(validParentheses('([])')).true();
    // });

    expect(validParentheses('()')).toBe(true);
    expect(validParentheses('([])')).toBe(true);

});