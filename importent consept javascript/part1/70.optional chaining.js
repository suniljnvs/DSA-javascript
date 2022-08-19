/* optional chaining :-
when we use ?.(question mark and then dot) after the property then if the property not exit in object it returns undefined it's doesn't go further. . if we don't use ?. then it gives an error. . .example in the line no 10 and 11. . .
*/

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber); 