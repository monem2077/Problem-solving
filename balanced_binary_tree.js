function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var isBalanced = function(root) {

    if ( root == null ) return true;
  
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(height(root.left) - height(root.right)) <= 1;
};

var height =function(root) {
    if ( root == null ) return 0;

    return 1 + Math.max(height(root.left), height(root.right))
};


// https://leetcode.com/problems/balanced-binary-tree/