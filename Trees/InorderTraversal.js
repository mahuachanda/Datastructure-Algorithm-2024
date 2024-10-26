

  //Definition for a binary tree node.
class TreeNode{
    constructor(val,left=null, right=null){
        this.val=val;
        this.left=left||null;
        this.right=right||null;
    }
}
//left->root->right
//Using recursion

var inorderTraversal1 = function(root) {
    let result=[]
     if(root === null) return []
    inorderTraversal1(root.left);
      result.push(root.val);
    inorderTraversal1(root.right);
     return result;
 };

var inorderTraversal2 = function(root) {
    let result=[]
     if(root === null) return []
   result =  result.concat(inorderTraversal2(root.left));
      result.push(root.val);
    result = result.concat (inorderTraversal2(root.right));
     return result;
 };
 const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = inorderTraversal1(root)
console.log(result);