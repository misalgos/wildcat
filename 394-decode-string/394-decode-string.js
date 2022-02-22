/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    /*Holds the number of appearances of  each sequence*/
    const numStack = [];
/*  - Holds the sequences we see aloing the way.
    - If we see '[', we start a new sequence
    - If we see ']', we end the latest sequence and add the result to the previous string,
      which holds the inside-sequence that we just calculated. */
    const seqStack = [''];
    for(let i = 0; i < s.length; i++) {
/*  - If we see a number we push the full number and continue. */
        let c = s[i];
        if(c >= 0 && c <=9) {
            while(s[i+1] >= 0 && s[i+1] <= 9) {
                c += s[i+1];
                i++;
            }
            numStack.push(c);
            continue;
        } 
/*      If we see '[', we start a new sequence. */
        if(c === '[') {
            seqStack.push('');
        } else if( c === ']') {
/*   - If we see ']', we take the latest number and multiply by the latest sequence and add that to the previous sequence. */
            const num = numStack.pop();
            const latestSeq = seqStack.pop();
            const seq = latestSeq.repeat(num);
            seqStack[seqStack.length-1] += seq;
        } else {
/*    - If we see a char, we add it to the latest sequence.    */
            seqStack[seqStack.length-1] += c;
        }
    }
    return seqStack[0];
};