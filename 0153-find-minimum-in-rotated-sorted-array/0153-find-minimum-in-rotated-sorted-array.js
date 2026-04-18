/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let min=nums[0], i=0
    while(i<nums.length)
    {
        if(nums[i]<=min)
        {
            min=nums[i]
        }
         i++
    }
   
    return min
};