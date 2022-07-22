/* Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, 
calls itself for the two halves and then merges the two sorted halves. The major portion 
of the algorithm is given two sorted arrays, and we have to merge them into a single sorted 
array. The whole process of sorting an array of N integers can be summarized into three steps-

1-Divide the array into two halves.
2-Sort the left half and the right half using the same recurring algorithm.
3-Merge the sorted halves.

*/


// function mergeSort (arr) {
//     if (arr.length < 2) return arr;
//     var mid = Math.floor(arr.length /2);
//     var subLeft = mergeSort(arr.slice(0,mid));
//     var subRight = mergeSort(arr.slice(mid));
//     return merge(subLeft, subRight);
    
//   }
//   const arr=[23,45,12,1,3,5,67,89,45]
//   mergeSort(arr)
//   console.log(arr);


function mergeSortDown(array){
    if(array.length <= 1){
        return array;
    }

    const mid =Math.floor(array.length / 2);
    const left = array.slice(0,mid)
    const right =array.slice(mid)
// console.log(right);
// console.log(left);
    return mergeSort(mergeSortDown(left), mergeSortDown(right));
}
function mergeSort(left, right){
    const array =[];
    while(left.length && right.length){
        if(left[0]< right[0]){
            array.push(left.shift())
        }else{
            array.push(right.shift())
        }
    }
    return array.concat(left.slice()).concat(right.slice());
}

const result = mergeSortDown([4,8,1,2,5,9,3,6]);
console.log(result);