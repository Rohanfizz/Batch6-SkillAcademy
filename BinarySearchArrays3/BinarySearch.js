let  arr = [10,16,39,41,48,67,78,89,92,99]
let tar = 49;


function bsearch(arr,tar){
    let l = 0;
    let r = arr.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        
        //compare
        if(arr[mid] == tar) return mid;
        else if(arr[mid] < tar) l = mid+1;
        else r = mid-1;
    }
    return -1;
}
console.log(bsearch(arr,tar));