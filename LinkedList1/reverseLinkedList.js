/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null) return null;
    let prev = null;
    let curr = head;
    let next = head.next;

    while(curr != null){
        curr.next = prev;

        prev = curr;
        curr = next;
        if(next != null) next = next.next;
    }   
    return prev;
};











