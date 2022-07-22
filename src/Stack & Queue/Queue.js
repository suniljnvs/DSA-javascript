// queue is lenear data structure  ( FIFO) frist in frist out
// use of queue in ticket counter ,raiway or flight ticket counter
// sliding window
// tree 

class Node {
    constructer (data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    appendElement(data){
        const node =new Node(data);
        if(!this.head){
            this.head = node;
            this.tail =node;
        }else{
            this.tail.next =node;
            this.tail = node;
        }
        this.size++;

    }

    removeElement(){
        if(this.size ===0){
            throw Error(" Queue is empty");
        }
        let curr = this.head;
        this.head = curr.next;
        curr.next = null ;
        this.size--;
        return curr.data;
    }

}

class Queue{
    constructor(){
        this.list = new LinkedList();

    }
    enQueue(data){
        // adding element in a queue
        this.list.appendElement(data);
    }
    deQueue(data){
        // delete element in a queue
        return this.list.removeElement();
    }
    get getSize(){
        return this.list.size;
    }

    frontElement(){
        return this.list.head.data;
    }

    isEmpty(){
        return this.list.size === 0;
    }
}

const que = new Queue();

que.enQueue(10);
que.enQueue(20);
que.enQueue(30);
que.enQueue(40);
que.enQueue(50);
que.enQueue(60);
que.deQueue(60);

while(!que.isEmpty()){
    console.log(que.getSize , "=============",que.deQueue());
}
 console.log(que.getSize)


 module.exprt = {Queue};