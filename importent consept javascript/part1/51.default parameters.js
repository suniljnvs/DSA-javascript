/* default parameters :-
let suppose we have two parameters in a function but in the argument we have only one agrument then the defualt parameter will we the agrument as like line no 17. .. .
if we have 2 parameters then this 2 treats as argument like line no 18. . .
*/

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a,b=2){
    return a+b;
}

const ans1 = addTwo(4);
const ans = addTwo(4, 8);
console.log(ans1);
console.log(ans);