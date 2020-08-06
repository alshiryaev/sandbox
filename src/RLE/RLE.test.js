const RLE = require('./RLE');
const { expect } = require('chai');

describe('RLE', () => {
    it('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB = A4B3C2XYZD4E3F3A6B28', () => {
        expect(RLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).to.equals('A4B3C2XYZD4E3F3A6B28');
    });

    it('AA = A2', () => {
        expect(RLE('AA')).to.equals('A2');
    });

    it('AB = AB', () => {
        expect(RLE('AB')).to.equals('AB');
    });

    it('A = A', () => {
        expect(RLE('A')).to.equals('A');
    });

    it('ABBB = AB3', () => {
        expect(RLE('ABBB')).to.equals('AB3');
    });
});