/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let j=1

    for (i=0;j<nums.length;j++){



        if(nums[j]!=nums[i]){
            nums[i+1]=nums[j]
            i++
        }
    }
    return i+1
    
};