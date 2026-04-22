/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let sum=0
    let tsum=0
    
    let i
    for(i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
        tsum=tsum+i
    }
    tsum=tsum+i
    return tsum-sum
};