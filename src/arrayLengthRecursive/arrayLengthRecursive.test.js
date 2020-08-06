const arrayLengthRecursive = require('./arrayLengthRecursive');
const { expect } = require('chai');

describe('arrayLengthRecursive', () => {
    it('[1,2,3] = 3', () => {
        expect(arrayLengthRecursive([1, 2, 3])).to.equals(3);
    });

    it('[] = 0', () => {
        expect(arrayLengthRecursive([])).to.equals(0);
    });

    it('[33] = 1', () => {
        expect(arrayLengthRecursive([33])).to.equals(1);
    });
});