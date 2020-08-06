const intersection = require('./intersection');
const { expect } = require('chai');

describe('intersection', () => {

    it('[1, 2, 3, 4, 5] and [3, 5, 6, 7, 8] => [3,5]', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 5, 6, 7, 8];
        const result = intersection(arr1, arr2);
        expect(result).to.be.deep.equals([3, 5]);
    });

    it('[3, 5, 6, 7, 8, 9, 10, 11] and [1, 2, 3, 4, 5] and  => [3,5]', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 5, 6, 7, 8, 9, 10, 11];
        const result = intersection(arr2, arr1);
        expect(result).to.be.deep.equals([3, 5]);
    });

    it('[] and [1,2,3] => []', () => {
        const arr1 = [];
        const arr2 = [1, 2, 3];
        const result = intersection(arr1, arr2);
        expect(result).to.be.deep.equals([]);
    });

    it('[4, 5, 6] and [1,2,3] => []', () => {
        const arr1 = [4, 5, 6];
        const arr2 = [1, 2, 3];
        const result = intersection(arr1, arr2);
        expect(result).to.be.deep.equals([]);
    });

    it('[] and [] => []', () => {
        const arr1 = [];
        const arr2 = [];
        const result = intersection(arr1, arr2);
        expect(result).to.be.deep.equals([]);
    });
})