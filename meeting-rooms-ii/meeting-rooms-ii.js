/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals = intervals.sort((a,b)=> a[0] - b[0]);
    let size = intervals.length;
    let rooms = 0;
    let k = 0;
    while(true) {
        k = 0;
        //If the kth interval has already been processed, move to the next one.
        while(k < size && intervals[k][0] === -Infinity) k++;
        //Be sure to break out if k has reached the end.        
        if(k === size) break;
        intervals[k][0] = -Infinity;
        let currEnd = intervals[k][1];
        for(let i = k; i < size; i++) {
            /*Skip over any visited intervals*/
            if(intervals[i][0] === -Infinity) continue;
            /*If the current interval's end is before the 'i'th interval*/
            if(currEnd <= intervals[i][0]) {
                intervals[i][0] = -Infinity;
                currEnd = intervals[i][1];
            }
        }
        rooms++;
    }  
    return rooms;
};