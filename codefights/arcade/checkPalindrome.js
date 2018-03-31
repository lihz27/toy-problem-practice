/*
Given a string, check if it is a palindrome. Returns a boolean.

Example:
checkPalindrome("aabaa") = true;
checkPalindrome("abac") = false;
checkPalindrome("a") = true;

*/
const checkPalindrome = (inputString) => {
  const strSplit = inputString.split('');
  const reverse = strSplit.slice();
  strSplit.reverse();
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] !== reverse[i]) {
      return false;
    }
  }
  return true;
};