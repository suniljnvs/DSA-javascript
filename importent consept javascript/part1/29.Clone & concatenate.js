/* how to clone array :- 
array is a reference data type so if we write arr= arr1 then both the array reference to the same address. .
clone array means to create a separate array and both the array rference to the different address. . .
*/

//clone two arrays:-

// let array1 = ["item1", "item2"];
//1st way :-  let array2 = ["item1", "item2"]; 
//2nd way :-  let array2 = array1.slice(0)
//3rd way :-  let array2 = [].concat(array1);
// new way 
// spread operator

// let array2 = [...array1];

// array1.push("item3");

// console.log(array1===array2);
// console.log(array1)
// console.log(array2)

//--------------------------------------------------------------------------------------------------------------------------------------

// how to concatenate two arrays

let array1 = ["item1", "item2"];
let oneMoreArray = ["item3", "item4"]
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = array1.slice(0).concat(oneMoreArray);
// let array2 = [].concat(array1,oneMoreArray);
// new way 
// spread operator

let array2 = [...array1, ...oneMoreArray];

console.log(array1===array2);
console.log(array1)
console.log(array2)
