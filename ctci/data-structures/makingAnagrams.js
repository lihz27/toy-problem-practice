/*
We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.

NOTE: It is guaranteed that a and b consist of lowercase English alphabetic letters (i.e., a through z ).

Example:
makingAnagrams('cde', 'abc');  // 4 -> remove d, c from s1, remove a, b from s2
makingAnagrams('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'); // 30
*/

const makingAnagrams = (s1, s2) => {
  // create hashes of characters for each string -> space complexity is O(n)
  // keep count of same chars in strings
  // subtract same chars count from length of strings
  // sum numbers and return
  const s1Hash = {}, s2Hash = {};
  let commonCount = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1Hash[s1[i]]) {
      s1Hash[s1[i]] += 1;
    } else {
      s1Hash[s1[i]] = 1;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (s2Hash[s2[i]]) {
      s2Hash[s2[i]] += 1;
    } else {
      s2Hash[s2[i]] = 1;
    }
  }
  for (let key in s1Hash) {
    if (s2Hash[key]) {
      if (s1Hash[key] === s2Hash[key]) {
        commonCount += s1Hash[key];
      } else {
        if (s1Hash[key] > s2Hash[key]) {
          commonCount += s2Hash[key];
        } else {
          commonCount += s1Hash[key];
        }
      }
    }
  }
  const toDeleteS1 = s1.length - commonCount;
  const toDeleteS2 = s2.length - commonCount;
  return toDeleteS1 + toDeleteS2;
};
