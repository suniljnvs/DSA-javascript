// fill method
// value , start , end 

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5); 
// here we in the 1st parameter we write what we want to fill the the starting index number then the end index+1(because it goes to that index but only change the index-1th item). . . .

console.log(myArray);