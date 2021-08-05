const merge = require('../merge/merge');

function mergeSort(arr) {
    
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(arr.length * .5);
    const leftArr = arr.slice(0, pivotIndex);
    const rigthArr = arr.slice(pivotIndex);


    console.log(leftArr, rigthArr);
    return merge(mergeSort(leftArr), mergeSort(rigthArr));

    
}

const arr = [5,1,2,4,10, -2];
const result = mergeSort(arr);

console.log(result);