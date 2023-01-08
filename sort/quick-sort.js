function pivot(arr, start = 0, end = arr.length - 1) {
  let pointer = 0;
  arr[start];

  for (let i = 1; i <= end; i++) {
    if (arr[start] > arr[i]) {
      // if (pointer > 1) {
      ([arr[i], arr[pointer + 1]] = [arr[pointer + 1], arr[i]]), pointer++;
      // } else pointer++;
    }
  }
  [arr[start], arr[pointer]] = [arr[pointer], arr[start]];
  return arr;
}
console.log(pivot([4, 0, 8, 2, 1, 5, 7, 6, 3]));
