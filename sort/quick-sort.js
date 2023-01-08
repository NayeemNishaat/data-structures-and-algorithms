function getPivot(arr, start = 0, end = arr.length) {
  let pivot = start;
  for (let i = start + 1; i < end; i++)
    arr[start] > arr[i] &&
      pivot !== i &&
      (([arr[i], arr[pivot + 1]] = [arr[pivot + 1], arr[i]]), pivot++);
  [arr[start], arr[pivot]] = [arr[pivot], arr[start]];
  return pivot;
}

const arr = [8, 4, 2, 7, 1, 5, 6, 3];
let a = -1;
while (a !== 0) {
  a = getPivot(arr);
}
// console.log(getPivot(arr, 3));
// console.log(getPivot(arr, 3));
// console.log(getPivot(arr, 3));
// console.log(getPivot(arr, 3));
while (a !== 3) {
  a = getPivot(arr, 3);
}

// console.log(getPivot(arr));
// console.log(arr);

// console.log(getPivot(arr));
// console.log(arr);

// console.log(getPivot(arr));
// console.log(arr);
// console.log(getPivot(arr));
// console.log(arr);
// console.log(getPivot(arr));

// console.log(arr);
// console.log(getPivot(arr, 3));
// console.log(arr);
// console.log(getPivot(arr, 3));
// console.log(arr);
// console.log(getPivot(arr, 3));
// console.log(arr);
// console.log(getPivot(arr, 3));
// console.log(arr);
// console.log(getPivot(arr, 3));
// console.log(arr);
// console.log(getPivot(arr, 3));
console.log(arr);
