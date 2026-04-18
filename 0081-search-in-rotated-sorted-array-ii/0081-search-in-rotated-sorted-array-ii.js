/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    

        let i =0
        while(i<nums.length)
        {
            if(nums[i]==target)
            {
                return true
            }
            i++
        }
        return false

};