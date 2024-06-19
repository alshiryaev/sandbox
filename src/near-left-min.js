
/**
 *
 * @param {number[]} arr
 */
const nearLeftMin = function (arr) {
  const stack = [];

  const result = Array(arr.length).fill(null);

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];

    while (stack[0]?.value > n) {
      const {index} = stack.shift();
      result[index] = i;

    }
    stack.unshift({
      value: n,
      index: i,
    });
  }
  return result;
};
const arr = [7, 2, 4, 5, 3, 2, 5, 1, 5, 4];
const r = nearLeftMin(arr);

 console.log(r);

// 1 7 4 4 5 7 7 10 9 10

module.exports = {
  nearLeftMin,
};
