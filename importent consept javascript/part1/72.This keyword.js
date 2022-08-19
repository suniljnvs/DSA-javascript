// console.log(window);
// "use strict";

function myFunc() {
    console.log(this);
}
// myFunc();


/* 

=> In this above function if we directly console.log(this) then it will return the window object. . . 
=> when we write "use strict" at the top or inside the top of the function then it return undefined. . .

=> But when we take the above function as a value of a key of an object then it will return that object; like if use the above function inside abc object then it will return abc object. . .

*/


