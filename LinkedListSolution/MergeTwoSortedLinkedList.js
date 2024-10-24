function mergeTwoSortedList(list1, list2){
    let temp = new LinkedNode(-1);
    let current = temp;

    while(list1!==null && list2!==null){
        if(list1.data <= list2.data){
           current.next = list1;
           list1 = list1.next;
        }else{
           current.next = list2;
           list2 = list2.next
        }
        current = current.next
        
    }
    if(list1!==null){
        current.next = list1
    }else{
        current.next = list2
    }
    return temp.next;
}

function printList(head){
    let current = head;
    let result=[];

    while(current!==null){
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

