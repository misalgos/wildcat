/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const stack = [];
    let result = 0;
    for(let i = 0; i < height.length; i++) {
        while(stack.length && height[stack[stack.length-1]] < height[i]) {
            const idx = stack.pop();
            if(!stack.length) break;
            const currentWidth = i - stack[stack.length-1] - 1;
            const currentHeight = Math.min(height[i], height[stack[stack.length-1]]) - height[idx];
            result += currentHeight * currentWidth;
        }
        stack.push(i);
    }
    return result;
};