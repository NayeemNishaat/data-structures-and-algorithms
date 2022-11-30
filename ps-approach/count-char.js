function isAlphaNumericCharacter(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  )
    // lower alpha (a-z)
    return false;
  return true;
}

function countChar(str) {
  const lowerCasedStr = str.toLowerCase();
  const count = {};

  // [...lowerCasedStr].forEach((char) => {
  //   if (/[^a-zA-Z0-9]/g.test(char)) return; // Note: Retuen because it's inside a cb function.
  //   if (count[char]) count[char]++;
  //   else count[char] = 1;
  // });

  // for (i = 0; i < lowerCasedStr.length; i++) {
  for (const char of lowerCasedStr) {
    // if (/[^a-zA-Z0-9]/g.test(char)) continue; // Note: Continue because it's inside a loop!
    if (!isAlphaNumericCharacter(char)) continue;
    count[char] = ++count[char] || 1; // Remark: Increment first then assign!
  }

  return count;
}
console.log(countChar("Hi there!"));
