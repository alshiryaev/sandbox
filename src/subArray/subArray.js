/*
    Есть массив из положительных чисел. 
    Найти непрерывный подмассив с максимальной суммой,
    в котором не более двух различных элементов.
    Вернуть сумму его элементов.

    maxSum([1, 2]) == 3
    maxSum([1, 10, 5, 10, 5, 10, 3, 10, 5]) == 40 (10, 5, 10, 5, 10))
    maxSum([10, 10, 3, 5, 5, 5]) == 23 (10, 10, 3)
*/

/**
 *
 * @param {number[]} arr
 */
function maxSum(arr) {
  let l = 0,
    sum = 0;
  const map = new Map();

  function increment(k) {
    if (!map.has(k)) {
      map.set(k, 0);
    }
    const current = map.get(k);
    map.set(k, current + 1);
  }

  function decrement(k) {
    const current = map.get(k);
    map.set(k, current - 1);
    if (map.get(k) === 0) {
      map.delete(k);
    }
  }     

  for (let r = 0; r < arr.length; r++) {
    if (map.size > 2) {
      while (map.has(arr[l])) {
        decrement(arr[l]);
        l++;
      }
     
    }

    increment(arr[r]);

    // Сумма текущего окна
    sum += arr[r];
  }

  return sum;
}

maxSum([1, 10, 5, 10, 5, 10, 3, 10, 5]);
