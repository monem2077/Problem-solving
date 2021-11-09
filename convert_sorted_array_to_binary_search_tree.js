function BSTNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function insert(data, root) {
    if (root == null) root = new BSTNode(data);
    else if (data <= root.val) root.left = insert(data, root.left)
    else root.right = insert(data, root.right); 
    return root;
};

function min(root) {
    if (root.left == null) return root;
    else return min(root.left);
}

function max(root) {
    if (root.right == null) return root;
    else return min(root.right);
}

function hight(node) {
    if (node == null) return -1;
   
    let lHight = hight(node.left);
    let rHight = hight(node.right);

    return Math.max(lHight, rHight) + 1;
}

function BFS(root) {
    if (root == null) return;
    const queue = []
    queue.push(root);
    while(queue.length != 0) {
        let current = queue.shift();
        current.left != null ? queue.push(current.left) : '';
        current.right != null ? queue.push(current.right) : '';
        console.log(current.val);
    }
}

function DLR(root) {
    if (root == null) return;
    DLR(root.left);
    DLR(root.right);
}

function LDR(root) {
    if (root == null) return;
    LDR(root.left);
    LDR(root.right);
}

function LRD(root) {
    if (root == null) return;
    LRD(root.left);
    LRD(root.right);
}

function isBST(root, min, max) {
    if (root == null) return true;
    console.log(root.val);
    if (root.val > min
        && root.val < max
        && isBST(root.left, min, root.val)
        && isBST(root.right, root.val, max)) return true;
    else return false;   
}

function deleteNode(root, key) {
    if (!root) {
        return null;
    }
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        } else {
            root.val = min(root.right);
            root.right = deleteNode(root.right, root.val);
        }
    }
    
    return root;
} 

function find(root, key) {
    if (root == null) return null;
    else if (key < root.val) return find(root.left, key);
    else if (key == root.val) return root
    else return find(root.right, key)
}

function InorderSuccessor(root, key) {
    let node = find(root, key);
    if (node == null) return null;
    if (node.right != null) return min(node.right);
    else {
        let successor = null;
        let ancestor = root;
        while(ancestor != node) {
            if (node.val < ancestor.val) {
                successor = ancestor;
                ancestor = ancestor.left
            } else {
                ancestor = ancestor.right
            }
        }

        return successor;
    }

}


let root = insert(5, null);
insert(10, root)
insert(3, root)
insert(2, root)
insert(4, root)



console.log(find(root, 2))
