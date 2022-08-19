// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];
const index =[]

for(let i in fruits){
    index.push(i);   // Here i denotes as index number only but in the for of loop it denotes as fruits[i]
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
console.log(index);
