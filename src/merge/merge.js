/**
 * merge two sorted arrays
 * @param {Array} left
 * @param {Array} right
 */
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rigthIndex = 0;

  while (leftIndex < left.length && rigthIndex < right.length) {
    if (left[leftIndex] < right[rigthIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rigthIndex]);
      rigthIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rigthIndex));
}

module.exports = merge;
