let target = 3;
//count of paths
function getStairPaths(target, currStair, psf) {
    //base
    if (currStair == target) {
        console.log(psf);
        return 1;
    }
    if (currStair > target) {
        return 0;
    }

    //if i make a jump of 1
    let oneJump = getStairPaths(target, currStair + 1, psf + "1");

    //if i make a jump of 2
    let twoJump = getStairPaths(target, currStair + 2, psf + "2");

    //if i make a jump of 3
    let threeJump = getStairPaths(target, currStair + 3, psf + "3");

    return oneJump + twoJump + threeJump;
}

console.log(getStairPaths(target, 0, ""));
