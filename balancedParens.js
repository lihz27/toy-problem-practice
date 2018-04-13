/*
Given an array of braces, determine if each string of braces is balanced and return either 'y' (yes) or 'n' (no) for the strings.

Example:
var parensArr = ['{}[]()', '{[}]}'];
balancedParens(parensArr);    // returns ['y', 'n']

var parensArr = ['{[()]}', '{[(])}', '{{[[(())]]}}']
balancedParens(parensArr);    // returns ['y', 'n', 'y']
*/

function balancedParens(values) {
  var sol = [];
  var braces = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  for (var i = 0; i < values.length; i++) {
    if (values[i].length < 2) {
      temp = 'n';
    }
    var split = values[i].split('');
    var stack = [];
    var temp = 'y';
    for (var j = 0; j < split.length; j++) {
      if (braces[split[j]]) {
        stack.push(split[j]);
      } else if (split[j] === '}' || split[j] === ')' || split[j] === ']') {
        if (braces[stack.pop()] !== split[j]) {
          temp = 'n';
          break;
        } else {
        }
      }
    }
    if (stack.length !== 0) {
      temp = 'n';
    }
    sol.push(temp);
  }
  return sol;
}
