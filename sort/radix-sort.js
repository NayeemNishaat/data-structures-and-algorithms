function getDigit(num, i) {
  // return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return Math.trunc(Math.abs(num) / 10 ** i) % 10; // Important: Math.abs() to get positive number when we put negative number
}
console.log(getDigit(235436, 2));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log(digitCount(235436));
