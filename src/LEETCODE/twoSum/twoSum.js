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
  
module.exports = {
    twoSum
};