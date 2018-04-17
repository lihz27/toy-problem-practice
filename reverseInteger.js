/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/

const reverseInteger = (integer) => {
  const intString = '' + integer;
  const intSplit = intString.split('');
  let toReverse = intSplit.slice();
  let prepend = '';
  if (intSplit[0] === '-') {
    toReverse.splice(0, 1);
    prepend += '-';
  }
  const reversedInt = toReverse.reverse().join('');
  if (prepend === '-') {
    return Number(-(reversedInt));
  }
  return Number(reversedInt);
};
