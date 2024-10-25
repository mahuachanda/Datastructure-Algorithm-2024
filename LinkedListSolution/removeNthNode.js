var removeNthFromEnd = function(head, n) {

    let dummy = new ListNode(0);
    //important point to take care
    dummy.next = head;
    let fast = dummy ;
    let slow = dummy ;
    //move fast pointer n times
    for(let i=0;i<=n;i++){
        fast = fast.next;
    }
    //move both pointers
    while(fast!==null){
        fast = fast.next;
        slow = slow.next;
    }
    //skip the node to be deleted
    slow.next = slow.next.next;
    //return the new head
    return dummy.next;
};