//Q1- print only 4 element of array
data =[4,2,5,1,3,2,4,1,5,6,7]
data.length=4;
console.log(data);

//Q2- fimd the sum of all the element present in array
data =[4,2,5,1,3]
let sum =data.reduce((x,y)=>x+y)
console.log(sum);

//Q3- fimd the sum of all the element present in array
data =[4,2,5,1,3]
let product =data.reduce((x,y)=>x*y)
console.log(product);


//Q4- Remove duplicate element from array
data =[4,2,5,1,3,2,4,1,5,6,7]
let unique= new Set(data);
console.log([...unique]); // ager ...spread operater nhi lagayenge to output{} ke ander aayega but hme array ke ander chahiye to ... lagana padega

// comma opetater
// esme () 2 parameter pass kiya jata h aur last wala parameter ko print karta hh
let x=5;
x=(x+=53,x)
console.log(x);

// swap two value  using destructure
// method-1
let z=20, y=50;
z=z+y
y=z-y
z=z-y
console.log(z,y);

// method-2
let p=20 ,q=50;
[p,q]=[q,p]
console.log(p,q);


// function fndMissingNo(arr,n){
//     let sumAll = Math.floor(((n+1)*(n+2))/2);
//     let sum = arr.reduce((x,y) => x+y)
// }