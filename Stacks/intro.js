class Node{
    val;//integer
    next;//Node
    constructor(v){
        this.val = v;
        this.next = null;
    }
}

class LinkedList{

    head;//Node type
    tail;//Node type
    size;//Integer
    constructor(){
        this.head  = null;
        this.tail = null;
        this.size = 0;
    }
    getSize=()=>{
        return this.size;
    }
    addLast=(val)=>{
        if(this.size == 0){ //when tail is null as linkedlist is empty
            let nn= new Node(val);
            this.head = nn;
            this.tail = nn;
            this.size++;
            return;
        }
        //when linkedlist is non empty
        let nn = new Node(val);
        this.tail.next = nn;
        this.tail = nn;
        this.size++;
    }
    display=()=>{
        if(this.size == 0){
            console.log("List is Empty!");
            return;
        }
        let temp = this.head;
        let s = "";

        while(temp != null){
            s += temp.val+" -> ";
            temp = temp.next;
        }
        console.log(s);
    }
    addFirst=(val)=>{
        if(this.size == 0){ //when head is null as linkedlist is empty
            let nn= new Node(val);
            this.head = nn;
            this.tail = nn;
            this.size++;
            return;
        }
        let nn = new Node(val);
        nn.next = this.head;
        this.head = nn;
        this.size++;
    }
    removeFirst=()=>{//this should remove the value at first index, and return that
        if(this.size == 0){
            console.log("Linkedlist Underflow.");
            return -1;
        }
        if(this.size==1){
            let valToBeReturned = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return valToBeReturned;
        }
        let valToBeReturned = this.head.val;
        this.head = this.head.next;
        this.size--;
        return valToBeReturned;
    }
    removeLast=()=>{
        if(this.size == 0){
            console.log("Linkedlist Underflow.");
            return -1;
        }
        if(this.size==1){
            let valToBeReturned = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return valToBeReturned;
        }
        let valToBeReturned = this.tail.val;
        let temp = this.head;

        while(temp.next.next != null){
            temp = temp.next;
        }
        temp.next = null;
        this.tail = temp;
        this.size--;
        return valToBeReturned;
    }
    getNodeAt = (idx)=>{
        if(idx<0 || idx>=this.size) return null;
        let temp = this.head;
        let curr = 0;
        while(curr<idx){
            temp= temp.next;
            curr++;
        }
        return temp;
    }
    getValueAt=(idx)=>{
        if(idx<0 || idx>=this.size) return -1;
        let nodeAtIdx = this.getNodeAt(idx);
        let valAtNode = nodeAtIdx.val;
        return valAtNode;
    }

    removeAt = (idx)=>{
        if(idx == 0){
            return this.removeFirst();
        }else if(idx == this.size-1){
            return this.removeLast();
        }
        let prev = this.getNodeAt(idx-1);
        let res = prev.next.val;
        prev.next = prev.next.next;
        this.size--;
        return res;
    }
    addAt = (idx,val)=>{
        if(idx == 0){
            this.addFirst(val);
            return;
        }else if(idx == this.size){
            this.addLast(val);
            return;
        }
        let prev = this.getNodeAt(idx-1);
        let nn = new Node(val);
        nn.next = prev.next;
        prev.next = nn;
        this.size++;
    }
}

class Stack{
    ll;
    constructor(){
        this.ll = new LinkedList();
    }
    push=function(x){
        this.ll.addFirst(x);
    }
    pop=function(){
        return this.ll.removeFirst();
    }
    peek=function(){
        return this.ll.getValueAt(0);
    }
    size=function(){
        return this.ll.getSize();
    }
}
let st = [];
st.push(-10);
st.push(20);
st.push(30);
console.log(st.pop());
// let st = new Stack();
// let st2 = new Stack();
// st.push(10);
// st.push(14);
// st.push(19);
// console.log(st.peek());
// console.log(st.size());
// console.log(st.pop());
// console.log(st.pop());
// console.log(st.pop());
// console.log(st.size());