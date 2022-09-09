//  Find the missing number from sorted array with O(n) complexity


// function findMissing(arr){
//     let array = arr.sort((a,b)=> a-b) // when array are unsorted
//     let missing = [];
    
//     for(let i=0 ; i<array.length-1; i++){
//         if(!(array[i+1] - array[i] == 1)){

//             missing.push(array[i]+1)
//         }
//     }
//     return missing;
// }
// const res = findMissing([1,6,8,9]);
// console.log(res);  // [ 2, 5, 7 ]



// function findMissing(arr){
//         let array = arr.sort((a,b)=> a-b) // when array are unsorted
//         let missing = [];
//         let sum =0;
//         for(let i=0 ; i<array.length-1; i++){

//             sum = sum +1
//             if(sum !== arr[i]){
//                 missing.push(sum)
//             }
//         }
//         return missing;
//     }
//     const res = findMissing([1,6,8,9]);
//     console.log(res);  // [ 2, 5, 7 ]



function missing (arr){
    // let array = arr.sort((a,b)=> a-b) 
    arr.sort(function(a,b){
        return a-b;
    })
    let missingNumberCount = 0;
    let missingNumber =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i+1] - arr[i] != 1 ){
            missingNumberCount = arr[i+1] -arr[i] - 1;
            for(j=1; j<=missingNumberCount;j++){
                missingNumber.push(arr[i]+j)
            }
        }
    }
    return missingNumber;
}
console.log(missing([1,5,8,11,14])); //[ 2,  3,  4,  6, 7, 9, 10, 12, 13]
