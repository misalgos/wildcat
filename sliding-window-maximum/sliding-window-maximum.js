/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const heap = new MaxPriorityQueue();
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        while(!heap.isEmpty() && heap.front().element <= i - k) {
            //Remove max values that aren't within the current window (i-k+1).
            heap.dequeue();
        }
        //Enqueue the current number and index into the heap which will heap sort it in O(log(n)) time.
        //Each heap node will contain both the index and number, but will be sorted by number descendingly.
        heap.enqueue(i, nums[i]);
        //Whenever 'i' becomes greater than or equal to k-1, it means that a window of size k has been visited.
        //Every subsequent iteration will have at least k-1 elements before it, completing the window size.
        //And for every window of size k, push the number at the front of the heap, which is the max number.
        if(i >= k - 1) result.push(heap.front().priority);
    }
    return result;
};