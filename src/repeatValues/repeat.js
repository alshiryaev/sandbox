function findRepeat(array) {
    let result = {};
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result[element] = true;
    }

    const resultArray = Object.keys(result);
    return resultArray;
}

const arr = [5, 1, 2, 2, 3, 4, 8, 8, 8];
const result = findRepeat(arr);
console.log(result);