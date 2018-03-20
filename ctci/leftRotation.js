/*
A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

Given an array of n integers and a number, d, perform d left rotations on the array and return the array.

Example:
leftRotation([1, 2, 3, 4, 5], 4);  // [5, 1, 2, 3, 4]
*/

const leftRotation = (array, rotation) => {
  if (array.length % rotation === 0) {
    return array;
  }

};
