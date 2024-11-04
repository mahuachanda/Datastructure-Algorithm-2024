class Node{
    constructor(val){
        this.value = val;
        this.left=null;
        this.right=null;
    }
}
class BSTree {
    constructor(){
        this.root = null;
    }
    isTreeEmpty(){
        return this.root  === null;
    }
    makeTree(val){
        let newNode = new Node(val);
        if(this.root ===null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode){
        if(root.value>newNode.value){
            if(root.left===null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode);
            }
            
        }else{
            if(root.right===null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }
  
}
let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);//if we don't use recursion here, the value will get override
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);
console.log(bst);

//leetcode pattern

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val)
    if(root === null){
        root = newNode;
    }else{
        insertNode(root, newNode);
    }
    function insertNode(root, newNode){
        if(root.val > newNode.val){
            if(root.left === null){
                root.left = newNode
            }else{
                insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                insertNode(root.right, newNode)
            }
        }
    }
    return root;
};