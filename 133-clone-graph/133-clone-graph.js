/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;
    const map  = new Map([[node, new Node(node.val)]]);
    let q = [node];
    while(q.length) {
        const v = q.shift();
        v.neighbors.forEach((n, i)=> {
            if(!map.has(n)) {
                map.set(n, new Node(n.val));
                q.push(n);
            }
            map.get(v).neighbors.push(map.get(n));
        });
    }
    return map.get(node);
};