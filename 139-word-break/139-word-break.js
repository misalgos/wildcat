/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length+1).fill(false);
    dp[s.length] = true;
    for (let i = s.length-1; i >= 0; i--) {
        for (const w of wordDict) {
        /*If a word in the dictionary fits in the string from this index forward,
        And if that substring matches the dictionary word... */
            if ((i + w.length) <= s.length && w === s.substring(i, i+w.length)) {
                dp[i] = dp[i + w.length];
            }
            if (dp[i]) {
                break;
            }
        }
    }
    return dp[0];
};