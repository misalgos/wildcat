/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(!intervals.length) return 0;
    intervals = intervals.sort((a,b)=> a[0] - b[0]); 
    const queue = new MinPriorityQueue();
    queue.enqueue(intervals[0][1]);
    for(let i = 1; i < intervals.length; i++) {
        if(queue.front().element <= intervals[i][0]) queue.dequeue();
        queue.enqueue(intervals[i][1]);
    }
    return queue.size();
};