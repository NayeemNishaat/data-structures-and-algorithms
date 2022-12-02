// Chapter: Count Alphanumeric Char
function isAlphaNumericCharacter(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  )
    // lower alpha (a-z)
    return false;
  return true;
}

function countChar(str) {
  const lowerCasedStr = str.toLowerCase();
  const count = {};

  // [...lowerCasedStr].forEach((char) => {
  //   if (/[^a-zA-Z0-9]/g.test(char)) return; // Note: Retuen because it's inside a cb function.
  //   if (count[char]) count[char]++;
  //   else count[char] = 1;
  // });

  // for (i = 0; i < lowerCasedStr.length; i++) {
  for (const char of lowerCasedStr) {
    // if (/[^a-zA-Z0-9]/g.test(char)) continue; // Note: Continue because it's inside a loop!
    if (!isAlphaNumericCharacter(char)) continue;
    count[char] = ++count[char] || 1; // Remark: Increment first then assign!
  }

  return count;
}
console.log(countChar("Hi there!"));

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
console.log(validAnagram("anagram", "nagaram"));

// Note: This Frequency Counter Algorithm is best suited for:
// Point: Anagram
// Point: Comparing if arrays are same or squared etc.
// Point: If numbers consist of the same digits but in different order etc.
