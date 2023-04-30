    //Function to find the next greater element for each element of the array.
    function nextLargerElementRight(arr, n){
        // code here
        let nger= new Array(n);
        let st = [];
        
        for(let i = n-1;i>=0;i--){
            while(st.length > 0 && st[st.length-1] <= arr[i]){
                st.pop();
            }
            
            if(st.length == 0) nger[i] = -1;
            else nger[i] = st[st.length-1];
            
            st.push(arr[i]);
        }
        return nger;
    }
    function nextLargerElementLeft(arr, n){
        // code here
        let nger= new Array(n);
        let st = [];
        
        for(let i = 0;i<n;i++){
            while(st.length > 0 && st[st.length-1] <= arr[i]){
                st.pop();
            }
            
            if(st.length == 0) nger[i] = -1;
            else nger[i] = st[st.length-1];
            
            st.push(arr[i]);
        }
        return nger;
    }
    function nextSmallerElementRight(arr, n){
        // code here
        let nger= new Array(n);
        let st = [];
        
        for(let i = n-1;i>=0;i--){
            while(st.length > 0 && st[st.length-1] >= arr[i]){
                st.pop();
            }
            
            if(st.length == 0) nger[i] = -1;
            else nger[i] = st[st.length-1];
            
            st.push(arr[i]);
        }
        return nger;
    }
    function nextSmallerElementLeft(arr, n){
        // code here
        let nger= new Array(n);
        let st = [];
        
        for(let i = 0;i<n;i++){
            while(st.length > 0 && st[st.length-1] >= arr[i]){
                st.pop();
            }
            
            if(st.length == 0) nger[i] = -1;
            else nger[i] = st[st.length-1];
            
            st.push(arr[i]);
        }
        return nger;
    }
    