function getDigit(num, i) {
  // return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return Math.trunc(Math.abs(num) / 10 ** i) % 10; // Important: Math.abs() to get positive number when we put negative number
}
console.log(getDigit(235436, 2));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.trunc(Math.log10(Math.abs(num))) + 1;
}
console.log(digitCount(235436));

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
}
console.log(mostDigits([23, 567, 89, 12234324, 90]));
