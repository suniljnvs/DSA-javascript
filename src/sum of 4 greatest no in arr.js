
// sum of top 4 greatest number in the array


function bubble(arr){
    let sum =0;
    for(let i=0; i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j] < arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    for(let k=0;k<4;k++){
        sum += arr[k]
    }
    console.log(arr)
    return sum
}
console.log(bubble([12,5,-4,-5,3,2]))