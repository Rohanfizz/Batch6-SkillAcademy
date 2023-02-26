let n = 13445564;
let d = 5;

let cnt = 0;

while(n>0){
    if(d == n%10) cnt++;
    n = Math.floor(n/10);
}
console.log(cnt);