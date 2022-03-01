/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const stack = [];
    let area = 0; 
    for(let i = 0; i < height.length; i++) {
        while(stack.length && height[stack[stack.length-1]] < height[i]) {
            const wallIdx = stack.pop();
            if(!stack.length) break;
            const currWidth = i - stack[stack.length-1] - 1;
            const currHeight = Math.min(height[stack[stack.length-1]], height[i]) - height[wallIdx];
            area += currWidth * currHeight;
        }
        stack.push(i);
    }
    return area;
};