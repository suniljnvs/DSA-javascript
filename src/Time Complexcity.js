//write a program to add numbers from 1 to n
let n = 500

//naive technique
let sum = 0

for (let i = 1; i <= n; i++) {
    sum = sum + 1
}

// console.log(sum)

//time complexity = O(n) // also known as Big O notation

// improved technique

let BetterSum = (n * (n + 1)) / 2
// console.log(BetterSum)

//time complexity = O(1) 

//space complexity

//swap two numbers a and b

let p = 23
let q = 78
// a = 78  b = 23
temp = p //temp = 23
p = q // a = 78

// Space complexity ==> Total space taken by the algorithm with respect to the input size 
//analysis of space ==> n(array size) + 20 +1  ==> n+11 space complexity O(n)


// In array access of an elemetn time complexty is O(1)
// add element in end of the array O(1)  array.push(1)
// remove element fromend of the array O(1)  array.pop(1)


// Insertion in begining in the array
// (operation performend) insertion O(1) + rearengement of index O(n) 
// total time complexity of insertion in begining of the array is O(n)

// Insertion in the middle of the array 
// time complexity O(n)

// Exmple find if 6 is present in an array 

// Best case input 

let array = [1, 3, 4, 6, 3, 5, 6, 7, 8]

// 0=> 3, 1=>4

var msg = "element is not present";
for (var i = 0; i < array.length; i++) {
    if (array[i] == 5) {
        msg = "element is present"
        break;
    }
}

 console.log(msg)

// best case time complexity of seraching an element O(1) Omega

// average case arrary 1, 3, 4, 6, 3, 5, 6, 7, 8 avg time complexity O(n) that notation

// Worst case time complexity O(n)  big oh notation

// quicksort worst as O(n2)  avg case O(nlogn)

// console.log(msg.i)

// Object 

var obj = {};  // time complexity O(1);

obj.fname = "Sunil";  // Object.key ==> insertion O(1) constant
obj.lname = "Kumar"
obj.age = 25;
obj.designation = "full stack developer"

// access time complexity O(1)
console.log(obj.fname + " " + obj['lname'])   // dono tarah se likh sakte hh .fname and ["lname"]

// deletion time complexity is also O(1)

// searching tie complexity in Object is O(n)
// if any key have value 25

// time complexity of Object.keys is O(n)
// console.log(Object.keys(obj))

// time complexity of Object.values is O(n)
// console.log(Object.value(obj))

// time complexity of Object.entries is O(n)
// console.log(Object.entries(obj))


//what is time complexity and why we need it ?
//time taken by the code or algorithm or function

//how to calculate the time complexity

var a = 1;  //(c) constant time taken by the statement
var b = 2;  //(c) constant time taken by the statement

var c = a + b;  // c (addition) + c (assignment) => 2c

//total time taken by the code to execute or complete is (c+c+2c) => 4C

var arr = [] // time complexity (c) constant time

// we need to calculate total even number in array

arr = [1, 2, 5, 7, 9, 10, 20, 22] //(8c)

//even number divided by 2

let even_count = 0 //c
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {  //c
        even_count++  //2c
        let h = 23; // c
        let i = 23;  // c
        let sum = h + i; // 2c
    }
}


// total = c + loop(c + 2c + c + c + 2c) 

//total time complexity => c + loop(c + 2c) => c + loop(3c) => c + no. of time loop runs(in our case arr.length) * 3c => c + 8 * 3c => 25c

//array size of n => c + n*2c => c + 2nc => c(2n + 1)
console.log(even_count)

var x = 3; // one constaint time (c)
var y = 4; // one constaint time (c)
var z = x + y;  // two constaint time(2c)

console.log("============================");

// function sort(array){
//     let reverce = [];
//     let n = array.length - 1;
//     for( let i =n;i>=3;i--){
//         reverce.push(array[i])
//     }
//     return reverce;
// }

// const abc =sort([4,3,5,2,7,1,6])  // [  6, 1, 7, 2, 5, 3, 4]

// console.log(abc);


function sort(string){
    let array = string.split("")
    console.log(array)
    let reverce = [];
    let n = array.length - 1;
    for( let i =n;i>=0;i--){
        reverce.push(array[i])
    }
    return reverce.join("");
}

const abc =sort("sunil")  // [  6, 1, 7, 2, 5, 3, 4]

console.log(abc);