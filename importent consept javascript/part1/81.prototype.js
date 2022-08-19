function hello(){
    console.log("hello world");
}

// console.log(hello.name); // Here name property ---> tells us function name;

// In javascript, functions are basically combinations of functions and objects. . .function provides more usefull properties.

/* Prototype :-

=> we can say it is an empty object{}. . .
=> Prototype are basically an empty space where we can store any propetries. . .Only functions provide prototype property. . .
=> If we console.log(hello.prototype) it will give us an empty object{}. . .
=> we can add any property to the prototype object like below and also access the same. . .

*/

// console.log(hello.prototype)

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());


// if we want to add our own properties we can so like below :-
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// hello.sarique = "my Name";
// console.log(hello.sarique);

// hello() // when we call it, after add all the properties to the function prototype then it will only return what we will write inside the function only. . .
