function reverseLinkedList(head){
    let prev=null;
    let current= head;
    let next=null;
    while(current!=null){
       next = current.next;
       current.next = prev;
       prev = current;
       current = next;
    }
    return prev
}



//Extra code to print the output
class ListNode{
    constructor(data){
        this.data = data;
        this.next= null;
    }
}
// Helper function to print the linked list
function printList(node) {
    let current = node;
    let result = [];
    while (current !== null) {
        result.push(current.data);  // Collect the values in the list
        current = current.next;     // Move to the next node
    }
    console.log(result.join(" -> "));
}

// Creating a linked list: 1 -> 2 -> 3 -> 4 -> null
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log("Original list:");
printList(head);  // Output the original list

// Reversing the linked list
let reversedHead = reverseLinkedList(head);

console.log("Reversed list:");
printList(reversedHead);  // Output the reversed list

