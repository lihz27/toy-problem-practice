/*
Given a dictionary, find all pairs of words that, when concatenated together, form a palindrome.
‘none', 'xenon': 'nonexenon' is a palindrome
'none', 'xexenon': 'nonexexenon' is a palindrome
*/

const findPalindromePairs = (dictionary) => {
  // have array for storing successful wordPairs
  // iterate through dictionary
    // retrieve two words each time
    // prepend and append first word to second word
    // for both prepended and appended words
      // firstHalf = word.slice(0,word.length/2).split();
      // secondHalf = word.slice(word.length/2, word.length).split();
      // for each character in firstHalf.reverse()
        // if firstHalf.reverse()[i] === secondHalf[i] && i === firstHalf.reverse().length
          // add pair to wordPairs array
  // return wordPairs
};
