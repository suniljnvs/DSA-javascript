//  arr =[23,45,2,46,16,8,6,45,89,65,9]
//  k=3          // sum of 3 digit
  
//  // BASIC WAY

//  let maxSumSoFar =0 or -Infinity
//  let subArr
//  for(i over arr){
//     sum=0
//     for j=i till j=i+k{
//         sum=sum +arr[i]
//     }
//     if( sum> maxSumSoFar){
//         maxSumSoFar=sum
//         subArr = arr[i] to arr[i+k]
//     }
//  }
//  return subArr 


//  //  Psoudocode

//  arr =[23,45,2,46,16,8,6,45,89,65,9]
//  k=3       //[23,45,2] , [45,2,46] ,[2,46,16] ,......ab jis arr ka  sum maximum hoga o print hoga  

//  let maxSumSoFar=0
//  let sum = sum of frist k Number
//  maxSumSoFar=sum

//  for(i over Arr){
//     sum = sum+arr[i+k]-[i-1]
//  }
//  if (sum>maxSumSoFar){
//     update the subsetArray= arr[i] to arr[i+k]
//     update maxSumSoFar=sum
//  }



//==================================< find the maximum sum of k digit>==========================================================

arr =[23,45,2,46,16,8,6,45,89,65,9]  //esme hm maximun sum find krr rhe hai k digit ka jo continus ho
k=3
//n= arr.length

function maxSum(arr,k){

    if(arr.length < k ) return null;

    let max = 0 ;
    let sum = 0 ;

    for(let i = 0 ; i < k ; i++){
        sum = sum + arr[i];
        max = sum ;
    }
    // console.log(max);
    for (let j = k ; j < arr.length ; j++){
        sum = sum +arr[j] -arr[j-k];

        if(sum > max){
            max = sum ;
        }
    }
    return max ;
}

console.log(maxSum(arr,k));