function addUpTo(n) {
  let total = 0;
  for (i = 1; i <= n; i++) total += i;
  return total;
}
console.time("addUpTo");
console.log(addUpTo(1000000));
console.timeEnd("addUpTo");
