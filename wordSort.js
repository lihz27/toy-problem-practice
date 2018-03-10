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

// This solution only checks for first letter of word
const isArraySorted = (wordList, orderList) => {
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
