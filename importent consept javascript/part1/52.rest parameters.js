/* rest parameters :-
Through the rest parameter we can take as many agrument as we want. . .
the rest parameter stores the data as an array. . .
*/

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){ // at the time of calling the function we can use as many as parametes we want. . .
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,4,2,10);
console.log(ans);