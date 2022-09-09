// ["hi" ,"hello" , "ram"]  => ["Hi","Hello" , " Ram"]


//===================================================================


const  arr=["dog" , "hello" , "ram"]
function CapitalizeFristElement(arr , index){
    if(index < arr.length){
        arr[index]= arr[index][0].toUpperCase()+arr[index].slice(1);
        CapitalizeFristElement(arr,index+1);
    }
}

CapitalizeFristElement(arr,0 )  // index 0 means start from 1st element se capital karega
console.log(arr);


//==========================================================================

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