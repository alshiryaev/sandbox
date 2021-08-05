/**
 * O(n*n)
 * @param {array} arr
 * @param {number} target
 */
function tagretSum(arr, target) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length -1; j > i; j--) {
        if (arr[i] + arr[j] === target) {
            result.push([arr[i], arr[j]]);
        }
    }
  }

  return result;
}

const arr = [1, 2, 4, 3, 10, -5];

const result = tagretSum(arr, 5);
console.log(result);
