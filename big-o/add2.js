function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
console.time("addUpTo");
console.log(addUpTo(1000000));
console.timeEnd("addUpTo");
