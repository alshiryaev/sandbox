const arr = [2, 5, 3, 10, 9, 1, 2, 0, -4];

/**
 *
 * @param {array} arr
 */
function qsort_1(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const index = Math.floor(arr.length * 0.5);
  const pivot = arr[index];
  const left = arr.filter((a) => a < pivot);
  const right = arr.filter((a) => a > pivot);

  // Данная функция осортирует массив но уберет дублирующие значения
  // как вариант можно использовать также массив для всех значений равных
  // точке pivot,  но это плохое решение
  return [...qsort(left), pivot, ...qsort(right)];
}

// Сортировка пузырьком
function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Перепишем перую версию нашей функции
// Создадим вместо фильтрации другую функцию
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

const qsort = (arr, low = 0, hi = arr.length - 1) => {
  if (low < hi) {
    const index = partition(arr, low, hi);
    qsort(arr, low, index - 1);
    qsort(arr, index, hi);
  }

  return arr;
};

console.log(qsort(arr));
