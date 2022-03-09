/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freqs = new Map();
    for (const num of nums) {
        freqs.set(num, freqs.get(num)+1 || 1);
    }
    const sorted = [...freqs].sort((a,b)=> a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]);
    const result = new Array(nums.length);
    let j = 0;
    for(let i = 0; i < result.length; i++) {
        /* Search each index 'i' to the char that 'j' currently points to.
        Every time this is done, decrement the frequency count of the char at j.
        If there are no more repetitions/freqs of the character at index 'j' of sorted, 
        increment the 'j' to point to the next character and repeat the process all over again
        until that number's instances are depleted as well.*/
        result[i] = sorted[j][0]; 
        sorted[j][1]--;
        if (sorted[j][1] === 0) {
            j++;
        }
    }
    return result;
};