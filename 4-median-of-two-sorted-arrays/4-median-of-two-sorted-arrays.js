/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(numsA, numsB) {
    if (numsA.length > numsB.length) {
        return findMedianSortedArrays(numsB, numsA);
    }
    let left = 0;
    let right = numsA.length;
    while (left <= right) {
        const midA = Math.floor((left + right) / 2);
        const midB = Math.floor((numsA.length + numsB.length + 1) / 2) - midA;
        //Boundaries
        const leftA = midA === 0 ? -Infinity : numsA[midA-1];
        const rightA = midA === numsA.length ? Infinity : numsA[midA];
        const leftB = midB === 0 ? -Infinity : numsB[midB-1];
        const rightB = midB === numsB.length ?   Infinity : numsB[midB];
        if (leftA <= rightB && leftB <= rightA) {
            if ((numsA.length + numsB.length) % 2 === 0) {
                return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
            } else {
                return Math.max(leftA, leftB);
            }
        }
        if (leftA > rightB) {
            right = midA - 1;
        } else {
            left = midA + 1; 
        }
    }
};