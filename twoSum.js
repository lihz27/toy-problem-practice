/*
Given a sorted array of integers, return indices of the two numbers such that they add up to a specific target.

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
    // Solution is in O(n^2) time and O(1) space. Takes care of some negative numbers in nums array
  */

  /*
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
  // Solution is in O(n) time and O(n) space.
  */

  let idx1 = 0;
  let idx2 = nums.length - 1;
  let p1 = nums[idx1];
  let p2 = nums[idx2];
  if (nums[idx1] > target) {
    return [];
  }
  for (let i = 0; i < nums.length; i++) {
    if ((p1 + p2) > target) {
      idx2--;
      p2 = nums[idx2];
    } else if ((p1 + p2) < target) {
      idx1++;
      p1 = nums[idx1];
    } else {
      return [idx1, idx2];
    }
  }
  return [];
  // Solution is in O(n) time and O(1) space.
};
