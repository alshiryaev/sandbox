function merge(nums1, m, nums2, n) {

  // Индексы с конца значимых значений 
  let index1 = m - 1;
  let index2 = n - 1;

  // Общий индекс
  let index = m + n - 1;
  while (index >= 0 && index2 >= 0) {
    if (index1 >= 0 && nums1[index1] > nums2[index2]) {
      nums1[index] = nums1[index1];
      index1--;
    } else {
      nums1[index] = nums2[index2];
      index2--;
    }
    index--;
    console.log(nums1);
  }
}

merge(
  [46, 55, 88, 0, 0, 0, 0],

  3,

  [18, 29, 80, 90],

  4
);

merge(
  [1, 2, 3, 0],

  3,

  [90],

  1
);
