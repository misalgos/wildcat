class BSTIterator {
    constructor(root) {
        this.root = root;
        this.ptr = this.root;
        this.stack = [];
        this._inorder();
    }
    _inorder() {
        while (this.ptr) {
            this.stack.push(this.ptr);
            this.ptr = this.ptr.left;
        }
    }
    hasNext() {
        return this.stack.length;
    }
    next() {
        const nextNode = this.stack.pop();
        this.ptr = nextNode.right;
        this._inorder();
        return nextNode.val;
    }
}