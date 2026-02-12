(function binartTree() {

    // treeNode cretion
    function treeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // depth first search traversal
    function inOrder(root) {
        if (root !== null) {
            inOrder(root.left);
            console.log(root.data);
            inOrder(root.right);
        }
    }

    function preOrder(root) {
        if (root !== null) {
            console.log(root.data);
            preOrder(root.left);
            preOrder(root.right);
        }
    }

    function postOrder(root) {
        if (root !== null) {
            postOrder(root.left);
            postOrder(root.right);
            console.log(root.data);
        }
    }

    // breadth or level first search traversal
    function levelOrderItr(root) {
        if(root === null) {
            return [];
        }
        let res = [];
        let queue = [];
        let level = 0;
        queue.push(root);

        while(queue.length > 0) {
            let queueLength = queue.length;
            res.push([]);
            for(let i=0; i<queueLength; i++) {
                const node = queue.shift();
                res[level].push(node.data);
                if(node.left !== null) {
                    queue.push(node.left);
                }
                if(node.right !== null) {
                    queue.push(node.right);
                }
            }
            level++;
        }
        return res;
    }

    function levelOrderRec(root, level, res) {
        if(root === null) {
            return;
        }

        if(res.length <= level) {
            res.push([]);
        }

        res[level].push(root.data);
        levelOrderRec(root.left, level + 1, res);
        levelOrderRec(root.right, level + 1, res);
    }

    function levelOrder(root) {
        const res = [];
        levelOrderRec(root, 0, res);
        return res;
    }


    // height of binary tree
    function height(root) {
        if (root === null) {
            return 0;
        } else {
            return Math.max(height(root.left), height(root.right)) + 1;
        }
    }

    const tree = new treeNode(10);

    tree.left = new treeNode(20);
    tree.left.left = new treeNode(40);

    tree.left.right = new treeNode(50);
    tree.left.right.left = new treeNode(70);
    tree.left.right.right = new treeNode(80);

    tree.right = new treeNode(30);
    tree.right.right = new treeNode(60);

    console.log('tree', tree);
    console.log('In Order');
    inOrder(tree);
    console.log('Pre Order');
    preOrder(tree);
    console.log('Post Order');
    postOrder(tree);
    console.log('Height of the tree', height(tree));
    const itrLevelRes =levelOrderItr(tree);
    console.log('Level Order Iterative', itrLevelRes);
    const recLevelRes =levelOrder(tree);
    console.log('Level Order Recursive', recLevelRes);
    
})();

