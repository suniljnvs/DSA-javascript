class DNode{
    constructor (data,prev=null,next=null){
        this.data=data;
        this.prev=prev;
        this.next=next;

    }
}

class DoublyLinkedList{
    constructor(){
        this.head =null;
        this.tail=null;
        this.size=0;
    }

    insertAtBegining(data){
        const dNode =new DNode(data); // it reside in memory no link with any list
        // if list is empty
        if(!this.head){
            this.head =dNode;
            this.tail=dNode;
        }else{
            dNode.next = this.head;
            this.head.prev=dNode;
            this.head =dNode;
        }
        this.size +=1;
    }

    insertAtEnd(data){
        const dNode = new DNode(data);
        if(!this.tail){
            this.head =dNode;
            this.tail=dNode;
        }
        this.tail.next=dNode;
        dNode.prev=this.tail;
        this.tail=dNode;

        this.size +=1;
    }

    insertAtKPosition(data,k){
       if(this.size < k){
        throw Error("Invalid position")
       }
       if(this.size===k){
        // this.insertAtEnd();
         const dNode = new DNode(data);
        this.tail.next = dNode;
        dNode.prev = this.tail;
        this.tail =dNode;
       }else{
        const dNode = new DNode(data);
         let count =1;
         let curr = this.head;

         while(count !==k){
            curr =curr.next;
            count++;
         }
         let nextNode = curr.next;
         curr.next=dNode;
         dNode.prev = curr;
         dNode.next =nextNode;
         nextNode.prev =dNode;

         this.size +=1;
       }     
    }

    printList(){
        let curr = this.head;
        while(curr){
            console.log(curr.data);
            curr =curr.next;
        }
    }

    deletionFromBegining(){
        if(!this.head){
            throw Error(" List is empty con't delete");
        }
        let temp =this.head;
        this.head =this.head.next;
        this.head.prev =null;
        temp.next =null;

        this.size -=1;
    }

    deletionFromEnd(){
        if(!this.head){
            throw Error(" List is empty con't delete");
        }
       let secondLast = this.tail.prev;
       secondLast.next =null;
       this.tail.prev =null;
       this.tail =secondLast;

       this.size -=1;
    }

    deletionAtKthPosition(k){
        if(!this.head){
            throw Error(" List is empty con't delete");
        }
        else if( this.size ===k){
            let secondLast = this.tail.prev;
            secondLast.next =null;
            this.tail.prev =null;
            this.tail =secondLast;
        }else{
            let count =1;
            let curr =this.head;
            while(count !==k){
                curr =curr.next;
                count++;
            }
            curr.prev.next =curr.next;
            curr.next.prev =curr.prev;
            curr.next=null;
            curr.prev= null;
        }
    }
}


const DList = new DoublyLinkedList();
DList.insertAtBegining(12);
DList.insertAtBegining(10);
DList.insertAtBegining(8);
DList.insertAtEnd(9);
DList.insertAtEnd(30);
DList.insertAtKPosition(15 ,3);
DList.printList();

console.log("===========================")

DList.deletionFromBegining();
DList.deletionFromEnd();
DList.deletionAtKthPosition(3)


DList.printList();