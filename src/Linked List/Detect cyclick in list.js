// With the help of Fast  and  Slow pointer 


function detectCycle(head){
    if(head == null){
        return false;
    }
    let slow =head;
    let fast = head.next;

    while(slow !== fast){
        if(fast == null || fast.next == null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}
const res = detectCycle([3,2,0,4]);
console.log(res);


// find the middle element in linked list 
// by slow and fast pointer


function middleNode(head){
    if(head == null){
        return null;
    }
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null ){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
const result = middleNode([1,2,3,4,5])
console.log(result);