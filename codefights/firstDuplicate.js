/*
Note: Write a solution with O(n) time complexity and O(1) additional space complexity, since this is what you would be asked to do during a real interview.

Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

*****
EXAMPLE
*****
a = [2, 3, 3, 1, 5, 2]
firstDuplicate(a) // 3
There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than than second occurrence of 2 does, so the answer is 3.

a = [2, 4, 3, 5, 1]
firstDuplicate(a) // -1
*/

firstDuplicate = (a) => {
  let countStore = {}; 
  let duplicate = false;
  for (let i = 0; i < a.length; i ++) {
    if (countStore[a[i]] === 1) {
      duplicate = true;
      return a[i];
    } else if (countStore[a[i]] === undefined) {
      countStore[a[i]] = 1;
    }
  }
  if (!duplicate) {
    return -1;
  }
}
