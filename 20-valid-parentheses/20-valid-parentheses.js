/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const comps  = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    const stack = [];
    for(const c of s) {
        if(comps.has(c)) {
            stack.push(c);
        } else if(c !== comps.get(stack.pop())) {
            return false;
        }
    }
    return !stack.length;
};