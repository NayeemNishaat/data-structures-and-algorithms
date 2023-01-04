function mergeSortedArray(arr1, arr2) {
  const arr = [];
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  loop1: for (i = 0; i < arr1.length; ) {
    loop2: for (j = 0; j < arr2.length; ) {
      if (arr1[i] < arr2[j]) arr.push(arr1[i]), i++;
      else arr.push(arr2[j]), j++;

      if (arr1.length === i) {
        arr.push(...arr2.slice(j));
        break loop1;
      }

      if (arr2.length === j) {
        arr.push(...arr1.slice(i));
        break loop1;
      }
    }
  }

  return arr;
}
console.log(mergeSortedArray([1, 3, 5], [0]));
