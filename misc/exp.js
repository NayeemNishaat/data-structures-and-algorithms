// Workout plan to burn calories every day
function caloriesBurned(cals, d, min, max) {
  const newarr = [];
  let total = 0;
  // newarr.push(cals.sbustr(0, d));
  // console.log(newarr);
  for (let i = 0; i < cals.length + d; i += d) {
    if (i + d <= cals.length + 1) {
      newarr.push(cals.slice(i, i + d));
    }
  }
  console.log(newarr);

  newarr.forEach((element) => {
    let temp = 0;
    element.forEach((el) => {
      temp += el;
    });
    // console.log(temp);
    if (temp < min) {
      total -= 1;
    }
    if (temp > max) {
      total += 1;
    }
  });
  console.log(total);
  return total;
}

caloriesBurned([1, 2, 3, 4, 5], 3, 3, 3);
