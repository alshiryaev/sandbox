const { expect } = require('chai');
const binarySearch = require('./binarySearch');
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