
    function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    if (root == null) return[];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};


let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
console.log(inorderTraversal(root));