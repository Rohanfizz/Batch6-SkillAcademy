let  arr = [10,16,39,41,48,67,78,89,92,99]
let tar = 48;

function ceilFloor(arr,tar){
    let l = 0;
    let r = arr.length-1;
    let ceil = -1;
    let floor = -1;

    while(l<=r){
        let mid = Math.floor((l+r)/2);

        if(arr[mid] == tar){
            ceil = tar;
            floor = tar;
            return [floor,ceil];
        }else if(arr[mid] < tar){
            floor = arr[mid];
            l = mid+1;
        }else{
            ceil = arr[mid];
            r = mid-1;
        }
    }
    return [floor,ceil];
}
console.log(ceilFloor(arr,tar));