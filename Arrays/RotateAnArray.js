function reversePortion(arr,i,j){
    while(i<j){
        //swap
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

arr = [1,2,3,4,5,6,7,8,9,10];
let k = 2;
let n = arr.length;
reversePortion(arr,n-k,n-1);
reversePortion(arr,0,(n-k)-1);
reversePortion(arr,0,n-1);

console.log(arr);
