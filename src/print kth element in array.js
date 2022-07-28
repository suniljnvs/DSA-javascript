// // Q3. Given an array arr[] and an integer K where K is smaller than size of array, 
// // the task is to find the Kth smallest element in the given array.
// //  It is given that all array elements are distinct.
// // Example 1:
// // Input:
// // N = 6
// // arr[] = 7 10 4 3 20 15
// // K = 3
// // Output : 7
// // Explanation :
// // 3rd smallest element in the given 
// // array is 7.

// // Example 2:
// // Input:
// // N = 5
// // arr[] = 7 10 4 20 15
// // K = 4
// // Output : 15
// // Explanation :
// // 4th smallest element in the given 
// // array is 15.



var k =3;
function findIndexValue(array ){
    
    for(let i = 0; i<array.length; i++){
        for(let j=0 ; j<array.length;j++){
            if(array[j]> array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }  
    }
    return array;
}
const result =findIndexValue([7, 10, 4, 3, 20 ,15] )
console.log(result[k-1]);



