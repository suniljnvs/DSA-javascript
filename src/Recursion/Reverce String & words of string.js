//   write to a program to reverse a string 
// " Hello" => "olleH"
//   hello  =>  reverse("ello")          +h
//          =>  reverse("llo")         +e+h
//          =>   reverse("lo")       +l+e=h
//          =>   reverse("o")      +l+l+e+h
//          =>        o          +o+l+l+e+h

// " Sunil" => " linuS"


function reverse(str){
    // base condition 
    if(str.length<=1) return str;
    // recursion condition
    return reverse(str.slice(1)) + str[0]

}
function reverseSentenceByWord(sentence){
    let words= sentence.split(" ");
    for(let i=0;i<words.length; i++){
        words[i]= reverse(words[i])
        console.log(words[i]);
    }
    return words.join(" ");
}
//console.log(reverseSentenceByWord(sentence));
const res = reverseSentenceByWord("my name is sunil kumar");
console.log(res);