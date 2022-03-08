/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length; 
    if(n === 0) {
        return -1;
    }
    let left = 0;
    let right = n - 1;
    let first = nums[0];
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let value = nums[mid];
        if(value === target) {
            return mid;
        }
    /*Have a boolean that determines whether the current middle element is greater than the 
    first element, which is useful to know to determine if we are at an index before the reset 
    would happen in the shifting of the array.
    Have another boolean to denoting if the target is greater than the first element so that 
    we can use it to determine if the target is not at an index at or after which the reset happened.
    */
        let valueAsc = value >= first;
        let targetAsc = target >= first;
        if (valueAsc === targetAsc) {
    /*If both the value and the target are in the same 'increasing-from-start-part', do a standard binary search
    boundary update... If the value is less than the target, increment the left otherwise, decrement the right.*/
            if (value < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
    /*Otherwise, either the value is in the 'increasing-from-start-part' or the target is, but not both.
    Check which one is in this ascending part so that we can determine which boundary to update. If the
    value is the one in the ascending portion, then we must search to the right of our window, where the reset  index will eventually be encountered to find the target value, so update the left side to be the index after the middle. 
    If the target is in the ascending portion of the array, it means that the search needs to be moved left of the current window to find this target value. Update the right to be the index before the midpoint.*/
            if (valueAsc) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};