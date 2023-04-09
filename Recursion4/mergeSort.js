
let arr = [4,1,2,3,5,6,7,4,1,2,5,7,1];

function mergeTwoSortedArrays(a1,a2){
    let i = 0;
    let j = 0;
    let res = [];
    while(i<a1.length && j<a2.length){
        if(a1[i] < a2[j]){
            res.push(a1[i]);
            i++;
        }else{
            res.push(a2[j]);
            j++;
        }
    }
    while(i<a1.length){
        res.push(a1[i]);
        i++;
    }
    while(j<a2.length){
        res.push(a2[j]);
        j++;
    }
    return res;
}

function mergeSort(arr,l,r){
    if(l == r){//if only single element is present in range
        //return an array containing that element only because a single element is
        // always sorted ex. [4]
        let baseArray = [];
        baseArray.push(arr[l]);
        return baseArray;
    }
    let mid = parseInt((l+r)/2);
    let leftSortedArray = mergeSort(arr,l,mid);
    let rightSortedArray = mergeSort(arr,mid+1,r);

    let singleMergerArray = mergeTwoSortedArrays(leftSortedArray,rightSortedArray);
    return singleMergerArray;
}

console.log(mergeSort(arr,0,arr.length-1));