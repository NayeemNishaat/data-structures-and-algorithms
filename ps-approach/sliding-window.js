// Chapter: Inefficient O(n^2) approach
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) temp += arr[i + j];

    if (temp > max) max = temp;
  }

  return max;
}
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));

// Chapter: Efficient O(n) approach
function maxSubarraySumEff(arr, num) {
  if (arr.length < num) return null;

  let max = -Infinity;
  let ini = 0;

  for (let i = 0; i < num; i++) ini += arr[i];

  for (let i = 1; i < arr.length - num + 1; i++) {
    ini = ini - arr[i - 1] + arr[i + num - 1];
    if (ini > max) max = ini;
  }
  return max;
}
// console.log(maxSubarraySumEff([1, 2, 5, 2, 8, 7, 1, 5], 2));

// Chapter: findLongestSubstring with unique chars
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) start = Math.max(start, seen[char]);
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}
console.log(findLongestSubstring("hello"));
