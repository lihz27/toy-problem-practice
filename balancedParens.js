/*
Given an array of braces, determine if each string of braces is balanced and return either 'y' (yes) or 'n' (no) for the strings.

Example:
var parensArr = ['{}[]()', '{[}]}'];
balancedParens(parensArr);    // returns ['y', 'n']

var parensArr = ['{[()]}', '{[(])}', '{{[[(())]]}}']
balancedParens(parensArr);    // returns ['y', 'n', 'y']
*/

const balancedParens = (values) => {
  var sol = [];
  var braces = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  values.forEach((string) => {
    if (string.length < 2) {
      temp = 'n';
    }
    var split = string.split('');
    var stack = [];
    var temp = 'y';
    split.forEach((parens) => {
      if (braces[parens]) {
        stack.push(parens);
      } else if (parens === '}' || parens === ')' || parens === ']') {
        if (braces[stack.pop()] !== parens) {
          temp = 'n';
        }
      }
    })
    if (stack.length !== 0) {
      temp = 'n';
    }
    sol.push(temp);
  })
  return sol;
}
