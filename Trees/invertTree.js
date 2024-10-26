/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
//Swap left and right node using a temp variable

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if(root === null){
            return null
        }
        const temp = root.left;
        root.left = root.right;
        root.right = temp;
        this.invertTree(root.left);
        this.invertTree(root.right);
    return root;
    }
}
