/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    let currUniques = 0;
    let lastPos = new Map();
    let contr = new Map();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        /*
            prevContr - the last index in which the 'contribution' of the current letter was found.
            
            newContr - the index of the current letter plus one minus the last position in which it was seen
            (this is similar to the 'end - start + 1')
        */
        const prevContr = contr.has(c) ? contr.get(c) : 0;
        const newContr = i - (lastPos.has(c) ? lastPos.get(c) + 1 : 0) + 1;
        
        currUniques = currUniques - prevContr + newContr
        
        contr.set(c, newContr);
        lastPos.set(c, i);
        
        result += currUniques;
    }
    return result;
};