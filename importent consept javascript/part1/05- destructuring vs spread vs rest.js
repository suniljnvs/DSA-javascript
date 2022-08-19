/*
Destructuring:- 

Destructuring assignment is a syntax that allows you to assign object properties or array items as variables. 
There are two types of destructuring: Object destructuring and Array destructuring.
*/

//Object destructuring:- Object destructuring allows you to create new variables using an object property as the value.

const person = {
    id: 1050,
    name: "sarique",
    age:25
}

const {id,name,age} = person;  // Destructure properties into variables

console.log(id)

// const {id:noteId,name, age} = person  // Assign a custom name to a destructured value

// console.log(noteId)


// Array Destructuring :- Array destructuring allows you to create new variables using an array item as a value.

const date = ['1970', '12', '01']
const [year, month, day] = date  // Destructure Array values into variables

// console.log(year)
// console.log(month)
// console.log(day)



// Spread Operator :- Spread allows objects and iterables (such as arrays) to be unpacked, or expanded, which can be used to make shallow copies of data structures . . . Spread syntax ---> (...)

const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

const allTools = [...tools, ...otherTools] // Unpack the tools Array & otherTools Array into the allTools Array

// console.log(allTools)


// Create an Array
const originalArray = ['one', 'two', 'three']

// Use spread to make a shallow copy
const secondArray = [...originalArray]

// Remove the last item of the second Array
secondArray.pop() // only change occurs in the secondArray. . ..

// console.log(originalArray)
// console.log(secondArray)


const string = 'abcdefghijklmnopqrstuvwxyz'
const stringArray = [...string]

// console.log(stringArray)  //This will give an array with each character as an item in the array. . . .


// To copy and update object use can use the spread operator as well as the Objects.assign() methos. . .

const originalObject = { enabled: true, darkMode: false }
const secondObject = Object.assign({}, originalObject)
const thirdObject = { ...originalObject }

// console.log(secondObject)
// console.log(thirdObject)

// Adding or modifying properties on an existing object
const user = {
    id: 3,
    name: 'Ron',
  }
  
  const updatedUser = { ...user, isLoggedIn: true }
  
//   console.log(updatedUser)



  // Rest Parameters :- The syntax appears the same as spread (...) but has the opposite effect. Instead of unpacking an array or object into individual values,  rest syntax provides efficient methods for gathering an indeterminate amount of items.

  const [firstTool, ...rest] = ['hammer', 'screwdriver', 'wrench']

console.log(firstTool)
console.log(rest)

const { isLoggedIn, ...vest } = { id: 1, name: 'Ben', isLoggedIn: true }

console.log(isLoggedIn)
console.log(vest)
