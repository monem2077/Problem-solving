function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var hasPathSum = function(root, targetSum) {
    if (root == null) return false
    return pathSum(root, targetSum);
};


var pathSum = function(root, targetSum, current_sum = 0) {
    if (root == null) return false;
    current_sum += root.val;
    if (!root.left && ! root.right) return current_sum == targetSum;
    return pathSum(root.left, targetSum, current_sum) || pathSum(root.right, targetSum, current_sum)
}


// https://leetcode.com/problems/path-sum/submissions/