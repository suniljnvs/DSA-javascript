const Queue =require("../Stack/Queue")

class Node{
    constructor(data,left,right) {
        this.data=data;
        this.left=null;
        this.right=null;
        
    }
}

class BinaryTree{
    constructor() {
        this.root =null;
        this.size =0;
        
    }
    insert(data){
        const node = new Node(data);
        if(!this.root){
            this,this.root= node;
        }else{
            // we need to traverse the tree and find the node
            // level order traversal
            const queue = new Queue();
            queue.enQueue(this.root);

            while(!queue.isEmpty()){
                let temp =queue.deQueue();
                if(temp.left){
                    queue.enQueue(temp.left);
                }else{
                    temp.left =node;
                    return ;
                }
                if(temp.right){
                    queue.enQueue(temp.right);
                }else{
                    temp.right =node;
                    return ;
                }
            }
        }
    }

    inorderTraversal(root){
        if(!root){
            return;
        }
        this.inorderTraversal(root.left);
        console.log(root.data, " ->");
        this.inorderTraversal(root.right);
    }

    preorderTraversal(root){

        if(!root){
            return;
        }
        console.log(root.data, " ->");
        this.inorderTraversal(root.left);
        this.inorderTraversal(root.right);
    }

    postorderTraversal(data){
        
        if(!root){
            return;
        }
        this.inorderTraversal(root.left);
        this.inorderTraversal(root.right);
        console.log(root.data, " ->");

    }
}

const binaryTree = new BinaryTree();

binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(6);
binaryTree.insert(7);
binaryTree.insert(8);

// console.log(binaryTree.root)

// binaryTree.inorderTraversal(binaryTree.root);

// binaryTree.preorderTraversal(binaryTree.root);

binaryTree.postorderTraversal(binaryTree.root);

// inorderTraversal  (Left -> Data -> Right)
// preorderTraversal  (Data -> Left -> Right)
// postorderTraversal  (Left -> Right -> Data)
// level order