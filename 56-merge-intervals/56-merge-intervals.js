/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //Sort the intervals by their starting times.
    intervals = intervals.sort((a,b)=> a[0] - b[0]);
    /*For every interval 'i' that is after the first evaluate whether it's start time
    is before or after the previous interval's end time (the previous interval is the last element in the result array in this case). If current one's start time is before the 
    previous one ends, it overlaps, and instead of pushing it into the result array, update
    the end time of the last element in the result array to be the end time of the current 
    interval or leave the end time of the previous the same if its end time goes past the end time of the   current.
    Otherwise, either the interval is the first, having no previous one to overlap with, or
    the interval starts when or after the previous one finishes. Push it into the result array
    because it's starting point will be needed should any subsequent intervals start before this 
    current one finishes, ect.
    */
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= merged[merged.length-1][1]) {
            merged[merged.length-1][1] = Math.max(intervals[i][1], merged[merged.length-1][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    return merged;
};