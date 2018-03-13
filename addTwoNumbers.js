/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

*/

/*
// convert linked lists into strings then numbers
// add numbers together and convert sum to string
// starting at end of string, create linked list of numbers

const convertToString = (l, str) => {
  if (l !== null) {
    const num = l.val;
    str = num.toString() + str;
    return convertToString(l.next, str);
  }
  return str;
};

const addTwoNumbers = (l1, l2) => {
  const string1 = convertToString(l1, '');
  const string2 = convertToString(l2, '');
  let sum = Number(string1) + Number(string2);
  sum = sum.toString();
  let sumList = new ListNode(Number(sum[sum.length - 1]));
  let pointer = sumList;
  let i = sum.length - 2;
  while(i >= 0) {
    pointer.next = new ListNode(Number(sum[i]));
    pointer = pointer.next;
    i--;
  }
  return sumList;
};
*/

const addTwoNumbers = (l1, l2) => {
  let sumList = new ListNode();
  let a = l1, b = l2, add = 0, l = sumList;
  while (a !== null || b !== null) {
    let x = (a !== null) ? a.val : 0;
    let y = (b !== null) ? b.val : 0;
    let sum = add + x + y;
    add = Math.floor(sum / 10);
    l.val = sum % 10;
    if ((a && a.next) || (b && b.next)) {
      l.next = new ListNode();
      l = l.next;
    }
    a = (a !== null) ? a.next : null;
    b = (b !== null) ? b.next : null;
  }
  if (add > 0) {
    l.next = new ListNode(add);
  }
  return sumList;
};