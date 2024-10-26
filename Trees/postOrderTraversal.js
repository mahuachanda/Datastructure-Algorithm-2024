//using recursion
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    if(root===null){
        return []
    }
    postorderTraversal(root.left);
    postorderTraversal(root.right);
    console.log(root.val);
 }