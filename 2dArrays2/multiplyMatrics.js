let a = [
    [1, 2, 3],
    [1, 2, 1],
    [1, 1, 2],
];
let b = [
    [2,2],
    [3,3],
    [4,4],
];

let r1 = a.length;
let c1 = a[0].length;

let r2 = b.length;
let c2 = b[0].length;

let res = []; //r1 x c2

for (let i = 0; i < r1; i++) {
    let temp = new Array(c2);
    for(let j = 0;j<c2;j++) temp[j] = 0;
    res.push(temp);
}

for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
        for (let k = 0; k < c1; k++) {
            res[i][j] += a[i][k] * b[k][j];
        }
    }
}

console.log(res);