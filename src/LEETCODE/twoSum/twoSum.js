/**
 * Поиск двух элементов сумма которых равна заданному числу
 * Сложность O(n)
 * Память O(n)
 * @param {number[]} array
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (array, target) {
  const hash = Object.create(null);

  for (let i = 0; i < array.length; i++) {
    const figure = target - array[i];
    if (figure in hash) {
      return [hash[figure], i];
    }
    hash[array[i]] = i;
  }
};

/**
 * Поиск суммы через указатели 
 * Все O(n)
 * @param {number[]} array
 * @param {number} target
 * @return {number[]}
 */
const twoSumByPointers = (array, target) => {
  let l = 0, r = array.length - 1;
  while (l <= r) {
    const sum = array[l] + array[r];
    if (sum === target) {
      return [l, r];
    }
    if (sum > target) {
      r--;
    } else {
      l++;
    }
  }

  return [];
};


module.exports = {
  twoSum,
};
