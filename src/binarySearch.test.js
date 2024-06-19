const { binarySearch, binarySearchRecursive } = require('./binarySearch');

test('binarySearch', () => {
    const arr = getArray(0, 100);

    expect(binarySearch(arr, 0)).toBe(0);
    expect(binarySearch(arr, 50)).toBe(50);
});

test('binarySearchRecursion', () => {
    const arr = getArray(0, 100);
    expect(binarySearchRecursive(arr, 11)).toBe(4);
    expect(binarySearchRecursive(arr, 50)).toBe(50);
});

function getArray(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push[i];
    }

    return result;
}