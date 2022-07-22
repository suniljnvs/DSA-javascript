//==================================< find the maximum sum of k digit>==========================================================

arr =[1,2,3,4,5,6,7,8,9]  //esme hm maximun sum find krr rhe hai k digit ka jo continus ho
k=3
//n= arr.length

function maxSum(arr,k){

    if( k > arr.length ) return null;

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