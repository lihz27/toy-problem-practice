/*
Given two arrays that are sorted and distinct, find the number of elements in common.

Input: [1, 3, 7, 21], [2, 3, 5, 7, 10, 16, 21, 23]
Output: 3
*/

const commonArrayElements = (array1, array2) => {
  let index1 = 0, index2 = 0, pointer1 = array1[index1], pointer2 = array2[index2];
  const intersection = [], a1Size = array1.length, a2Size = array2.length;
  while(index1 < a1Size && index2 < a2Size) {
    if (pointer1 === pointer2) {
      intersection.push(pointer1);
      index1++;
      pointer1 = array1[index1];
      index2++;
      pointer2 = array2[index2];
    } else if (pointer1 < pointer2) {
      index1++;
      pointer1 = array1[index1];
    } else {
      index2++;
      pointer2 = array2[index2];
    }
  }
  return intersection.length;
};
