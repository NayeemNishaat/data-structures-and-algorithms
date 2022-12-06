/* // Chapter: Simple recursive problems
// Segment: Factorial with recursion
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Segment: Fibonacci with recursion
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));

// Segment: Sum of array with recursion
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}
console.log(sum([1, 2, 3, 4, 5]));

// Segment: Power with recursion
function power(x, y) {
  if (y === 1) return x;
  return x * power(x, y - 1);
}

console.log(power(5, 3));

// Segment: Recursive range
function recursiveRange(x) {
  if (x === 1) return 1;
  return x + recursiveRange(x - 1);
}
console.log(recursiveRange(3));

// Segment: Product of array
function productOfArray(arr) {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([3, 4, 6]));

// Chapter: Types of recursion
// Segment: Collect odd values with helper method recursion
function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5]));

// Segment: Collect odd values with pure recursion
function collectOddValues(arr) {
  let result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) result.push(arr[0]);
  result = result.concat(collectOddValues(arr.slice(1)));
  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5])); */

// Chapter: Recursion challenge
// Segment: Reverse str
/* function reverse(str) {
  if (!str.length) return "";
  return str.slice(-1).concat(reverse(str.slice(0, -1)));
}
console.log(reverse("nayeem")); */

// Segment: Is Palindrome
/* function isPalindrome(str) {
  if (str.slice(0, 1) === str.slice(-1)) {
    if (str.length) return isPalindrome(str.slice(1, -1));
    else return true;
  } else return false;
}
console.log(isPalindrome("racecar")); */

// Segment: Some recursive function implementation
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
someRecursive([1, 2, 3, 4], (val) => val % 2 !== 0);
console.log(someRecursive([3, 5, 2, 7], (val) => val % 2 === 0)); // Check if any even exist
