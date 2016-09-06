function BinarySearchTree() {

    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    //获取根节点
    this.getRoot = function() {
        return root;
    }

    //插入新的节点
    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.insert = function(key) {
        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    //中序遍历
    var inOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    };

    //前序遍历
    var preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    };

    //后序遍历
    var postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    };

    //找到最小的节点
    var minNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }

            return node.key;
        }

        return null;
    };

    this.min = function() {
        return minNode(root);
    };

    //找到最大的节点
    var maxNode = function(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }

            return node.key;
        }

        return null;
    };

    this.max = function() {
        return maxNode(root);
    };

    //搜索特定的节点
    var searchNode = function(node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    this.search = function(key) {
        return searchNode(root, key);
    };

    //移除特定的节点
    var findMinNode = function(node) {
        while (node && node.left !== null) {
            node = node.left;
        }

        return node;
    };

    var removeNode = function(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            //情况一——有一个叶节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            //情况二——一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            //情况三——一个有两个子节点的节点
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };

    this.remove = function(key) {
        root = removeNode(root, key);
    };
}
