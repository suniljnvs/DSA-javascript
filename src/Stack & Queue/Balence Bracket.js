// stack linear data structure insertion at he end and deletion at the end called ( LIFO ) last in first out

// array.push()    => insertion 
// array.pop()     => deletion

// Balancing the Bracket  [ , { , ( 

    function balancing(str) {
        let stack = [];
    
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "[" || str[i] === "{" || str[i] === "(") {
                stack.push[str[i]]
            }
            if (str[i] === "[") {
                if (stack[stack.length - 1] === "[")
                    stack.pop();
                else {
                    return false;
                }
            }
    
            if (str[i] === "{") {
                if (stack[stack.length - 1] === "{")
                    stack.pop();
                else {
                    return false;
                }
            }
    
            if (str[i] === "(") {
                if (stack[stack.length - 1] === "(")
                    stack.pop();
                else {
                    return false;
                }
            }
        }
        return stack.length ===0;
    }
    
    console.log(balancing(" [(){}()]"))
    
    //=====================================================================
    // 2nd approch 
    // time complexity is O(n)
    
    function bracketBalence(str){
        let stack = [];
         for ( let i =0 ; i< str.length; i++){
            let char = stack[stack.length-1]
            if(str[i]=="(" || str[i]== "[" || str[i]== "{"){
                stack.push(str[i])
            }else if((char=="(" && str[i]== ")") || (char=="[" && str[i]== "]") || 
            (char=="{" && str[i]== "}")){
                stack.pop()
            }else{
                return false
            }
         }
         return stack.length ? false : true
    }
    // const res = bracketBalence("({{(([[((({]))))}}]}}]")
    const res = bracketBalence("[[[()]]]")
    console.log(res)