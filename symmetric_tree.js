
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
            this.right = (right===undefined ? null : right)
        }
    
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
     var inorderTraversal = function(p, q) {
        if (p == null && q == null)
            return true
        if (p == null || q == null)
            return false

        return p.val == q.val && inorderTraversal(p.left, q.right) && inorderTraversal(p.right, q.left)
    };

    var isSymmetric = function(root) {
        return inorderTraversal(root, root)
    };
    
    
    let root = new TreeNode(1, new TreeNode(2, new TreeNode(2), null), new TreeNode(2, new TreeNode(2), null))
    console.log(isSymmetric(root));