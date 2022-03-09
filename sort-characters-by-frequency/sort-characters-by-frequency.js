/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {   
    const freqs = new Map();
    let maxRep = 0;
    for (const c of s) {
        freqs.set(c, freqs.get(c)+1 || 1);
        maxRep = Math.max(maxRep,freqs.get(c));
    }
    const buckets = new Array(maxRep+1).fill(0).map((_)=> []);
    for (const [c, reps] of freqs) {
        buckets[reps].push(c);
    }
    let result = '';
    for (let i = buckets.length-1; i >= 1; i--) {
        for (const c of buckets[i]) {
            for (let j = 0; j < i; j++) {
                result += c;
            }
        }
    }
    return result;
};