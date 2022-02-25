/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(m => m[0]).sort((a,b)=> a - b);
    const ends = intervals.map(m => m[1]).sort((a,b)=> a - b);
    let rooms = intervals.length;
    let i = 0, j = 0;
    while(i < starts.length && j < ends.length) {
        if(starts[i] < ends[j]) {
            i++;
        } else {
            i++;
            j++;
            rooms--;
        }
    }
    return rooms;
};