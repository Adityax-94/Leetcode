/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let count = 0
    let str = ""
    let char = strs[0]
    flag = 0

    if (strs.includes("")) {
        return ""
    }
    else if (strs.length == 1) {
        return strs[0]
    }

    else {
        for (let i = 0; i < char.length; i++) {

            for (let j = 0; j < strs.length; j++) {
                if (typeof(strs[j][i]) === "undefined"||char[i] != strs[j][i]) {
                    flag = 1
                    break
                }

            }
            if (flag == 0) {
                str = str + char[i]
            }
            if (flag == 1) {
                break
            }
        }


        return str
    }

};