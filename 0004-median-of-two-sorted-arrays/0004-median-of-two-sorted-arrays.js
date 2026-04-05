/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    nums3 = [...nums1, ...nums2];
    sum = 0
    nums3.sort((a, b) => a - b)

    const n = nums3.length;
    return n % 2 === 0
        ? (nums3[n / 2 - 1] + nums3[n / 2]) / 2
        : nums3[Math.floor(n / 2)];



};