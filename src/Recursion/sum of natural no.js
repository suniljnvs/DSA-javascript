// recursion (function calling itself when sone conditional return or termination )
// if you do not use return or temination  stack over flow comes occure

// stack  is the data struture last in frist out (LIFO)


// sum of natural no 
// 1,2,3,4,5,6,7,8,9.........n

function sumNatural(n){
    // base condition
    if(n===0){
        return "It is not a natural no.";
    }else if(n===1){
        return 1;
    }

    // recursion condition 
    return n + sumNatural(n-1)
}

const result = sumNatural(100);
console.log(result);


//=========================================================

// sum of even no 
// 0,2,4,6,8,10,12 .... n= 7
// n*2-2  + (n-1)*2-2 ........

function sumEven(n){
    // base condition 
    if(n===1){
        return 0;

    }else if( n <= 0 ){
        return "not even no.";
    }
    // recursion condition 
    return n*2-2 + sumEven(n-1);
}

const sumOfEven= sumEven(4);  // 0+2+4+6 === 12
console.log(sumOfEven);