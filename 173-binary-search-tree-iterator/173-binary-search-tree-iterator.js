class BSTIterator {
    constructor(root) {
        this.root = root;
        this.ptr = this.root;
        this.stack = [];
        this.inorder();
    }
    inorder() {
        if (this.ptr || this.stack.length) {
            while (this.ptr) {
                this.stack.push(this.ptr);
                this.ptr = this.ptr.left;
            }
        }
    }
    hasNext() {
        return this.stack.length;
    }
    next() {
        this.ptr = this.stack.pop();
        const val = this.ptr.val;
        this.ptr = this.ptr.right;
        this.inorder();
        return val;
    }
}





















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
 */

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */