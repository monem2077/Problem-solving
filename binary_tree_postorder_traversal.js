function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var postorderTraversal = function(root) {
    if (root == null) return [];
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};
