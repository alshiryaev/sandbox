const palindrom = require('./palindrom');


test('palindrom', () => {

    expect(palindrom('topot')).toBe(true);
    expect(palindrom('topor')).toBe(false);

});