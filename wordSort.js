/*
Given two input arrays, return true if the words array is sorted according to the ordering array
Input:
words = ['cc', 'cb', 'bb', 'ac']
ordering = ['c', 'b', 'a']
Output: True

Input:
words = ['cc', 'cb', 'bb', 'ac']
ordering = ['b', 'c', 'a']
Output: False
*/

const isArraySorted = (wordList, orderList) => {
  // keep track of currentLetter encountered in orderList
  // iterate through wordList
  // if nextLetter in wordList is not the same as currentLetter
    // check if nextLetter === currentLetter + 1
      // if true, currentLetter = orderList[currentLetterIdx + 1]
      // if false, return false
  let tempIndex, orderIndex = 0;
  let currentLetter = orderList[orderIndex];
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i][0] !== currentLetter && orderIndex !== orderList.length - 1){
      currentLetter = orderList[++orderIndex];
      if (wordList[i][0] !== currentLetter) {
        return false;
      }
    } else if (orderIndex === orderList.length - 1){
      return false;
    }
  }
  return true;
};

console.log(isArraySorted(['cc', 'cb', 'bb', 'ac'], ['c', 'b', 'a']));
console.log(isArraySorted(['cc', 'cb', 'bb', 'ac'], ['b', 'c', 'a']));
