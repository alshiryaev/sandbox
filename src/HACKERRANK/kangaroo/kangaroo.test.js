const { expect } = require('chai');
const { kangaroo } = require('./kangaroo');

describe('kangaroo', () => {
    it('0 3 4 2 => YES', () => {
        expect(kangaroo(0,3,4,2)).equals('YES');
    });

    it('0 2 5 3 = NO',() => {
        expect(kangaroo(0,2,5,3)).equals('NO');
    });
});