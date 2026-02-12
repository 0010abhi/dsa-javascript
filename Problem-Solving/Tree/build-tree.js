/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preorderIndex = 0;

    function createTree(inOrderStartIndex, inOrderEndIndex) {
        if (inOrderStartIndex > inOrderEndIndex) { return null; }
        // 2. Pick the current element from preorder as root
        let rootVal = preorder[preorderIndex++];
        let root = new TreeNode(rootVal);

        // 3. Get the index of this root from the inorder map
        let inorderIndex = inorderMap.get(rootVal);

        root.left = createTree(inOrderStartIndex, inorderIndex - 1);
        root.right = createTree(inorderIndex + 1, inOrderEndIndex);
        return root;
    }

    return createTree(0, inorder.length - 1);
};