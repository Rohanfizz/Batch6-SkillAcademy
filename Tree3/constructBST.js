class Node{
    val;
    left;
    right;
    constructor(x){
        this.val = x;
        this.left = null;
        this.right= null;
    }
}

function constructBST(arr,l,r){
    if(l>r) return null;

    let midIdx = parseInt((l+r)/2);
    let root = new Node(arr[midIdx]);
    root.left = constructBST(arr,l,midIdx-1);
    root.right = constructBST(arr,midIdx+1,r);
    return root;
}
// construct bst from inorder   
let arr = [10,20,30,40,50,60,75,90];

let root = constructBST(arr,0,arr.length-1);


displayTree(root);

function displayTree(node){
    if(node  == null) return;

    let s = "";
    s+= node.val +" : ";
    if(node.left == null) s+="-1, ";
    else s+=node.left.val+", ";

    if(node.right == null) s+="-1";
    else s+=node.right.val;

    console.log(s);

    displayTree(node.left);
    displayTree(node.right);
}