/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"


Example 2:

Input: "here"
Output: "here"


Example 3:

Input: "LOVELY"
Output: "lovely"
*/

const toLowerCase = (str) => {
  let outputStr = ''
  const split = str.split('')
  // Capital letters in ASCII range from 65 to 90
  // Lowercase letters range from 97 to 122 (+32)
  split.forEach((letter) => {
    let currentCharCode = letter.charCodeAt()
    if (65 <= currentCharCode && currentCharCode <= 90) {
      outputStr += String.fromCharCode(currentCharCode + 32)
    } else {
      outputStr += letter
    }
  })
  return outputStr
}

// console.log('1', toLowerCase('LOVELY'))
// console.log('2', toLowerCase('Lovely'))
// console.log('3', toLowerCase('LoVEly'))
