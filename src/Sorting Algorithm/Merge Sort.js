/* Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, 
calls itself for the two halves and then merges the two sorted halves. The major portion 
of the algorithm is given two sorted arrays, and we have to merge them into a single sorted 
array. The whole process of sorting an array of N integers can be summarized into three steps-

1-Divide the array into two halves.
2-Sort the left half and the right half using the same recurring algorithm.
3-Merge the sorted halves.

*/

//==============================================================
function mergeSort(array) {
    if (array.length === 1) return array

    let mid = Math.floor(array.length / 2)   //O(1)
    let left = array.slice(0, mid)           // O(1)
    let right = array.slice(mid)             // O(1)   

    // recursive function for continously cutting array into half
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    // console.log(left + "----"+ right); 
    let res = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i])
            i++
        } else {
            res.push(right[j])
            j++
        }
    }
    while (i < left.length) {
        res.push(left[i])
        i++
    }
    while (j < right.length) {
        res.push(right[j])
        j++
    }
    return res
}

console.log(mergeSort([6,5,4,3,2,1]))
// const abc = mergeSort([6,5,4,3,2,1])
// console.log(abc);
// console.log(abc[3])

