const { expect } = require('chai');
const getMaxLength = require('./binaryVector');

describe('getMaxLenght', () => {

    it('result should be equal 10', () => {
        const vector = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1];
        const result = getMaxLength(vector);
        expect(result).to.equal(10);
    });

    it('[0, 1, 1, 0, 0, 1] => 2', () => {
        const vector = [0, 1, 1, 0, 0, 1];
        const result = getMaxLength(vector);
        expect(result).to.equal(2);
    });

    it('[1, 0] => 1', () => {
        const vector = [1, 0];
        const result = getMaxLength(vector);
        expect(result).to.equal(1);
    });

    it('[0, 0] => 0', () => {
        const vector = [0, 0];
        const result = getMaxLength(vector);
        expect(result).to.equal(0);
    });

    it('[1,1,1,1] = 4', () => {
        const vector = [1, 1, 1, 1];
        const result = getMaxLength(vector);
        expect(result).to.equal(4);
    });

    it('[] = 0', () => {
        const vector = [];
        const result = getMaxLength(vector);
        expect(result).to.equal(0);
    });

    it('[1] = 1', () => {
        const vector = [1];
        const result = getMaxLength(vector);
        expect(result).to.equal(1);
    });
})