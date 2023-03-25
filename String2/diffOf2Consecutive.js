let s = "abacC";

function solution(s) {
    let ans = "";
    ans += s[0];
    let i = 1;

    while (i < s.length) {
        let asciiI = s.charCodeAt(i);
        let asciiIm1 = s.charCodeAt(i - 1);
        let asciiDiff = asciiI - asciiIm1;
        ans+=asciiDiff + s[i];
        i++;
    }
    return ans;
}

console.log(solution(s));
