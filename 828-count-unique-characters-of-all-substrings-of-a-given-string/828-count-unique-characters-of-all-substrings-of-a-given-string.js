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
        const prevContr = contr.has(c) ? contr.get(c) : 0;
        const newContr = i + 1 - (lastPos.has(c) ? lastPos.get(c) + 1 : 0);
        
        currUniques = currUniques - prevContr + newContr
        
        contr.set(c, newContr);
        lastPos.set(c, i);
        
        result += currUniques;
    }
    return result;
};