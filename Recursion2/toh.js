function toh(n,s,d,h){
    if(n == 0) return;
    toh(n-1,s,h,d);
    console.log("Place "+n+" from "+s+" to "+d);
    toh(n-1,h,d,s);
}
toh(3,1,2,3);
