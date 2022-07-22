/*  Anagram :
 Write a function to check whether two given strings are anagram of each other or not. 
An anagram of a string is another string that contains the same characters, 
only the order of characters can be different.*/

// hear two string given
// hello => lleho   -true
// apple => pplea

// frist check string length are equal or not

function isAnagram(string1,string2){
    if(string1.length !== string2.length){
        return false ;
    }
 let counter ={}
    for(let letter of string1){
        counter[letter]= (counter[letter] || 0) +1;
        //console.log(counter[letter]);
        
    }

    for( let element of string2){
        if(!counter[element]){
            return false;
        }
        counter[element] -= 1;
    }
    return true ;

}

const check = isAnagram("hello","lleho");
console.log(check);

//============================================================================

var isAnagram = function(s, t) {
    const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
    return sort(s)===sort(t) ? true : false;
};


//=================================================================================

var isAnagram = function(s, t) {
    let str1 = s.split("").sort().join("")
    let str2 = t.split("").sort().join("")
    if(str1 == str2) return true;
    else return false;
};