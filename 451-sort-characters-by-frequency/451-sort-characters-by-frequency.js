/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const chars = new Map();
    for (const c of s) {
        chars.set(c, chars.get(c)+1 || 1);
    }
    const heap = new MaxPriorityQueue();
    for (const [c, count] of chars) {
        heap.enqueue(c, count);
    }
    let sortedStr = '';
    while (!heap.isEmpty()) {
        sortedStr += heap.front().element.repeat(heap.front().priority);
        heap.dequeue();
    }
    return sortedStr;
};