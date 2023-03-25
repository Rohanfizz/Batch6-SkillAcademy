let s = "aabbbbcddeee";

function compress(s){
    let ans = "";
    let i = 0;
    while(i<s.length){
        let count = 0;
        let j = i;
        while(j<s.length && s[i] == s[j]){
            count++,j++;
        }
        if(count == 1){
            ans += s[i];
        }else{
            ans += s[i] + count;
        }
        i+=count;
    }
    return ans;
}
console.log(compress(s));