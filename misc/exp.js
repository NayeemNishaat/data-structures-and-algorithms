function caloriesBurned(cals, d, min, max) {
  const newarr = [];
  let total = 0;

  for (let i = 0; i < cals.length; i += d) {
    newarr.push(cals.slice(i, i + d));
  }

  newarr.forEach((element) => {
    let temp = 0;
    element.forEach((el) => (temp += el));

    if (temp < min) total -= 1;
    if (temp > max) total += 1;
  });
  return total;
}

console.log(caloriesBurned([1, 2, 3, 4, 5, 6, 7], 5, 3, 3));
