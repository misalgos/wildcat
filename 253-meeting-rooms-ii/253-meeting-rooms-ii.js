/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0]);
    const heap = new MinPriorityQueue();
    heap.enqueue(intervals[0][1]);
    for (let i = 1; i < intervals.length; i++) {
        if (heap.front().element <= intervals[i][0]) {
            heap.dequeue();
        }
        heap.enqueue(intervals[i][1]);
    }
    return heap.size();//
};