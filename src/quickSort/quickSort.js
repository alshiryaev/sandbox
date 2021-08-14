const partition = (arr, low, hi) => {
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];


  while (hi >= low) {
    // Двигаемся от границ и смещаем точки
    while (arr[hi] > pivot) {
      hi--;
    }

    while (arr[low] < pivot) {
      low++;
    }

    // Если мы сдвинули точки и они не равны
    // значит где-то есть элемент не на своем месте
    // и указатели стоят на этих элементах
    if (hi >= low) {
      const temp = arr[low];
      arr[low] = arr[hi];
      arr[hi] = temp;

      // После смены значений - смещаем указатели
      hi--;
      low++;
    }
  }
  // Возвращаем нижний указатель
  return low;
};

function qsort(arr, low = 0, hi = arr.length - 1){
  if (low < hi) {
    const index = partition(arr, low, hi);
    qsort(arr, low, index - 1);
    qsort(arr, index, hi);
  }

  return arr;
}

module.exports = {qsort};