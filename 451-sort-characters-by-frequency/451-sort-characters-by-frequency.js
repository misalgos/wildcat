/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const chars = new Map();
    for (const c of s) {
        chars.set(c, chars.get(c)+1 || 1);
    }
    return [...chars].sort((a,b)=> b[1] - a[1]).map((c)=> c[0].repeat(c[1])).join('');
};