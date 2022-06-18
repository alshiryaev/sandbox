// Kata https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

/**
 * 
 * @param {number[][]} arr 
 */
function snail(arr) {

  /* directions
      0
    3   1
      2  
  */

  let res = [];
  let top = 0,
    bottom = arr.length,
    left = 0,
    right = arr[0].length,
    direction = 1;

  while (top <= bottom && left <= right) {
    if (direction === 1) {
      for (let i = left; i < right; i++) {
        res.push(arr[top][i])
      }
      direction = 2
      top++;
    }

    if (direction === 2) {
      for (let i = top; i < bottom; i++) {
        res.push(arr[i][right - 1]);
      }

      direction = 3;
      right--;
    }

    if (direction === 3) {
      for (let i = right - 1; i >= left; i--) {
        res.push(arr[bottom - 1][i]);
      }
      direction = 0;
      console.log('next direction ', direction);
      bottom--;
    }

    if (direction === 0) {

      console.log('bottom top', bottom, top);


      for (let i = bottom-1 ; i <= top; i--) {
        res.push(arr[left][i]);
      }

      direction = 1;
      left++;

    }
    break;
  }

  return res;

}

const array = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
console.log(snail(array));


