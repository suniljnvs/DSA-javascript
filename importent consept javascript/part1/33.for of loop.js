// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let i of fruits){   // Here i denoted as for loop fruits[i]
    fruits2.push(i.toUpperCase());
}
console.log(fruits2);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }