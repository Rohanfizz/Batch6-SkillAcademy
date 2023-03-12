let arr= [
        [0,0,0,0,0,0,1,0],
        [1,0,1,0,0,0,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],  
        [0,0,1,0,0,0,1,0],  
        [1,0,0,0,0,0,0,1],  
]

let i = 0;
let j = 0;
let dir = "E";

while(i>=0 && j>=0 && i<arr.length && j<arr[0].length){
    if(arr[i][j] == 1){
        arr[i][j] = 0;
        //change the direction
        if(dir == "E") dir = "S";
        else if(dir == "S") dir = "W";
        else if(dir == "W") dir = "N";
        else if(dir == "N") dir = "E";
    }

    //move
    if(dir == "S"){
        i++;
    }else if(dir == "W"){
        j--;
    }else if(dir == "N"){
        i--;
    }else if(dir == "E"){
        j++;
    }
}

// now i and j will be out of bounds
// i have to fix that by moving one step in the opposite direction of the final direction

if(dir == "W") j++;
else if(dir == "E") j--;
else if(dir == "N") i++;
else if(dir == "S") i--;

console.log(i,j);