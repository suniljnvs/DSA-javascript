// JavaScript program to find minimum number of
// reversals required to balance an expression
  
// Returns count of minimum reversals for making
// expr balanced. Returns -1 if expr cannot be
// balanced.
function countMinReversals( str)
{
    let len = str.length;
    
    // Expressions of odd lengths 
    // cannot be balanced
    if (str.length % 2 != 0) {
        return -1;
    }
    let left_brace = 0, right_brace = 0;
    let ans;
    for (let i = 0; i < str.length; i++) {
        
        // If we find a left bracket then we simply
        // increment the left bracket
        if (str[i] == '{' || str[i]=='(' || str[i]=='[') {
            left_brace++;
        }
        
        // Else if left bracket is 0 then we find
        // unbalanced right bracket and increment
        // right bracket or if the expression
        // is balanced then we decrement left
        else {
            if (left_brace == 0) {
                right_brace++;
            }
            else {
                left_brace--;
            }
        }
    }
    ans = Math.ceil(left_brace / 2) + Math.ceil(right_brace / 2);
    return ans;
}

const res = countMinReversals("}}{{{{")
console.log(res);