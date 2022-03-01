/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.map((i)=> i[0]).sort((a,b)=> a - b);
    const ends = intervals.map((i)=> i[1]).sort((a,b)=> a - b);
    const n = intervals.length;
    let rooms = n;
    let i = 0, j = 0;
    while(i < n && j < n) {
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