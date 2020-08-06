const { areAnagrams, compareObjects } = require('./anagrams');
const { expect } = require('chai');

describe('areAnagrams', () => {

    it('сон и нос = true', () => {
        const result = areAnagrams('сон', 'нос');
        expect(result).to.be.true;
    });

    it('насос и сосна = true', () => {
        const result = areAnagrams('насос', 'сосна');
        expect(result).to.be.true;
    });

    it('сос и нос = false', () => {
        const result = areAnagrams('сос', 'нос');
        expect(result).to.be.false;
    });

    it('"" и нос = false', () => {
        const result = areAnagrams('', 'нос');
        expect(result).to.be.false;
    });

    it('нос и "" = false', () => {
        const result = areAnagrams('нос', '');
        expect(result).to.be.false;
    });

    it('"" и "" = false', () => {
        const result = areAnagrams('', '');
        expect(result).to.be.false;
    });
});

describe('compareObjects', () => {
    it('two equal - 1', () => {
        const a = { a: 1, b: 1 };
        const b = { a: 1, b: 1 };
        const result = compareObjects(a, b);
        expect(result).to.be.true;
    });

    it('two equal - 2', () => {
        const a = { m: 3, n: 1 };
        const b = { n: 1, m: 3 };
        const result = compareObjects(a, b);
        expect(result).to.be.true;
    });

    it('two different - 1', () => {
        const a = { a: 2, b: 1 };
        const b = { a: 1, b: 1 };
        const result = compareObjects(a, b);
        expect(result).to.be.false;
    })

    it('two different - 2', () => {
        const a = { a: 2, b: 1, c: 33, d: 'www' };
        const b = { a: 1, b: 1 };
        const result = compareObjects(a, b);
        expect(result).to.be.false;
    })
});