/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

   a=s.split(" ")
   z=a.length-1
   while(true){ 
   if(a[z]!= ""){
    break
   }
   z--
   }
   return a[z].length
};