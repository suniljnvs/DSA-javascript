// Find the pairs of array element for which sum is equal to given 
// target value (Two Sum Problem)

function findSum(array,key){
    let arr = [];
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length;j++){ // if j=1 then output [ [ 1, 8 ], [ 3, 6 ], [ 5, 4 ], [ 7, 2 ] ]
            if(array[i]+array[j]!== key){
                j++
            }else{
                arr.push([array[i],array[j]]) 
            }
        }
    }
    return arr;
}
const res = findSum([1,2,3,4,5,6,7,8],9)
console.log(res)  // [ [ 2, 7 ], [ 4, 5 ], [ 6, 3 ], [ 8, 1 ] ]

