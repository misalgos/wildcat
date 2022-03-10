/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let prevSum = maxSum;
    for (let i = 1; i < nums.length; i++) {
        prevSum = Math.max(prevSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, prevSum);
    }
    return maxSum;
};