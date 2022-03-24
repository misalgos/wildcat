/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const indeces = new Map();
    let start = 0;
    let maxLen = 0;
    for (let end = 0; end < s.length; end++) {
        const c = s[end];
        if (indeces.get(c) >= start) {
            start = indeces.get(c) + 1;
        }
        maxLen = Math.max(maxLen, end - start + 1);
        indeces.set(c, end);
    }
    return maxLen;
};


/*
Initialize: 
maxLen number, hashmap {char : lastSeenIndex}




a b c a b c b b
          s
               e

b b b b b
   i

What if the start is after the last occurence of the current char plus 1?


What if the current character is in the hashmap, but the start was updated
to be past the index after it's last occurrence? 

What if the current character is in the hashmap, but it's not actually in the current substring?

If the current character's last occurrence's index is equal to or after the start

If the current character's last occurrence happened within the current window

If the current character's last occurence was at or after the current start

If the current start comes after the last occurence of the current character

If the current character's last occurence is not before the start 


0   1   2   3   4   5   6   7 
a   b   b   a
        s
            e


p w b c w k e w 
         s
              e
    
    
"" 0     
*/