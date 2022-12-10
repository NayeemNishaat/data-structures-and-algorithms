// Chapter: Naive String Search
/* function searchString(str, pattern) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) counter++;
    }
  }
  return counter;
}
console.log(searchString("This is a string. Isn't it?", "is")); // Remark: Local
console.log(searchString("This is a string. Isn't it?".toLowerCase(), "is")); // Remark: Global */

// KMP String Search
function KMPSearch(str, pattern) {
  const lps = [0];
  let j = 0,
    count = 0;

  for (i = 1; i < pattern.length; ) {
    if (pattern[i] === pattern[j]) lps.push(j + 1), i++, j++;
    else if (j !== 0) j = lps[j - 1];
    else lps.push(j), i++;
  }

  for (i = 0; i < str.length; ) {
    // Important: Can't mix regular i++ with i++ in the body!
    for (j = 0; j < pattern.length; ) {
      if (str[i] === pattern[j]) i++, j++;
      else if (j !== 0) j = lps[j - 1];
      else {
        i++;
        break;
      }
      if (pattern.length === j) ++count;
    }
  }

  return count;
}
console.log(KMPSearch("This is nayeem! Isn't it?", "is"));
