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


let preorder = [40,20,10,30,60,50,75,90];
let idx = 0;

let root = constructFromPre(-Infinity,Infinity);

function constructFromPre(l,r){
    if(idx >= preorder.length){
        return null;
    }
    if(preorder[idx] < l || preorder[idx] > r){
        return null;
    }
    let root = new Node(preorder[idx]);
    idx++;
    root.left = constructFromPre(l,root.val-1);
    root.right = constructFromPre(root.val+1,r);
    return root;
}

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