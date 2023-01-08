function getPivot(arr, start = 0, end = arr.length) {
  let pivot = start;
  for (let i = start + 1; i < end; i++)
    arr[start] > arr[i] &&
      pivot !== i &&
      (([arr[i], arr[pivot + 1]] = [arr[pivot + 1], arr[i]]), pivot++);
  [arr[start], arr[pivot]] = [arr[pivot], arr[start]];
  return pivot;
}

const arr = [8, 0, 100, 4, 2, 7, 1, 5, 6, 99, 0, 2, 3];
function quickSort(arr, left = 0, right = arr.length) {
  if (left >= right) return arr;
  const pivit = getPivot(arr, left, right);
  quickSort(arr, left, pivit - 1);
  quickSort(arr, pivit + 1, right);
}
quickSort(arr);
console.log(arr);
