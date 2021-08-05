
const jewelryInStones = require('./jInS');
const { expect } = require('chai');

describe('jewelryInStones', () => {
    it('ab in aabbccd  => 4', () => {
        const result = jewelryInStones('ab', 'aabbccd');
        expect(result).to.equals(4);
    });

    it('a in aabbcad  => 3', () => {
        const result = jewelryInStones('a', 'aabbcad');
        expect(result).to.equals(3);
    });

    it('f in aabbcad  => 0', () => {
        const result = jewelryInStones('f', 'aabbcad');
        expect(result).to.equals(0);
    });

    it('abc in aabbcad  => 6', () => {
        const result = jewelryInStones('abc', 'aabbcad');
        expect(result).to.equals(6);
    });

    it('"" in aabbcad  => 0', () => {
        const result = jewelryInStones('', 'aabbcad');
        expect(result).to.equals(0);
    });

    it('aabbcad in aabbcad  => 7', () => {
        const result = jewelryInStones('aabbcad', 'aabbcad');
        expect(result).to.equals(7);
    });
});