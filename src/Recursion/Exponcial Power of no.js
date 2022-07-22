// pow (3,5) = 3*pow(3,4)
//           =  3* 3 * pow(3,3)
//           =  3* 3* 3* pow (3,2)......
//           = 3*3*3*3*3* pow(3,0) 


function power(base,exponencial){
    // base condition
    
        if(exponencial==0) return 1;
    
        // recursion condition 
        return base * power(base,exponencial-1)
    }
    const result = power( 2,6);
    console.log(result);
    
    //=======================================================
    
    
    function pow(b,exp){
        return (exp==0)?1: b*pow(b,exp-1)
        }
        console.log(pow(5,3))