// undefined 
// null

// we can't only define/declar constant without any value assign to it as like line no 5(it's a syntax error: Missing initializer in const declaration). . .
// const name;
// console.log(typeof name)

// let firstName;
// console.log(typeof firstName); // it's undefined when we only declared a variable but no value assigned to it. . . 
// firstName = "Harshit";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null); // it returns an object but it's a error/ bug in javascripts. . there are several frameworks have already built with this bug so it's pereferably to not fix it. 

// BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// // console.log(myNumber);
// // console.log(Number.MAX_SAFE_INTEGER); // there a maximum limit to store a number in javascript so the new primitive data type was introduced which is BigInt . . we can't do any opertion between BigInt and any other data types. . .
// console.log(myNumber+ sameMyNumber);
