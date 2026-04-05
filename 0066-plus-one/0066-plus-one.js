/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    carry=1
    for (i=digits.length-1;i>=0;i--)
    {
        if(digits[i]!=9)
        {
            digits[i]=digits[i]+carry
            break
        }
        else{
            if(i==0){
                digits.splice(i,1)
                digits.unshift(1,0)
            }else{

            digits[i]=0
        
            }
        }

    }  
    return digits  
    
    
};