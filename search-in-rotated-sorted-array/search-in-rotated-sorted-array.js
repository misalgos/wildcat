/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length;
    if (n === 0) {
        return -1;
    }
    let left = 0, right = n-1, first = nums[0];
    while (left <= right) {
        const mid = Math.floor(left + (right-left) /2);
        const val = nums[mid];
        if (val === target) {
            return mid;
        }
        const valAsc = val >= first;
        const targetAsc = target >= first;
        if (valAsc ^ targetAsc) {
            if (valAsc) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (val < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};