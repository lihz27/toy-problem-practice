/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const invertTree = (root) => {
  if (root) {
    const temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
  }
  return root
}

const t1 = new Tree(4)
t1.left = new Tree(2)
t1.right = new Tree(7)
t1.left.left = new Tree(1)
t1.left.right = new Tree(3)
t1.right.left = new Tree(6)
t1.right.right = new Tree(9)

console.log(invertTree(t1))
