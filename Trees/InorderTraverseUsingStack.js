class TreeNode{
    constructor(val,left=null, right=null){
        this.val=val;
        this.left=left||null;
        this.right=right||null;
    }
}
function inorderTraverse(root){
    let stack=[];
    let result=[];
    let current = root;

    while(current!==null || stack.length>0){
        while(current!==null){
            stack.push(current);
            current= current.left;
        }
        current=stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = inorderTraverse(root)
console.log(result);
