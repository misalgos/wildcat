/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    let uniques = 0;
    let result = 0;
    const startsAt = new Map();
    const windows = new Map();
    for (let end = 0; end < s.length; end++) {
        const c = s[end];
        const prevWindow = windows.has(c) ? windows.get(c) : 0;
        const start = (startsAt.has(c) ? startsAt.get(c) + 1 : 0);
        const currWindow = end - start + 1;
        
        uniques = uniques - prevWindow + currWindow;
        windows.set(c, currWindow);
        startsAt.set(c, end);
        result += uniques;
    }
    return result;
};