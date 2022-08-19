
// String is immutable so we can't change it using String function as we use in line no 7. .so we have to assign this into another variable or the same one to see the change. . .

// 1. trim():- Eleminate the spaces.

// let firstName = "harshit";
// firstName.trim();
// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);


//2. toUpperCase(), toLowerCase()

// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);


// 3. slice() :-

// In this slice method if we pass the argument start index and end index as like 27 line, then it returns string from starting index to the end index-1. . .  
//if we pass only one postive argument as like 28 Line, it only delete that element from the beginning. . . .
// if we pass only one negative argument as like 29 Line, it returns that element from the end(if the length is 7 and we pass -6 then it only delete the 1st one element and return the rest).

// let newString = firstName.slice(0,6);
// let newString = firstName.slice(6);
// let newString = firstName.slice(-6);
// console.log(newString);


// 4. charAt():-

// charAt() method returns the character which index is passed in the parameter. .
//if no index passed as argument it set defaut 0th index. . 
//if we pass the index which is greater than equal to the length it doesn;t return anything. . .

// let name = "sarique";
// name = name.charAt(2);
// name = name.charAt();
// name = name.charAt(7);
// name = name.charAt(99);
// console.log(name);


//5. charCodeAt():- 

//it returns the ASCII code which index is passed in the argument. .
//if no index passed as argument it set defaut 0th index. . 
//if we pass the index which is greater than equal to the length it returns NAN. . .

// let name = "sarique";
// name = name.charCodeAt(1);
// name = name.charCodeAt();
// name = name.charCodeAt(100);
// console.log(name);


// 6. concat():- The concat() method concatenates (add) the string arguments to the calling string and returns a new string.

// let fname = "sarique";
// let lname = "zamal";
// let name = fname.concat(" ",lname);
// console.log(name);


// 7.endsWith():-

// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate. . .
//we also check the end length number of that substring by passing 2 arguments 1st one the Substring, 2nd one is the end length number of that substring as like 66 & 67 line. . .

// let fname = "sarique";
// fname = fname.endsWith("e")
// console.log(fname);
// console.log(fname.endsWith("sarique"));
// console.log(fname.endsWith("a",2));
// console.log(fname.endsWith("q",5));


// 8. includes():- 

//The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
//we also check the starting index of that substring by passing 2 arguments 1st one the Substring, 2nd one is the starting index of that substring as like 82 line. . .

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(sentence.includes(word));
// console.log(sentence.includes(word,16));


// 9.indexOf() :- 

//In indexOf() method,if we Pass one argument, a substring to search for,it searches the entire calling string, and returns the index of the first occurrence of the specified substring.
//if we pass 2 arguments, one the search substring the another one is the index,if the index no is less than equal to the subString occurence index then it return the index number of the occurence of the specified substring as like line no 103 but if the index number is greater than the substring occurence index then it return -1 as like line no 104. . .  
//if we Pass a substring to search for,and it's not present in that string then it returns -1 as like line number 105. . .

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(indexOfFirst)
// console.log(paragraph.indexOf('quick',4))
// console.log(paragraph.indexOf('quick',5))
// console.log(paragraph.lastIndexOf('go'))


// 10. lastIndexOf() :- 

//In lastIndexOf() method,if we Pass one argument, a substring to search for,it searches the entire calling string, and returns the index of the last occurrence of the specified substring.
//if we pass 2 arguments, one the search substring the another one is the index,if the index no is greater than equal to the subString occurence index then it returns the index number of the occurence of the specified substring as like line no 119 but if the index number is less than the substring occurence index then it return -1 as like line no 120. . .  
//if we Pass a substring to search for,and it's not present in that string then it returns -1 as like line number 121. . .

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.lastIndexOf(searchTerm);
// console.log(indexOfFirst)
// console.log(paragraph.indexOf('quick',4))
// console.log(paragraph.lastIndexOf('quick',3))
// console.log(paragraph.lastIndexOf('go'))


// 11. 