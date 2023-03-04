let arr = [1,2,5,7,13,14,15,16];
let target = 20;

let i = 0;
let j = arr.length-1;

while(i<j){
    let sum = arr[i] + arr[j];

    if(sum == target){
        console.log(arr[i],arr[j]);
        i++;
        j--;
    }else if(sum < target){
        i++;
    }else j--;
}