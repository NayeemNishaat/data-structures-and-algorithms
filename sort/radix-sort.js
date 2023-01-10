function getDigit(num, i) {
  // return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return Math.trunc(num / 10 ** i) % 10;
}
