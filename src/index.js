// async function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     yield i;
//   }
// }

// (async () => {
//   let generator = generateSequence(1, 50);
//   for await (let value of generator) {
//     console.log(value);
//   }
// })();

// function delay() {
//   return new Promise(resolve => setTimeout(resolve, 1000));
// }

// async function delayedLog(item) {
//   await delay();
//   console.log(item);
// }

// async function processArray(array) {
//   for (const item of array) {
//     await delayedLog(item);
//   }
// }

// processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length * 0.5)];
 

  const left = [];
  const right = [];
  for (const item of arr) {
    if (item <= pivot) {
      left.push(item);
    } else if (item > pivot) {
      right.push(item);
    }
  }

  return [].concat(quickSort(left), pivot, quickSort(right));
}

function getArray(length) {
  const array = [];
  for (let index = 0; index < length; index++) {
    const element = Math.floor(Math.random() * 100);
    array.push(element);
  }

  return array;
}

const array = [3, 5, 1, 0, 4, 2, 3]; //getArray(10);

console.log(array);
const res = quickSort(array);

console.log(res);
