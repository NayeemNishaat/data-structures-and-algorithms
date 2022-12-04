// Important: Input must be sorted
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
function sumZeroEff(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];

    if (sum > 0) right--;
    else left++;
  }
}
console.log(sumZeroEff([-3, -2, -1, 0, 1, 2, 3]));

// Chapter: Count Unique Values
function countUnique(arr) {
  if (arr.length === 0) return 0;

  let j = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) ++j; // Note: Just find the difference because the array is sorted
  }
  return j;
}
console.log(countUnique([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));
