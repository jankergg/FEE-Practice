// @algorithm @lc id=144 lang=javascript
// @title binary-tree-preorder-traversal
// @test([1,null,2,3])=[1,2,3]
// @test([])=[]
// @test([1])=[1]
// @test([1,2])=[1,2]
// @test([1,null,2])=[1,2]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function trvaerse(root) {
  if (root.left === null && root.right === null) {
    return root.val;
  }
}
var preorderTraversal = function (root) {
  const result = [];
};
