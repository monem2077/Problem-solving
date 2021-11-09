function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var maxDepth = function(root) {

  return getMax(root);
};

var getMax =function(root, count = 0) {
    if ( root == null ) return count;
  
    return Math.max(getMax(root.left, count + 1), getMax(root.right, count + 1));
};

// https://leetcode.com/problems/maximum-depth-of-binary-tree/