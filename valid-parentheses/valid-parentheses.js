/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let comp = new Map([['(',')'], ['[', ']'], ['{', '}']]);
    for(const c of s) {
        if(comp.has(c)) {
            stack.push(c);
        } else  {
            if(c !== comp.get(stack.pop())) {
                return false;
            }
        }
    }
    return !stack.length;
};