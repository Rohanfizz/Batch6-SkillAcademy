function spirallyTraverse(a, r, c) {
    let res = [];
    let lw = 0;
    let tw = 0;
    let bw = a.length - 1;
    let rw = a[0].length - 1;

    let total = r * c;

    while (total > 0) {
        //top wall
        for (let j = lw; j <= rw && total > 0; j++) {
            res.push(a[tw][j]);
            total--;
        }
        tw++;

        //right wall
        for (let i = tw; i <= bw && total > 0; i++) {
            res.push(a[i][rw]);
            total--;
        }
        rw--;

        //bottom wall
        for (let j = rw; j >= lw && total > 0; j--) {
            res.push(a[bw][j]);
            total--;
        }
        bw--;

        //left wall
        for (let i = bw; i >= tw && total > 0; i--) {
            res.push(a[i][lw]);
            total--;
        }
        lw++;
    }
    return res;
}

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let r = a.length;
let c = a[0].length;
spirallyTraverse(a,r,c);