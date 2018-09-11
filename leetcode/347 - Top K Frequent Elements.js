/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

const topKFrequent = (nums, k) => {
  const hash = {}
  nums.forEach((num) => {
    if (hash[num]) {
      hash[num]++
    } else {
      hash[num] = 1
    }
  })
  const array = []
  for (let key in hash) {
    array.push([key, hash[key]])
  }
  array.sort((a, b) => b[1] - a[1])
  const results = []
  for (let i = 0; i < k; i++) {
    results.push(Number(array[i][0]))
  }
  return results
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1], 1))
