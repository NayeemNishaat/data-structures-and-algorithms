function pivot(arr, start = 0, end = arr.length - 1) {
  let pointer = 0;
  for (let i = 1; i <= end; i++)
    arr[start] > arr[i] &&
      pointer !== i &&
      (([arr[i], arr[pointer + 1]] = [arr[pointer + 1], arr[i]]), pointer++);
  [arr[start], arr[pointer]] = [arr[pointer], arr[start]];
  return arr;
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3];
let i = 0;
const recursive = function (arr) {
  i++;
  if (i > 6) return arr;
  // const newArr = pivot(arr);
  console.log(arr);
  recursive(pivot(arr));
};
recursive(arr);
