const { expect } = require('chai');
const minSquare = require('./minSquare');

describe('minSquare', () => {
    it('1680 * 640 = [80, 80]', () => {
        expect(minSquare(1680, 640)).to.deep.equals([80, 80]);
    });

    it('160 * 80 = [80, 80]', () => {
        expect(minSquare(160, 80)).to.deep.equals([80, 80]);
    });

    it('12 * 2 = [2, 2]', () => {
        expect(minSquare(12, 2)).to.deep.equals([2, 2]);
    });

    it('5 * 4 = [1, 1]', () => {
        expect(minSquare(5, 4)).to.deep.equals([1, 1]);
    });

    it('24 * 14 = [2, 2]', () => {
        expect(minSquare(24, 14)).to.deep.equals([2, 2]);
    });

    it('100 * 100 = [100, 100]', () => {
        expect(minSquare(100, 100)).to.deep.equals([100, 100]);
    });

    it('24 * 13 = [1, 1]', () => {
        expect(minSquare(24, 13)).to.deep.equals([1, 1]);
    });

    it('100 * 30 = [10, 10]', () => {
        expect(minSquare(100, 30)).to.deep.equals([10, 10]);
    });
});
