//  Find the missing number from sorted array with O(n) complexity


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
