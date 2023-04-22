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

let tree = [5,2,4,-1,-1,6,9,-1,-1,10,11,-1,-1,-1,3,7,-1,-1,8,-1,-1];
let root = serialize(tree);

function nodeToRootPath(node,target){
    if(node == null){
        return [];
    }
    if(node.val == target){
        return [target];
    }
    let leftArray = nodeToRootPath(node.left,target);
    if(leftArray.length != 0){
        //this means that i was able to find target in my left subtree
        //i should be a part of the nodetorootpath
        leftArray.push(node.val);
        return leftArray;
    }

    let rightArray = nodeToRootPath(node.right,target);
    if(rightArray.length  != 0){
        rightArray.push(node.val);
        return rightArray;
    }
    return []; //this means i was not able to find the target in my children.
}

let ntrp = nodeToRootPath(root,11);
console.log(ntrp);