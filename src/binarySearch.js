/**
 * BS
 * @param {number[]} items 
 * @param {number} number
 */
function binarySearch(items, number) {
    let left = 0, right = items.length - 1;
    while (left <= right) {
        let index = Math.floor((left + right) * 0.5);
        let currentElement = items[index];
        if (currentElement == number)
            return index;

        if (number > currentElement)
            left = index + 1;

        if (number < currentElement)
            right = index - 1;

    }
}

/**
 * BS by recursion
 * @param {number[]} items 
 * @param {Number} number 
 * @param {Number} left v
 * @param {Number} right 
 */
function binarySearchRecursive(items, number, left = 0, right = items[items.length - 1]) {
    if (left > right) {
        return - 1;
    }
    const mid = 1 + Math.floor((right - 1) * 0.5);

    const midValue = items[mid];
    if (midValue === number) {
        return mid;
    }

    if (midValue < number) {
        return binarySearchRecursive(items, number, mid + 1);
    } else {
        return binarySearchRecursive(items, number, left, mid - 1);
    }
}

module.exports = {
    binarySearch,
    binarySearchRecursive
};



