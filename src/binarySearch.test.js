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
    const arr = _.range(0, 100);
    it('0-100 find 0', () => {
        expect(binarySearchRecursive(arr, 0)).to.equals(0);
    });

    it('1-100 find 50', () => {
        expect(binarySearchRecursive(arr, 50)).to.equals(50);
    });
});
