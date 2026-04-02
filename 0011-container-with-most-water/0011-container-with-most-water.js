/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let area=0
    
    let farea=0

  for(let i=0,j=height.length-1 ;i<j;){

        let sm=Math.min(height[i],height[j])
        area=sm*(j-i)

        if(farea< area)
        {
            farea=area
        
        }
        if(height[i]==sm){
            i++
        }else{
            j--
        }

    
  }
 return farea
};