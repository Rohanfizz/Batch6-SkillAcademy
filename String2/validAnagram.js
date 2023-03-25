/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let freqS = []
    let freqT = []

    for(let i = 1;i<=26;i++){
        freqS.push(0);
        freqT.push(0);
    }

    for(let i = 0;i<s.length;i++){
        let ascii = s.charCodeAt(i);
        freqS[ascii-97]++;
    }

    for(let i = 0;i<t.length;i++){
        let ascii = t.charCodeAt(i);
        freqT[ascii-97]++;
    }

    for(let i = 0;i<26;i++){
        if(freqS[i] != freqT[i]) return false;
    }
    return true;

};