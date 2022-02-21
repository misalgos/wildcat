/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    const arr = [];
    const queue = [root];
    while(queue.length) {
        console.log(`queue`, queue);
        const size = queue.length;
        const last = queue[size-1];
        arr.push(last.val);
        for(let i = 0; i <  size; i++) {
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
      
    }
    return arr;
};