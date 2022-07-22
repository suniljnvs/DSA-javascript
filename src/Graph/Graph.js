/*
(BFS) Breadth First Search  algorithm traverses a graph in a breadthward
 motion and uses a queue to remember to get the next vertex to start a
  search, when a dead end occurs in any iteration. As in the example 
  given above, BFS algorithm traverses from A to B to E to F first 
  then to C and G lastly to D.


(BFT)  Breadth First Search is a traversal technique in which we traverse all
   the nodes of the graph in a breadth-wise motion. In BFS, we traverse
    one level at a time and then jump to the next level. In a graph, 
    the traversal can start from any node and cover all the nodes 
    level-wise.


(DFT) Depth-first search is an algorithm for traversing or searching tree 
    or graph data structures. The algorithm starts at the root node 
    (selecting some arbitrary node as the root node in the case of a 
    graph) and explores as far as possible along each branch before
    backtracking

*/



const Queue = require("../Stack & Queue/Queue")


class Graph{
    constructor(noOfVertices){
        this.noOfVertices= noOfVertices;
        this.adjList = new Map();
    }

    addVertex(v){
        // add vertex in graph
        this.adjList.set(v,[]);
    }

    addEdge(v,target){
        this.adjList.get(v).push(target);

        this.adjList.get(target).push(v);
    }

    printGraph(){
        const keys = this.adjList.keys();
        for(let key of keys){
            console.log(key, '->',this.adjList.get(key));
        }
    }
//Breadth First Search (BFS)
    bfs(vertex){
        const queue =new Queue();
        let visisted = {};

        queue.enQueue(vertex);
        visisted[vertex]= true;

        while(!queue.isEmpty()){
            const elem = queue.deQueue();
            console.log(elem);
            
            const vertices = this.adjList.get(elem);

            for(let vertex of vertices){
                if(!visisted[vertex]){
                    queue.enQueue(vertex);
                    visisted[vertex] = true;
                }
            }
        }

    }
// (BFT)  Breadth First Search
    bft(){
        let visisted ={};
        let disconnectedCount = 0;
        for(let key of this.adjList.keys()){
            if(!visisted[key]){
                disconnectedCount++;
                this.bfs(key,visisted);
            }
        }
        console.log(disconnectedCount);
    }
//  (DFT) Depth-first search 
    dfs(vertex,visisted =[]){
        visisted[vertex] = true;
        console.log(vertex);

        for(let vert of this.adjList.get(vertex)){
            if(!visisted[vert]){
                this.dfs(vert, visisted);
            }
        }
    }
}


const graph = new Graph(5);

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','E');
graph.addEdge('B','E');
graph.addEdge('B','D');
graph.addEdge('C','E');
graph.addEdge('C','D');

// graph.printGraph();

graph.bfs('A')