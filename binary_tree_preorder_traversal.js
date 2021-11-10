function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var preorderTraversal = function(root) {
    if (root == null) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};


// https://leetcode.com/problems/binary-tree-preorder-traversal/