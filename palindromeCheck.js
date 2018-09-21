/*
Given a string, the task is to check if the string can be made a palindrome by swapping a single character in the string with another character.

Example: "raceoar" would evaluate to true because you could swap the "o" with a "c"
*/

const palindromeCheck = (string) => {
  // use pointers
  if (typeof string !== 'string') {
    return false
  }
  let swap = false
  let p1 = 0, p2 = string.length - 1
  while (p1 < string.length / 2) {
    if (string[p1] !== string[p2]){
      if (!swap) {
        swap = !swap
      } else {
        return false
      }
    }
    p1++
    p2--
  }
  return swap
}

console.log(palindromeCheck('raceoar')) // true
console.log(palindromeCheck('starbats')) // true
console.log(palindromeCheck('racecar')) // false
console.log(palindromeCheck('raczioar')) // false
console.log(palindromeCheck('')) // false
console.log(palindromeCheck(true)) // false
