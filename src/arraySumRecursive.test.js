const sum = require('./arraySumRecursive');
const { expect } = require('chai');

describe('arraySumRecursive', () => {

    it('[2, 4 ,6] = 12', () => {
        expect(sum([2, 4, 6])).to.equals(12);
    });

    it('[-2, -4 ,6] = 0', () => {
        expect(sum([-2, -4, 6])).to.equals(0);
    });
});