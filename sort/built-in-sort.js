const arr = ["Nayeem", "Saymon", "Sadia", "Nushrat", "Yeakub", "Ayoub"];
console.log(arr.sort()); // Note: By default sorts alphabetically by taking unicode of the string (converts array elements to string) ascending order
console.log(arr.sort((a, b) => (a > b ? -1 : 1))); // Note: Sorts alphabetically descending order
console.log(arr.sort().reverse()); // Note: Sorts alphabetically descending order
console.log(arr.sort((a, b) => b.localeCompare(a))); // Note: Sorts alphabetically descending order

const arr2 = ["a", "á", "b", "c", "A", "Á", "B", "Z"];
arr.sort((a, b) => b.localeCompare(a, "es", { sensitivity: "base" }));
console.log(arr2);

console.log(arr.sort((a, b) => a.length - b.length)); // Remark: Sorts by length of the string

const numArr = [12, 63, 3, 12, 45, 28];
console.log(numArr.sort((a, b) => b - a));
