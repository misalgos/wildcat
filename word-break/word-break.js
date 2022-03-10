/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = new Array(n+1).fill(false);
    dp[n] = true;
    for (let i = s.length-1; i >= 0; i--) {
        for (const w of wordDict) {
            if ((i + w.length) <= n && w === s.substring(i, i+w.length)) {
                dp[i] = dp[i+w.length];
            }
            if (dp[i]) {
                break;
            }
        }
    }
    return dp[0];
};