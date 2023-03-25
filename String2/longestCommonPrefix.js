/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = "";
    for(let i = 0;i<strs[0].length;i++){
        for(let j = 1;j<strs.length;j++){
            //stop and return on mismatch 
            if(i>=strs[j].length || strs[0][i] != strs[j][i]) return ans;
        }
        //if we are standing on this line of code
        // this means ith character was common in all the strings
        ans+=strs[0][i];
    }
    return ans;
};