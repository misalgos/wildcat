/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let events = [];
    for(const [start, end] of intervals) {
        events.push([start, 0]);
        events.push([end - 0.1, 1]);
     
    }
    events = events.sort((a,b)=> a[0]-b[0]);
    let result = 0;
    const stack = [];
    for(const [event, type] of events) {
        if(type === 1) {
            stack.push('#');
            result = Math.max(result, stack.length);
        } else {
            stack.pop();
        }
    }
    return result;
};