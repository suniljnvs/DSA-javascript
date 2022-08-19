/* Sets :-

=> it is iterable. . .
=> it stores data. . .
=> sets also have its own methods. . 
=> No index-based access :- we can't access element through index. . .
=> Order is not guaranteed :- The order of the storing elements index is not as per the first storing first index. . . 
=> unique items only (no duplicates allowed) :-
 we can't store the duplicate element, but we can store the different array with same elements or vlaue. . .

*/

// const num = [1,10,40,50,60,25]
// const numbers = new Set();

// for (let index = 0; index < num.length; index++) {
//     numbers.add(num[index]);   
// }
// console.log(numbers);

// -------------------------------------------------------------------------------------------------------------------------


// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();

// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);

// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }

// for(let number of numbers){
//     console.log(number);
// }


// -------------------------------------------------------------------------------------------------------------------------


// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);