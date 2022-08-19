/* splice method :-

In this slice method, we have 3 parameters 1st one is for the index number then how many items we want to delete from that index and then we write the inserted item what we want to insert in that index . . . .

*/

// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];

// delete :-

// const deletedItem = myArray.splice(1, 2); 
// if we want to store the deleted item in a variable we can store it as like in the above line as deletedItem. . .

// console.log("delted item", deletedItem);


// insert :-

// myArray.splice(1, 0,'inserted item');
// console.log(myArray);


// Both insert and delete together:-

const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray);