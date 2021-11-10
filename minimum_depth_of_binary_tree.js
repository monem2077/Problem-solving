function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var minDepth = function(root) {
    if (root == null) return 0
    let leftLength = minDepth(root.left);
    let rightLength = minDepth(root.right)
    if (leftLength == 0) return 1 + rightLength;
    else if (rightLength == 0) return 1 + leftLength;
    else return 1 + Math.min(leftLength, rightLength)
    
};

// https://leetcode.com/problems/minimum-depth-of-binary-tree/