
// find the longestWords in string 

function longestWords(str){
    let words = str.split(" ")
    let longestwrd = "";
    for(let word of words){
        // console.log(word)
        if(word.length > longestwrd.length){
            longestwrd = word;
        }
    }
    return longestwrd;
}

console.log(longestWords("I love you sunil"))