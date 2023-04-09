let n = 4;
let m = 3;

function printPaths(n,m,i,j,psf){
    if(i == n && j == m){
        console.log(psf);
        return;
    }
    if(i > n || j>m){
        return;
    }

    //horizontal
    printPaths(n,m,i,j+1,psf+"h");
    //vertical
    printPaths(n,m,i+1,j,psf+"v");
}

printPaths(n,m,1,1,"");