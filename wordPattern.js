/*
Given list of strings and a pattern, such as *xx* where * can match any number of chracters, return matching words in an efficient manner.

Input: ['crane', 'drain', 'refrain'], *an*
Output: 'crane'
*/

const wordPattern = (words, pattern) => {
  // can use RegEx here
  const matches = [];
  const regexPattern = new RegExp(pattern, 'gi');
  return words.filter(word => word.match(regexPattern))
};

// console.log(wordPattern(['crane', 'drain', 'refrain'], 'an'))
