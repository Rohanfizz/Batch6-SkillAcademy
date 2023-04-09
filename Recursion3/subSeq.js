let arr = [1,2,3];

function printSubsequences(arr,idx,str){
    //base case
    if(idx == arr.length){
        console.log(str);
        return;
    }

    //either i can pick the element at index "idx"
    printSubsequences(arr ,idx+1 , str+arr[idx]+", ");
    
    //or i will not pick
    printSubsequences(arr ,idx+1 , str);
}

printSubsequences(arr,0,"");