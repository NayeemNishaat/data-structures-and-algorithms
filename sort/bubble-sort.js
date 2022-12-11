function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}
console.log(bubbleSort([53, 24, 36, 5, 12, 86, 74, 18, 69, 90, 36]));
