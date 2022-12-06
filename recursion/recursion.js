// Chapter: Factorial with recursion
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Chapter: Fibonacci with recursion
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));

// Chapter: Sum of array with recursion
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}
console.log(sum([1, 2, 3, 4, 5]));

// Chapter: Collect odd values with helper method recursion
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

// Chapter: Collect odd values with pure recursion
function collectOddValues(arr) {
  let result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) result.push(arr[0]);
  result = result.concat(collectOddValues(arr.slice(1)));
  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5]));
