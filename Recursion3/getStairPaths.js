let target = 16;

function getStairPaths(target, currStair, psf) {
    //base
    if (currStair == target) {
        console.log(psf);
        return;
    }
    if (currStair > target) {
        return;
    }

    //if i make a jump of 1
    getStairPaths(target, currStair + 1, psf + "1");

    //if i make a jump of 2
    getStairPaths(target, currStair + 2, psf + "2");

    //if i make a jump of 3
    getStairPaths(target, currStair + 3, psf + "3");
}

getStairPaths(target, 0, "");
