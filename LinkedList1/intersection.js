/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getSize(head){
    let temp = head;
    let count = 0;
    while(temp != null){
        temp = temp.next;
        count++;
    }
    return count;
}

var getIntersectionNode = function(headA, headB) {
    let sz1 = getSize(headA);
    let sz2 = getSize(headB);
    let t1 = headA;
    let t2 = headB;

    while(sz1>sz2){
        t1 = t1.next;
        sz1--;
    }
    while(sz2>sz1){
        t2 = t2.next;
        sz2--;
    }
    //if im standing on this line sz1 = sz2 always
    while(t1 != t2){
        t1 = t1.next;
        t2 = t2.next;
    }
    return t2;
};










