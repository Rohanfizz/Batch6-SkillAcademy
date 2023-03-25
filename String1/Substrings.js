let s = "abcdac";

for(let sp = 0;sp<s.length;sp++){
    for(let ep = sp;ep<s.length;ep++){
        console.log(s.substring(sp,ep+1));
    }
}