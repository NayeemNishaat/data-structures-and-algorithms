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
// console.log(sumZeroEff([-3, -2, -1, 0, 1, 2, 3]));

// Chapter: Count Unique Values
function countUnique(arr) {
  if (arr.length === 0) return 0;

  let j = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) ++j; // Note: Just find the difference because the array is sorted
  }
  return j;
}
// console.log(countUnique([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));

// Chapter: Find if there is Duplicate
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
// console.log(areThereDuplicates(1, 2, 2));

// Chapter: Loosely check if subsequence
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// Chapter: Find if subsequence
function isSubsequence(str1, str2) {
  if (str1.length > str2.length || !str1) return false;
  let j = 0;
  let k = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[j]) {
      ++j;
      ++k;
      continue;
    }
    if (j === str1.length) return true;
    if (k && str2[i] !== str1[j - 1]) {
      j = 0;
      k = 0;
    }
  }
  return false;
}
console.log(isSubsequence("ccc", "abhbabccjcd"));
