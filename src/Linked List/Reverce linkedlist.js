// for loop in linked list

// for(node*curr = head; curr != null; curr = curr.next){
//     Data.push_back(curr.val);
// }
// for(node*curr =head; curr!= null; curr = curr.next){
//     curr.val = data.back();
//     data.pop_back();
// }

/* 
step 1
take 3 pointer curr = head; prev = null; temp= curr.next

step 2
 in while loop 
 while(curr != null)
*/

function reverceLinkedlist(head){
    let curr = head;
    let prev = null;
     while(curr != null){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
     }
     return prev;
}

// const res = reverceLinkedlist(2,4,5,6,8);
// console.log(res)