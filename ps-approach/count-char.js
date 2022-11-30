function countChar(str) {
  const lowerCasedStr = str.toLowerCase();
  const count = {};

  [...lowerCasedStr].forEach((char) => {
    if (/[^a-zA-Z0-9]/g.test(char)) return;
    if (count[char]) count[char]++;
    else count[char] = 1;
  });

  return count;
}
console.log(countChar("Hi there!"));
