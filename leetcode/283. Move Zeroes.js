/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.
- Do not return anything.

*/

const moveZeroes = (nums) => {
  let swaps = 0
  nums.map((num, index) => {
    if (num === 0 && nums[index + 1] && nums[index + 1] !== 0) {
      const temp = nums[index + 1]
      nums[index + 1] = num
      nums[index] = temp
      swaps++
    }
  })
  if (swaps > 0) {
    moveZeroes(nums)
  }
}