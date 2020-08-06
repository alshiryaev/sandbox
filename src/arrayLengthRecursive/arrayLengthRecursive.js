module.exports = arrayLengthRecursive = arr =>
    arr.length ? 1 + arrayLengthRecursive(arr.splice(1)) : 0;