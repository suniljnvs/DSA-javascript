/* filter method  :-
Filter method return a new array so we have to use return keyword instead of console unless it gives undefined as output. . .
*/

const numbers = [1,3,2,6,4,8];

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});

const oddNumbers = numbers.filter((i)=>{
    return i % 2 !== 0;
})

console.log(evenNumbers);
console.log(oddNumbers);