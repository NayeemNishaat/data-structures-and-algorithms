// Chapter: Inefficient O(n^2) solution
function sumZero(arr) {
  for (const val of arr) {
    for (const val2 of arr) {
      if (val + val2 === 0) {
        return [val, val2];
      }
    }
  }
}
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]

// Chapter: Efficient O(n) solution
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];

    if (sum > 0) right--;
    else left++;
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
