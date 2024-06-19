/**
 * Подмассив в arr, сумма элементов в котором максимальна.
 * @param {number[]} arr
 * @returns {number}
 */
export function getMaxSubSum(arr) {
  let partSum = 0;
  let result = 0;

  for (const num of arr) {
    partSum += num;
    result = Math.max(result, partSum);
    if (partSum < 0) {
      partSum = 0;
    }
  }

  return result;
}

// console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
// console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
// console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// console.log(getMaxSubSum([1, 2, 3])); // 6
// console.log(getMaxSubSum([-1, -2, -3])); // 0

