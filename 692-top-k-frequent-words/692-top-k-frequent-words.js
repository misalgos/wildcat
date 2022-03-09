/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freqs = new Map();
    let maxRep = 0;
    for (const w of words) {
        freqs.set(w, freqs.get(w) + 1 || 1);
        maxRep = Math.max(maxRep, freqs.get(w));
    }
    const buckets = new Array(maxRep + 1).fill(0).map((_)=> []);
    for (const [c, rep] of freqs) {
        buckets[rep].push(c);
    }
    const topK = [];
    let curr = buckets.length-1;
    while (topK.length < k) {
        buckets[curr].sort();
        for (const w of buckets[curr]) {
            topK.push(w);
            if (topK.length === k) {
                break;
            }
        }
        curr--;
    }
    return topK;
};