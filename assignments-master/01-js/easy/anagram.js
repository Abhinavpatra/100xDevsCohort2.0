/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
 /*
let str1=prompt("first string");
let str2=prompt("second string");
str1=str1.toUpperCase;
str2=str2.toUpperCase;
*/
let str1Arr=[];
let str2Arr=[];

function isAnagram(str1, str2) {
  str1=str1.toUppercase();
  str2=str2.toUppercase();
  if(str1.length!=str2.length)
  return false;

  for(let i=0;i<str1.length;i++)
  str1Arr[i]=str1.splice(i,1);
  for(let i=0;i<str2.length;i++)
  str2Arr[i]=str2.splice(i,1);

  if(str1Arr.sort()==str2Arr.sort())
  return true;
  else
  return false;

}
console.log(isAnagram(str1,str2));


module.exports = isAnagram;
