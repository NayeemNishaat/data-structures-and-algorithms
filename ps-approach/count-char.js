function countChar(str) {
  const lowerCasedStr = str.toLowerCase();
  const count = {};

  // [...lowerCasedStr].forEach((char) => {
  //   if (/[^a-zA-Z0-9]/g.test(char)) return; // Note: Retuen because it's inside a cb function.
  //   if (count[char]) count[char]++;
  //   else count[char] = 1;
  // });

  for (i = 0; i < lowerCasedStr.length; i++) {
    const char = lowerCasedStr[i];

    if (/[^a-zA-Z0-9]/g.test(char)) continue; // Note: Continue because it's inside a loop!
    if (count[char]) count[char]++;
    else count[char] = 1;
  }

  return count;
}
console.log(countChar("Hi there!"));
