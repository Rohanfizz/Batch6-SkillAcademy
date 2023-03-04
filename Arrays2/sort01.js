
class Solution {
    segregate0and1(arr,n){
        //code here
        let i = 0
        let j = arr.length-1;
        
        while(i<j){
            if(arr[i] == 0){
                i++;
            }else{
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                
                j--;
            }
        }
    }
}