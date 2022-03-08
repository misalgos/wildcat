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
        /*Boundaries
            To get the left side of each array, the index has to at least 
            be greater than 0 because we need an element to the immediate left of the midpoint.
            Otherwise, the left side will be set to negative infinity because in the following 
            comparisons, any number will be evaluated as greater than '-Infinity', which really represents
            any theoretical number that might come before the left-most element in the array. 
            
            To get the right side of each array, the index has to be less than the length of the array
            because the right side is going to be set to the midpoint of that array. Otherwise, it will 
            be set to infinity, which represents all of the numbers that theoretically come after the last
            one in the array.
        */
        //numsA's left and right boundaries
        const leftA = midA === 0 ? -Infinity : numsA[midA-1];
        const rightA = midA === numsA.length ? Infinity : numsA[midA];
        const leftB = midB === 0 ? -Infinity : numsB[midB-1];
        const rightB = midB === numsB.length ?   Infinity : numsB[midB];
        /*We then check if the arrays were partitioned in a way were the left and right elements of both arrays
        are on the same side or within the same boundaries. This means that the left side of any array cannot
        surpass the right side of the other. If it did, that would mean that they overlapped, and we need to move either 
        the right boundary back or the left boundary forward. If the left number in array A is larger than the right number 
        in array B, it is the right boundary that needs to be brought back because the number in array A is already 
        currently the left-most number in it's array, while the fact that we are comparing it to array B's right means that there 
        is an element left to it, which means we can decrement the right index (???)... and the same logic would apply vice versa.
        */
        if (leftA <= rightB && leftB <= rightA) {
            if ((numsA.length + numsB.length) % 2 === 0) {
                /*If the total number of elements is even, among the two arrays, take their right-most left element and left-most right element
                    [leftA, rightA]->((rightMostLeft + leftMostRight)/2) <- [leftB, rightB]
                    e.g.... merged = [leftA, leftB, rightA, rightB], median = (leftB + rightA) / 2
                */
                   return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
            } else {
                /*If it's odd, return the largest left among both arrays because one of the lefts is at the midpoint and one is at midpoint-1 of
                the merged arrays*/
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