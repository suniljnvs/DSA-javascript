// reverse the string by words only kth words

// let sentence = " my  name is sunil kumar"
function reverse(str){
    if(str.length<=1) return str
    return reverse(str.slice(1)) + str[0]
}
function reverseSentenceByWord(sentence ,k){
let words= sentence.split(" ");
for(let i=0;i<=k; i++){
    words[i]=reverse(words[i])
    // console.log(words);
}
return words.join(" ");
}
const res = reverseSentenceByWord("my  name is sunil kumar",2);
console.log(res);



// Reverse string of kth element

function reverseStr(s, k) {
let result = "";
for (let i = 0; i < s.length; i += 2*k) {
  let chunk1 = s.substr(i, k);
  // reverse first half
  chunk1 = chunk1.split("").reverse().join("");
  let chunk2 = s.substr(i+k, k);
  result += chunk1 + chunk2;
}
return result;
}
console.log(reverseStr("sunilkumar", 2));
