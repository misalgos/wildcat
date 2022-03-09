/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freqs = new Map();
    let maxReps = 0;
    words.forEach( w => {
        freqs.set(w, freqs.get(w)+1 || 1);
        maxReps = Math.max(maxReps, freqs.get(w));
    });
    const buckets = new Array(maxReps+1).fill(0).map(_=> []);
    for(const [c, reps] of freqs) {
        buckets[reps].push(c);
    }
    const topK = [];
    let curr = buckets.length-1;
    while(topK.length < k) {
        buckets[curr].sort(); //sorts words with these amount of reps lexicographically.
        for (const w of buckets[curr]) {
            topK.push(w);
            if (topK.length === k) {
                break;
            }
        }
        curr --;
    }
    return topK;
};