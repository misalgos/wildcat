/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let rooms = 0;
    intervals = intervals.sort((a,b)=> a[0] - b[0]);
    for(let i = 0; i < intervals.length; i++) {
    /*For all of the meetings, we want to figure out if the ones that started before the current have
    ended before the current one started. To verify this, we will compare the end times of meeting 'j' 
    from the end times of the first meeting until the current meeting 'i' 
    i.e. (0-'i' where meeting[j][1] <= meeting[i][0]). A flag boolean variable keeping track of this
    so that when a meeting 'j' ended before the start of meeting 'i', we set the flag to true and break.
    After the break, if the condition was NOT met, we increment the room count by one.
    The reason why the search for meetings 'j' that ended before the start of meeting 'i' ends here is 
    because we are concerned with finding a meeting that ended before or when the current one starts so
    that we can determine whether we need another room or not and increment the room count if we do need
    one. 
    
    Intuitively, this algorithm works similarly to the way a human would keep track of which meetings
    are currently in session and which ones have ended to determine if a previously used room is freed 
    up, or if we have to use an entirely new room altogether. The determinations in real time, in the 
    that every meeting will commence. For every meeting that's about to start, one would check if any of
    the rooms that were being used are freed up so that the meeting can take place there instead of having 
    to get an additional room thus adding to the total amount of rooms that have to be used.
    
    For more information: 
    https://en.wikipedia.org/wiki/Interval_scheduling
    */
        let isFreed = false;
        for(let j = 0; j < i; j++) {
            if(intervals[j][0] !== -1 && intervals[j][1] !== -1 && intervals[j][1]  <= intervals[i][0]) {
                intervals[j][1] = -1;
                intervals[j][0] = -1; 
                isFreed = true;
                break;
            }
        }
        if(!isFreed) rooms++; //If none of the previously  booked rooms were freed increase the room count.
    }
    return rooms;
}; 