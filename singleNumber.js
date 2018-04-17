/*
Leetcode #136

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

const singleNumber = (array) => {
  array.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i+1] && array[i] !== array[i-1]) {
      return array[i];
    }
  }
};

console.log(singleNumber([4,3,6,4,5,6,3,5,7]));
