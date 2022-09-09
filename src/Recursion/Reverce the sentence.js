
function reverse(str){
    if(str.length==0) return ""
    return reverse(str.slice(1)) +str[0]
    
} //  "hello"  => "olleh"   output aayega
function reverseSentWorld(sent){
        let words =sent.split(" ")
        for(let i=0; i<words.length; i++){
            words[i] = reverse(words[i]) 
        }
        return words.join(" ");
    
    }
    const result =reverseSentWorld(" hi to all" )
    console.log(result);