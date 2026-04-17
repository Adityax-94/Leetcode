/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let num=x.toString()
    let temp=num.split("")
    let arr=num.split("")
    arr.reverse()

    for(let i=0;i<arr.length;i++)
    {
    if(arr[i]!=temp[i])
    {
        return false
    }
    
    }
    return true
};