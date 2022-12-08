// Part: Linear Search
/* function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); */

// Part: Binary Search
function binarySearch(arr, num) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) return mid;
    if (num > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 8, 23, 32, 35, 78], 1));
