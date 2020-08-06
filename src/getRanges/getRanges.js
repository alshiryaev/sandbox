// getRanges([0, 1, 2, 3, 4, 7, 8, 10]) // "0-4,7-8,10"
// getRanges([4,7,10]) // "4,7,10"
// getRanges([2, 3, 8, 9]) // "2-3,8-9"

function getRanges(array) {
  if (!array || !array.length)
    throw new Error("It's necessary that an array not be empty");

  if (array.length === 1) {
    return `${array[0]}`;
  }

  let temp = array[0],
    last,
    result = '';

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    last = array[index - 1];

    if (element - last !== 1) {
      result = result.concat(`${temp}-${last},`);
      temp = element;
    }
  }

  console.log(result);
}
// getRanges([0, 1, 2, 3, 4, 7, 8, 10]); // "0-4,7-8,10"
// getRanges([4, 7, 10]); // "4,7,10"
// getRanges([2, 3, 8, 9]); // "2-3,8-9"

/**
 * @param {number[]} array
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(array, target) {
  const hash = Object.create(null);

  for (let i = 0; i < array.length; i++) {
    const figure = target - array[i];
    if (figure in hash) {
      return [hash[figure], i];
    }
    hash[array[i]] = i;
  }  
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 16], 23));
