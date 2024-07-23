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
})();

