function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var invertTree = function(root) {
    if (!root) {
        return null;
    }
    
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    // swap.
    root.left = right;
    root.right = left;

    return root
};

// https://leetcode.com/problems/invert-binary-tree/submissions/