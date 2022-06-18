const { expect } = require('chai');
const {binarySearch, binarySearchRecursive} = require('./binarySearch');
const _ = require('lodash');

describe('binarySearch', () => {
    const arr = _.range(0, 100);
    it('0-100 find 0', () => {
        expect(binarySearch(arr, 0)).to.equals(0);
    });

    it('1-100 find 50', () => {
        expect(binarySearch(arr, 50)).to.equals(50);
    });
});

describe('binarySearchRecursion', () => {
    const arr = [1,4,5,8,11,21,22,34];
    it('11 number has 4', () => {
        expect(binarySearchRecursive(arr, 11)).to.equals(4);
    });

    it('1-100 find 50', () => {
        expect(binarySearchRecursive(arr, 50)).to.equals(50);
    });
});
