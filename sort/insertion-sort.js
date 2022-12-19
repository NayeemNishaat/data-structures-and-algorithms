function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > curr; j--) arr[j + 1] = arr[j]; // Note: It will not go to last expression if the previous expression is false
    arr[j + 1] = curr; // Important: We can't use arr[i] here as arr[i] is already changed in the above loop. So we use curr instead of arr[i]
  }
  return arr;
}
console.log(insertionSort([53, 2, 24, 5, 5, 7, 55, 87, 23, 34, 2]));
