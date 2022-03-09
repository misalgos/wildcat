/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const charCount = new Map();
    for (const c of s) {
        charCount.set(c, charCount.get(c) + 1 || 1);
    }
    return [...charCount].sort((a,b)=> b[1] - a[1]).map((c)=> c[0].repeat(c[1])).join('');
};