class Node{
    left;
    right;
    val;
    constructor(data){
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

let idx = 0;
function serialize(arr){//this function return node always
    if(arr[idx] == -1){
        idx++;
        return null;
    }

    let me = new Node(arr[idx]);
    idx++;

    let leftChild = serialize(arr);
    let rightChild = serialize(arr);

    me.left= leftChild;
    me.right = rightChild;
    return me;
}

let tree = [70,2,4,-1,6,-1,-1,-1,3,-1,5,7,-1,-1,-1];
let root = serialize(tree);

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
