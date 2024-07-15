/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;
  if(n1 != n2) return false;

  let str11 = str1.toLowerCase();
  let str22 = str2.toLowerCase();
  // str1.sort();
  // let sortedStr1 = str1.split('').sort().join('');




// function sort(str){
//   var array = str.split("");
//   array = array.sort();
//   var sortedString = array.join("");
//   return sortedString;
// }


  let sortedStr1 = str11.split('').sort((a, b) => a.localeCompare(b)).join('');
  let sortedStr2 = str22.split('').sort((a, b) => a.localeCompare(b)).join('');

  // let sortedStr2 = str2.split('').sort().join('');
  // str2.sort();
  for(let i=0; i<n1; i++){
    if(sortedStr1[i] != sortedStr2[i]) return false;
  }
  return true;
}

module.exports = isAnagram;
