/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length; 
    if (n === 0) {
        return 0;
    }
    //The overal max sum for input read so far - the output we need.
    let maxSum = nums[0];
    //The max sum for the sequence ending in the last element of the input read so far
    let prevMax = nums[0]
    for (let i = 1; i < n; i++) {
        if (prevMax + nums[i] < nums[i]) {
            prevMax = nums[i];
        } else {
            prevMax += nums[i];
        }
        maxSum = Math.max(maxSum, prevMax);
    }
    return maxSum;
};


/*Optimal Approach



The loop invariant maintains the maxSum and the maxSumWithCurrElement 
and the maximum sum wil at all times be the greatest of all the maximum sums ending in the last element of input prefixes.
Basically, in each iteration there is a basic relationship between the maxSum and the maxSum + nums[i], 
and the task is to maintain this relationship for the duration of the loop.


If the current number plus the sum of the numbers before it decreases the value of the current number,
the new previous sum should be equal to the current number only because those other numbers are holding it 
back.


msLast <= 0 => msLast = A[i]
msLast > 0 => msLast = msLast + A[i]
*/