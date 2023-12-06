/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.npx jest ./tests/palindrome.test.js
*/

function isPalindrome(st) {
  let str = st.toLowerCase();
  let s = 0;
  let newstr = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      newstr += str[i];
    }
  }

  let e = newstr.length - 1;
  while (s <= e) {
    if (newstr[s] === newstr[e]) {
      s++;
      e--;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
