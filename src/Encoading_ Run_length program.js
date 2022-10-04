// pass the input str "aabbcxx" then return encoding the str in to "2a2b1c2x"
// write the programe


function runLength(str){
    let ctr = 0;
    let output = '';
    let data = str[0];
    
    for(let i=0; i<str.length; i++){
        if(str[i] == data){
            ctr++;
        }else{
            output += ctr+data;
            data = str[i];
            ctr = 1
        }
    }
    output += ctr+data;
    return output;
}
const res = runLength("wwwooeer")
console.log(res)