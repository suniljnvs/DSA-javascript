// count divisible pair in array, [1,2,3,4] ==> (1,2),(1,3),(1,4),(2,4)= total 4 pair
 
function countPairs(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]%arr[j]===0 || arr[j]%arr[i]===0){
                count++;
            }
        }
    }
    return count;
}
const res = countPairs([1,2,3,4])
console.log(res);