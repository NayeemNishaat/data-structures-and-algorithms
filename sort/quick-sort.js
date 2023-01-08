function getPivot(arr, start = 0, end = arr.length - 1) {
  let pivot = start;
  for (let i = start + 1; i <= end; i++)
    arr[start] > arr[i] &&
      pivot !== i &&
      (([arr[i], arr[pivot + 1]] = [arr[pivot + 1], arr[i]]), pivot++);
  [arr[start], arr[pivot]] = [arr[pivot], arr[start]];
  return pivot;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;
  const pivit = getPivot(arr, left, right);
  quickSort(arr, left, pivit - 1);
  quickSort(arr, pivit + 1, right);
  // quickSort(arr, pivit + 1, arr.length); // Important: Can't do that because in the subsequent call we are shrinking the window (setting pivot - 1 as right) but setting it like this it isn't respecting that.
  return arr;
}
console.log(quickSort([-10, -110]));
