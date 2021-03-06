/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const res = [];
    function dfs(node) {
        if(!node) {
            res.push('null');
            return;
        }
        res.push(Number(node.val));
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return res; 
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let i = 0; 
    function dfs() {
        if(data[i] === 'null') {
            i++;
            return null;
        }
        const node = new TreeNode(Number(data[i]));
        i++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */