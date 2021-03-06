/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const heap = new MaxPriorityQueue();
    const ans = [];
    for(let i = 0; i < nums.length; i++) {
        while(heap.size() && heap.front().element <= i-k) {
            heap.dequeue();
        }
        heap.enqueue(i, nums[i]);
        if(i >= k-1) {
            ans.push(heap.front().priority);
        }
    }
    return ans;
};