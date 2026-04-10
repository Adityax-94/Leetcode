/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  let arr = []
  const map = {
        '}': '{',
        ']': '[',
        ')': '('
    };

  for (let i = 0; i < s.length; i++)
  {

    if(s[i] === '{' || s[i] === '(' || s[i] === '[')
    {
        arr.push(s[i])
    }

    else if(s[i] === '}' || s[i] === ')' || s[i] === ']')
    {
        let a = arr.pop()

        if(a !== map[s[i]]) {
            return false
        }
    }
  }

  return arr.length === 0
};