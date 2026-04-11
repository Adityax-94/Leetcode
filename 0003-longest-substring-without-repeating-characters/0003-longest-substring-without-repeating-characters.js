/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let sub=s[0]
    let ls=""

    for (let i=0;i<s.length;i++)
    {
        if(!sub.includes(s[i]))
        {
         sub=sub+s[i]
        
        }else{
            a=sub.indexOf(s[i])
            sub=sub.slice(a+1)
            sub=sub+s[i]
        }
        if(ls.length<sub.length)
         {
            ls=sub
         }

    }
    return ls.length
    
};