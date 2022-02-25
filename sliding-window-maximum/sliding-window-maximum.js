/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const ans = [];
    const heap = new MaxPriorityQueue();
    for(let i = 0; i < nums.length; i++) {
        /*Remove the elements worth removing that are in the front; those that are the highest, but are also               located in indices before the current window (they would impact our evaluation of what the current               highest is.*/
        while(heap.size() && heap.front().element <= i-k) {
            heap.dequeue();
        } 
        heap.enqueue(i, nums[i]) // Enqueue the index and the current number 
        if(i >= k-1) {
            ans.push(heap.front().priority);
        }
    }
    return ans;
};