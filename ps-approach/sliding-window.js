// Chapter: Inefficient O(n^2) approach
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) max = temp;
  }

  return max;
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
