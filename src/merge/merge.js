/**
 * merge two sorted arrays
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
function merge(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

module.exports = {merge};
