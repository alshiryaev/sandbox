const { binarySearch, binarySearchRecursive } = require('./binarySearch');
const _ = require('lodash');

test('binarySearch', () => {
    const arr = _.range(0, 100);

    expect(binarySearch(arr, 0)).toBe(0);
    expect(binarySearch(arr, 50)).toBe(50);
});

test('binarySearchRecursion', () => {
    const arr = _.range(0, 100);
    expect(binarySearchRecursive(arr, 11)).toBe(4);
    expect(binarySearchRecursive(arr, 50)).toBe(50);
});
