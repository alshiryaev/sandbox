/**
 *
 * @param {Array} arr
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }
    }
  }

  return arr;
}

let arr = [2,3,1,4,6,-2];
console.log(bubbleSort(arr));

arr = [5,2,1,0];
console.log(bubbleSort(arr));