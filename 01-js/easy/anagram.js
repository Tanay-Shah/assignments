/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let lowerCaseString1 = str1.toLowerCase();
  let lowerCaseString2 = str2.toLowerCase();
  let arr1 = Array.from(lowerCaseString1);
  let arr2 = Array.from(lowerCaseString2);
  let check = 0;

  if (lowerCaseString1.length !== lowerCaseString2.length) {
    return false;
  }
  
  arr1.forEach((element) => {
    for (let i = 0; i < arr2.length; i++) {
      if (element === arr2[i]) {
        arr2[i] = 0;
        check++;
      }
    }
  });

  if (check === arr2.length) {
    return true;
  }

  return false;
}

module.exports = isAnagram;
