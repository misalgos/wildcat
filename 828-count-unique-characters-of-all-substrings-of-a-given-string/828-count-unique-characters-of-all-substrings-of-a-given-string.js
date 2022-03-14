/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    let currUniques = 0;
    let lastPos = new Map(); //last seen position
    let contr = new Map();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        /*
            prevContr = the last window size between the previous two occurences of the current letter.
            
            newContr = the index of the current letter minus the last position in which it was last seen plus one. 
            (this is similar to the 'end - start + 1', because it is a measurement of the window size of each letter's occurrence),
            
            currUniques = 
            
            
            
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