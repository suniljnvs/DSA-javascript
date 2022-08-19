// intro to arrays :-
// 1. It's is a reference data type
//2. ordered collection of items and can store mutiple types of data. . . 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);

let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana"; ///it's a muttable data type so it's change in the array. . .
// console.log(fruits);
console.log(typeof fruits); // everything is js is a object. . .
console.log(typeof obj);
console.log(Array.isArray(fruits)); // to know fruits is an array or not we use Array.isArray() Method. . .
console.log(Array.isArray(obj));


// array indexing 