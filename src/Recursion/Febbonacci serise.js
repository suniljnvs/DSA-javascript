//  1,1,2,3,5,8,13,21,34,55,89......................
// all element are the sum of last two elwments 

// fibo(5)= fibo(4)+ fibo(3)
// fibo(n) = fibo(n-1) = fibo(n-2)

function fabinacci(n){
    if( n== 0){
        return 0
    }
    if(n==1 || n==2){
        return 1
    }
    return fabinacci(n-1) + fabinacci(n-2)

}
const febi = fabinacci(8);
console.log(febi);

//===================================================

// Running Sum of 1d Array

// [1,2,3,4] => [1, 1+2, 1+2+3, 1+2+3+4]
// Output: [1,3,6,10]
function runningSum(arr){
    let sum =0;
    let array =[];
    for( let i=0; i<arr.length;i++){
        sum = sum+ arr[i];
        array.push(sum)
    }
    return array;
}
const res =runningSum([1,2,3,4])  // Output: [1,3,6,10]
console.log(res);