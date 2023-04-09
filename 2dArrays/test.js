let a = [1,2,3,4,1,2,3,4,1,23,4,51,2,3,4,12,3,45,1,2,3]

let res = new Array(101).fill(0);

for(let i = 0;i<a.length;i++){
    let val = a[i];
    res[val]++;
}

for(let i = 1;i<101;i++){
    console.log(i,res[i]);
}