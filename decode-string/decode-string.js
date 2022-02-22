/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const numStack = [];
    const seqStack = [''];
    for(let i = 0; i < s.length; i++)  {
        let c = s[i];
        if(!isNaN(Number(s[i]))) {
            while(!isNaN(Number(s[i+1]))) {
                c += s[i+1];
                i++;
            }
            numStack.push(c);
            continue;
        }
        if(c === '[') {
            seqStack.push('');
        } else if(c === ']') {
            const num = numStack.pop();
            const seq = seqStack.pop();
            seqStack[seqStack.length-1] += seq.repeat(num);
        } else {
            seqStack[seqStack.length-1] += c;
        }
    }
    return seqStack[0];
};