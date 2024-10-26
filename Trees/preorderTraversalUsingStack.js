//using stack

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

function preorderTraversal(root){
    let result =[];
    let stack = [];

    if(root)stack.push(root)
    while(stack.length){
        let current =stack.pop();
        result.push(current.value);
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return result
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
const result = preorderTraversal(root); // Output: [1, 2, 4, 5, 3]
console.log(result)