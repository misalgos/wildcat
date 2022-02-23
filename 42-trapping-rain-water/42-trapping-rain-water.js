/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const stack = [];
    let result = 0;
    for(let i = 0; i < height.length; i++) {
        while(stack.length && height[i] > height[stack[stack.length-1]]) {
            const idx = stack.pop();
            if(!stack.length) break;
            const sectionWidth = i - stack[stack.length-1] - 1;
            const sectionHeight = Math.min(height[i], height[stack[stack.length-1]]) - height[idx];
            result += sectionWidth * sectionHeight;
        }
        stack.push(i);
    }
    return result;
};