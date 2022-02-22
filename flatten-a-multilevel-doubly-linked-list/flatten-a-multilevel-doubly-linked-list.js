/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let current = head;
    while(current) {
        if(current.child) {
            current.child.prev = current;
            let tail = findTail(current.child);
            tail.next = current.next;
            if(current.next) current.next.prev = tail;
            current.next = current.child;
            current.child = null;
        }
        current = current.next;
    }
    return head;
};

function findTail(head) {
    let current = head;
    while(current.next) {
        current = current.next;
    }
    return current;
}
