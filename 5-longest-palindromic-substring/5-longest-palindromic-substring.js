/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    let longest = '';
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        /*When evaluating odd palindromes, start at the center point 'i' and expand outwards until the left and right pointer exceed the string boundaries, comparing every left and right character .*/
        let left = i;
        let right = i;
        while (left >= 0 && right < n && s[left] === s[right]) {
            if ((right - left + 1) > len ) {
                longest = s.substring(left, right+1);
                len = right - left + 1;
            }
            left--;
            right++;
        }
        
        /*When evaluating even palindromes, start at the two centers, 'i' and 'i'+ 1 and expand outwards  until the pointers reach the end of the string boundaries, comparing every left and right character.*/
        left = i;
        right = i + 1;
        while (left >= 0 && right < n && s[left] === s[right]) {
            if ((right - left + 1) > len) {
                longest = s.substring(left, right + 1);
                len = right - left + 1;
            } 
            left--;
            right++;
        }
    }
    return longest;
};