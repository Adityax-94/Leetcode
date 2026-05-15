/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let large,small
    let nums3=[]
    if(nums1.length>nums2.length)
    {
        large=nums1
        small=nums2
    }else{
        large=nums2
        small=nums1
    }
    for (let i=0;i<small.length;i++)
    {
        if(large.includes(small[i]) && !nums3.includes(small[i]))
        {
            nums3.push(small[i])
        }

    }
    return nums3
};