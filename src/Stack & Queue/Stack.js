// stack linear data structure insertion at he end and deletion at the end called ( LIFO ) last in first out
/*
Stack is a linear data structure in which addition or removal of element follows a 
particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out).
*/
// array.push()    => insertion 
// array.pop()     => deletion

console.log("----- stack impliment using linklist------------------")
//=================implementation of stack using linklist============

class Node{
    constructor(data){
        this.data =data;

    }
}
class linkedList{
    constructor(){
        this.head = null;// it will return top value of the stack
        this.size =0; 
        this.tail =null;
    }

    pushBack(data){
        const node = new Node(data);
        node.next = this.head;// node kenext me head rakha b node ka next nullho hi jayega
        this.head = node; // ab head hamara node ho jayega
        if(this.size === 0){
            this.tail = node
        }
        this.size ++ ;
       }

        popBack(){
            if(!this.size ){
                throw Error("stack is empty")
            }//here we are only assigning values
            let curr = this.head;
            this.head = this.head.next;
            this.size--;
            curr.next =null;
            return curr.data

        }
    }

    class stack{
        constructor(){
            this.list = new linkedList();
            console.log(this.list)
        }

        push(val){
            this.list.pushBack(val);//append at end
        }

        pop(val){
            return this.list.popBack(val); //remove from end
        }

        getTop(){
            return this.list.head; //return last element value
        }

        getSize(val){
            return this.list.size(val); //return the size of the stack
        }

        isEmpty(){
            return this.list.size === 0;
        }
    }

    const st = new stack();

    st.push(10);
    st.push(20);
    st.push(30);
    st.push(40);
    st.pop();

    // st.getTop(); //last ele is remove and return it's value
    // st.getSize(); //return the value of the top ele of the stack


    while(!st.isEmpty()){
        console.log(st.getSize , "=============",st.pop());
    }
     console.log(st.getSize)