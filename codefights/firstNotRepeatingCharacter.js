/*
Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.
*/

firstNotRepeatingCharacter = (s) => {
  let charStore = {}, lowestIdx = -1, nonRepeatChar = '_';
  for (let i = 0; i < s.length; i++) {
    if (charStore[s[i]] === undefined) {
      charStore[s[i]] = {
        repeat: false,
        index: i,
      }
    } else if (!charStore[s[i]]['repeat']) {
      charStore[s[i]]['repeat'] = true;
    }
  }
  for (let key in charStore) {
    if (!charStore[key]['repeat']) {
      if (lowestIdx === -1) {
        lowestIdx = charStore[key]['index'];
        nonRepeatChar = key;
      } else if (lowestIdx > charStore[key]['index']) {
        lowestIdx = charStore[key]['index'];
        nonRepeatChar = key;
      }
    }
  }
  return nonRepeatChar;
}
