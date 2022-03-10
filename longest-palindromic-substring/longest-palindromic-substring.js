/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (len < (right - left + 1)) {
                longest = s.substring(left, right+1);
                len = right - left + 1;
            }
            left--;
            right++;
        }
        left = i, right = i+1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (len < (right - left + 1)) {
                longest = s.substring(left, right+1);
                len = right - left + 1;
            }
            left--;
            right++;
        }
    }
    return longest;
};