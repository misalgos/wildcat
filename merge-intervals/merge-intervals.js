/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=> a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= merged[merged.length-1][1]) {
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], intervals[i][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    return merged;
};