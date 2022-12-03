// Inefficient O(n^2) solution
function sumZero(arr) {
  for (const val of arr) {
    for (const val2 of arr) {
      if (val + val2 === 0) {
        return [val, val2];
      }
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
