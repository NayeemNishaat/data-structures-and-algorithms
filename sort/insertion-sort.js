function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) arr[j + 1] = arr[j];
    }
    arr[j + 1] = arr[i];
  }
  return arr;
}
console.log(insertionSort([53, 2, 24, 5, 5, 7, 55, 87, 23, 34, 2]));
