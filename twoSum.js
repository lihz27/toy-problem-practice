/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const twoSum = (nums, target) => {
  /*  
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (target === nums[i] + nums[j]) {
          return [i,j];
        }
      }
    }
    return undefined;
    // Solution is in O(n^2). Takes care of some negative numbers in nums array
  */
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const leftover = target - nums[i];
    if (hash[leftover]) {
      return [i, hash[leftover]];
    }
  }
  return [];
};
