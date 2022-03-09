/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=> a[0] - b[0]);
    const sorted = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= sorted[sorted.length-1][1]) {
            sorted[sorted.length-1][1] = Math.max(intervals[i][1], sorted[sorted.length-1][1]);
        } else {
            sorted.push(intervals[i]);
        }
    }
    return sorted;
};