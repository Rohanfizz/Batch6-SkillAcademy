let arr = [1,9,2,8,3,8,4,7,5,6];

//maxi height (maximum element of an array)
let maxi = 0;
for(let i = 0;i<arr.length;i++){
    if(maxi < arr[i]){
        maxi = arr[i];
    }
}

for(let floor = maxi;floor>=1;floor--){
    let thisFloor = "";
    for(let i = 0;i<arr.length;i++){
        if(floor <= arr[i]) thisFloor+="*";
        else thisFloor+=" ";
    }
    console.log(thisFloor);
}