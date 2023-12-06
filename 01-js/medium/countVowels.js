/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running|  npx jest ./tests/countVowels.test.js
*/

function countVowels(st) {
    
  let str = st.toLowerCase();
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      if(str[i]==='a' ||str[i]==='e' ||str[i]==='i' ||str[i]==='o' ||str[i]==='u'){
        count++;
      }
    }
  }

  return count;
}

module.exports = countVowels;
