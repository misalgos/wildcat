/*
                [Bucket Sort Solution]
    Overview: 
    We'll use an array, 'buckets' whose indices represent the frequencies of each
    individual character. Instead of making 'buckets' be the length of the entire string, 
    we only need to make it the length of the highest char frequency + 1 in order to
    make sure that we only use the amount of space needed.

    1. While making a frequency hash-map, keep a running max variable to determine the length 
    of the buckets array.
    2. Create the (nested) buckets array of length max + 1, because the indices represent character repetitions. 
    3. Loop through the hash-map and push each of its characters in the index that is the
    same as its frequency. Characters with the same frequencies will be in the same
    inner array.
    *Key thing to remember: The character that is repeated the most will have its own index because we
    made an array of that size. Also note that if the input was a string like 'apppppppppppp', (a*1 and p*12). 
    the array would consist of (12 + 1) indices as well despite the fact that there are only 2 letters
    and despite the fact that only index 1 and 12 would be the only indices filled up with a character.
    4. Loop through the buckets array, and since the indices are already in ascending order, this loop 
    must be from right to left on the buckets array. We can either use a String.repeat(i) function for each element of the array at buckets[i] or...
    For each of them, run a for loop (j-i) and concatenate each buckets[i] element at each iteration j.
    5. Finally return the result string.
    
The time complexity of this algorithm is O(N) where n is the length of the input string.
The space complexity is O(N) where n is the length of the string, because though 
not all of the letters of every input string may be hashed, it may be the case for some input strings where
all (or near all) of the letters are unique, making the worst case scenario O(N).
*/

var frequencySort = function(s) {
    const freqs = new Map();
    let maxFreq = 0;
    for (const c of s) {
        freqs.set(c, freqs.get(c)+1 || 1);
        maxFreq = Math.max(maxFreq, freqs.get(c));
    }
    const buckets = new Array(maxFreq + 1).fill(0).map(_ =>[]);
    for (const [c, count] of freqs) {
        buckets[count].push(c);
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