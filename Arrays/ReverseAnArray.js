let arr = [1,2,3,4,5];

let i =0;
let j = arr.length-1;

while(i<j){
    //swap
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);