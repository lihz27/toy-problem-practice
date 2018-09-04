/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
   5   4   7
*/

class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const mergeTrees = (t1, t2) => {
  // copy one tree as base
  // iterate through both trees at the same time and add values if node not null
  // return new tree
  const baseTree = Object.assign({}, t1)
  const DFS = (node, baseNode, orig, side) => {
    if (node === null && baseNode === null) {
      return baseTree
    } else if (baseNode === null && node !== null) {
      orig[side] = node
    } else if (node !== null) {
      baseNode.value += node.value
      DFS(node.left, baseNode.left, baseNode, 'left')
      DFS(node.right, baseNode.right, baseNode, 'right')
    }
    return baseTree
  }
  return DFS(t2, baseTree, baseTree)
}

const t1 = new Tree(1)
t1.left = new Tree(3)
t1.right = new Tree(2)
t1.left.left = new Tree(5)

const t2 = new Tree(2)
t2.left = new Tree(1)
t2.right = new Tree(3)
t2.left.right = new Tree(4)
t2.right.right = new Tree(7)
console.log(mergeTrees(t1, t2))
