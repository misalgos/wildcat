/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    let left = 0, right = nums1.length;
    while(left <= right) {
        let mid1 = Math.floor((left+right)/2);
        let mid2 = Math.floor((nums1.length + nums2.length + 1) / 2) - mid1;
        //Boundaries
        let nums1Left = mid1 == 0 ? -Infinity : nums1[mid1 - 1];
        let nums1Right = mid1 == nums1.length ? Infinity : nums1[mid1];
        let nums2Left = mid2 == 0 ? -Infinity : nums2[mid2 - 1];
        let nums2Right = mid2 == nums2.length ? Infinity : nums2[mid2];
        if(nums1Left <= nums2Right && nums2Left <= nums1Right) { 
            if((nums1.length + nums2.length) % 2 === 0) {
                return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right))/2;
            } else {
            //
                return Math.max(nums1Left, nums2Left);
            }
        }
        
        if(nums1Left > nums2Right) {
            right = mid1 - 1;
        } else {
            left = mid1 + 1;
        }
    }
};