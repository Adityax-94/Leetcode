/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let sign=0
    let op=""
    num=x.toString()
    // console.log(num)
    for (let i=num.length-1;i>=0;i--)
    {
        if(num[i]=="-")
        {
            sign=1
        }else{
        op=op+num[i]
        }
    }
    //  console.log(op)
    

    if(sign==1){

        num1= +op
        // console.log(num1)
         if (num1 < -(2**31) || num1 > (2**31 - 1)) {
        return 0
    }
        return num1- (num1*2)
    
    }else{
        num1=+op
         if (num1 < -(2**31) || num1 > (2**31 - 1)) {
        return 0
    }
            return num1
    }
}

