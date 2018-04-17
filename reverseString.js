/*
Leetcode #344

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

var reverseString = function (s) {
  var split = s.split('');
  return split.reverse().join('');
};
