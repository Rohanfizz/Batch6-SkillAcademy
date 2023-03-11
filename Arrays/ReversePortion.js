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

arr = [1,2,3,4,5,6,7,8,9];
reversePortion(arr,0,8);
console.log(arr);