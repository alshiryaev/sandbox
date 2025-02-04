function getMaxSubSum(arr) {
  let step = 0;
  let maxSum = 0, partialSum = 0;
  for (const item of arr) {
    partialSum += item;
    maxSum  = Math.max(maxSum, partialSum);
    console.log(`step = ${++step}\titem = ${item}\tsum = ${partialSum}\tmaxSum = ${maxSum}`)
    if (partialSum < 0) {
      partialSum = 0;
      console.log(`partialSum is reseted and equals 0`);
    }
  }
  console.log(maxSum);
  return maxSum; 
}

getMaxSubSum([-1, 2, 3, -9]);
// getMaxSubSum([2, -1, 2, 3, -9]);
// getMaxSubSum([-1, 2, 3, -9, 11]);
// getMaxSubSum([-2, -1, 1, 2]);
// getMaxSubSum([100, -9, 2, -3, 5]);
// getMaxSubSum([1, 2, 3]);