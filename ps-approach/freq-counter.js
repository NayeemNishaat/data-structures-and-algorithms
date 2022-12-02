// Chapter: Inefficient O(n^2) Quadretic Algorithm (Nested Loops)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }
  return true;
}
// console.log(same([1, 2, 3], [4, 1, 9])); // true

// Chapter: Efficient O(n) Frequency Counter Algorithm
function freqSame(arr1, arr2) {
  const freqCounter1 = {};
  const freqCounter2 = {};

  for (const val of arr1) freqCounter1[val] = ++freqCounter1[val] || 1;
  for (const val of arr2) freqCounter2[val] = ++freqCounter2[val] || 1;

  for (const key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
  }
  return true;
}
// console.log(freqSame([1, 2, 3, 2, 5], [4, 4, 1, 9, 25])); // false
// console.log(2 in { 2: 3, 6: 4 });

// Remark: In frequency counter algorithm, we can use objects to store the frequency of the arrays. And then we can compare the objects to get the expected result.

// Challenge: Anagram
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};
  for (const char of str1) lookup[char] = ++lookup[char] || 1;

  for (const char of str2) {
    if (!lookup[char]) return false;
    lookup[char] = --lookup[char];
  }

  return true;
}
console.log(validAnagram("aaz", "zaa"));
