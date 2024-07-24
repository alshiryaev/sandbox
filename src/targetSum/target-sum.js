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

/**
 * O(n) O(n)
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {number[]}
 */
function findSumTwoElementsByHash(arr, k) {
  const set = new Set();

  for (const n of arr) {
    const diff = k - n;
    if (set.has(diff)) {
      return [diff, n];
    } else {
      set.add(n);
    }
  }
}

/* 
* O(n) O(1)
* @param {number[]} arr 
* @param {number} k 
* @returns {number[]}
*/
function findSumTwoElementsByPointers(arr, k) {
  let p1 = 0, p2 = arr.length - 1;
  while (p1 < p2) {
    if (arr[p1] + arr[p2] === k) {
      return [arr[p1], arr[p2]];
    }

    if (arr[p1] + arr[p2] < k) {
      p1++;
    } else {
      p2--;
    }
  }

  return [];

}

module.exports = {
  tagretSum,
  findSumTwoElementsByHash,
  findSumTwoElementsByPointers,
};



// (так как массив отсортирован)
// также можно решить через бинарный поиск
// и чезез два указателя 

console.log(findSumTwoElementsByHash([-3,0,2,4,5], 6));
console.log(findSumTwoElementsByHash([-3,0,1,3,4], 5));

console.log(findSumTwoElementsByPointers([-3,0,2,4,5], 6));
console.log(findSumTwoElementsByPointers([-3,0,1,3,4], 5));