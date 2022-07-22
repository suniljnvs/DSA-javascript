// find the pair of that  sum is  zero 

//[-5,-4,-3,-2,0,1,3,4,6,8]     // sorted array
//[ -4 ,4]   -> output

function getSumPairZero(array){
     
    for ( let i =0 ; i< array.length ; i++) {   // o(n)
       //console.log("Inner loop");
       for( let j =1; j<array.length ;j++){     // o(n)
           if ( array[i] + array[j] === 0){      // 2c
           return [array[i] ,array[j]];
           }
       }
   }
}

// o(n^2) quadratic time complexity (becose yha pe 2 baar loop chal rha h)

const result =findSumPair([-5,-4,-3,-2,0,1,3,4,6,8]);
console.log(result);

//====================================================================================
// optimise the code

function findSumPair(array){
   let left =0;
   let right = array.length-1;

   while (left< right){
       sum = array[left] + array[right];
       if (sum ==0){
           return [array[left],array[right]];
       }
       else if (sum >0){
           right -- ;
       }
       else {
           left ++;
       }

   }
}

// o(n)  linear time complxity

const result1 =findSumPair([-5,-4,-3,-2,0,1,3,4,6,8]);
console.log(result1);
