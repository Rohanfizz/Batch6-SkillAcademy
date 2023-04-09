let n = 3;
let m = 3;

function printPaths(n,m,i,j,psf){
    if(i == n && j == m){
        console.log(psf);
        return 1;
    }
    if(i > n || j>m){
        return 0;
    }

    //horizontal
    // the number of paths im able to get if i make a horizontal move now
    let countHori = printPaths(n,m,i,j+1,psf+"h");
    //vertical
    let countVerti = printPaths(n,m,i+1,j,psf+"v");
    return countHori + countVerti;
}

let totalCount = printPaths(n,m,1,1,"");
console.log(totalCount);