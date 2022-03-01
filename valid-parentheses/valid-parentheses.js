/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack  = [];
    const comps = new Map([
        "{}".split(''),
        "()".split(''),
        "[]".split(''),
    ]);
    for(const c of s) {
        if(comps.get(c)) {
            stack.push(c);
        } else if(c !== comps.get(stack.pop())) {
            return false;
        }
    }
    return !stack.length;
};