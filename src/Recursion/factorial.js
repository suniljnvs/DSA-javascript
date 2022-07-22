// factorial of 4 =  n*(n-1)*(n-2)*(n-3)

// factorial by Itration / for loop method

function fact(n){
    let result =1 ;
    for(let i=n ; i> 0 ; i--){
         result = result*i;
    }
    return result ;
}
 const abc=fact(5);
 console.log(abc);

//=========================================================

// factorial by recursion 


function factorial(n){
    // base comndition 
    if(n<0){
        return "This is negative no"
    }
    else if(n===0){  // if(n==0||n==1) return 1;
        return 1;
    }else if (n===1){
        return 1;
    }
    // recursion condition 
    return  n*factorial(n-1)
}
const result = factorial(5);
console.log(result);


//==================================================================================

//  Factorial Trailing Zeroes ( count the of the zero at the last of the result)
///Given an integer n, return the number of trailing zeroes in n!.(ye no of zero count karega jo result ke last me rhega bich ke zero ko count nhi karega)

function countZero(n) {
    // base condition 
    
    if(n < 0)    //Negative Number Edge Case
      return -1;
     
    // Initialize result
    let count = 0;
 
    // Keep dividing n by powers of
    // 5 and update count
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        count += Math.floor(n / i);
 
    return count;   
};

const Zero = countZero(20)
console.log(Zero);