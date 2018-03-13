/*
Given a string, find the length of the longest substring without repeating characters.

Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

const lengthOfLongestSubstring = (s) => {
  // store length counter
  // iterate through string
    // if length counter > string.length - current index
      // return length counter
    // for letter in string
      // create hash for collecting count of letters
      // if letter not in hash
        // increment length counter
      // else break and continue to next letter in string
  // return length of longest substring
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    if (length > s.length - i) {
      return length;
    }
    let tempLength = 0;
    const hash = {};
    for (let j = i; j < s.length; j++) {
      if (!hash[s[j]]) {
        hash[s[j]] = 1;
        tempLength++;
      } else {
        break;
      }
    }
    length = Math.max(length, tempLength);
  }
  return length;
};
