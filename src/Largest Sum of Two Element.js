//==================================< find the maximum sum of k digit>==========================================================

// sorted array
 //esme hm maximun sum find krr rhe hai k digit ka jo continus ho

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
const res =maxSum([1,20,3,4,6,3,0,9],3)
console.log(res);


// ========================================================================

// Without sorted array

// find the largest sum of largest two element an array ( jaruri nhi hh ki dono element continue ho )
// let arr [34,23,1,43,5,67,12,90]  => [90,67 ] = 90+67=157

// step 1= maintain two variable : largest and secondLargest
// let largest= infinit
// let secondLargest = infinit

// step 2= loop over the array then if number is greater the largest then update 
// " secondLargest : largest and  largest :arr[i]"
// step 3 = else check if arr[i] is greater then secondLargest .... if yes then the update secondLargest

function largeSum(arr){
    let largest = arr[0];
    let secondLargest= arr[0];
    for(let i=0;i<arr.length; i++){
        if(arr[i] >largest){
            secondLargest =largest
            largest = arr[i]
        }else if(arr[i]>secondLargest){
            secondLargest=arr[i]
        }
    }
    return largest+secondLargest

}
const result1= largeSum([2,4,70,25,5,50]); // largest + secondLargest = ( 70+50) =120
console.log(result1);