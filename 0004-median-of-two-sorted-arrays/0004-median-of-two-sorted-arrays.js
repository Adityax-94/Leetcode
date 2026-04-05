/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    nums3 = [...nums1, ...nums2];
    sum = 0
    nums3.sort((a, b) => a - b)

    if (nums3.length % 2 != 0) {

        return nums3[Math.floor((nums3.length / 2))]

    } else {
        return (nums3[(nums3.length / 2)-1] + nums3[(nums3.length / 2)]) / 2
    }

    
    
};