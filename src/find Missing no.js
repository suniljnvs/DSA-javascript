//  Find the missing number from sorted array with O(n) complexity


function findMissing(arr){
    let array = arr.sort((a,b)=> a-b) // when array are unsorted
    let missing = [];
    for(let i=0 ; i<array.length-1; i++){
        if(!(array[i+1] - array[i] == 1)){
            missing.push(array[i]+1)
        }
    }
    return missing;
}
const res = findMissing([1,6,8,9]);
console.log(res);  // [ 2, 5, 7 ]