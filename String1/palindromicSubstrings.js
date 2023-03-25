let s = "abbacxtcabba";
function isPalindrome(s){
    let i = 0;
    let j = s.length-1;
    while(i<j){
        if(s[i] != s[j]) return false;
        i++;
        j--;
    }
    return true;
}
for(let sp = 0;sp<s.length;sp++){
    for(let ep = sp;ep<s.length;ep++){
        let substring = s.substring(sp,ep+1);
        if(isPalindrome(substring)){
            console.log(substring);
        }
    }
}