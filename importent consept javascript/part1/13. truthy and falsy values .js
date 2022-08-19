// truthy and falsy values 

// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. in short Truthy value execute the if block but falsy value bypass the if block. . .
//As well as a type, each value also has an inherent Boolean value, generally known as either truthy or falsy.
//Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block as like line no 6 to 10):
//if(!a){
//     console.log("truthy")
// }else{
//     console.log("falsy")
// }


// The following values are always falsy values:

// false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN

// Everything else is truthy. That includes:

// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)