function bubbleSort(arr) {
  let swap = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    swap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}
console.log(bubbleSort([30, 1, 2, 3, 4, 5, 6, 7, 8]));
