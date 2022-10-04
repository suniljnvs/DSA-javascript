// function subArr(arr){
//     let string = "";
//     for(let i=0;i<arr.length;i++){
//         for(let j=i; j<arr.length ; j++ ){
//             string = string + arr[j] +" ";

//         }
//     }
// }



let array = [1,2,3,4];
for(let i=0;i<=array.length;i++){
    if(i===0)
console.log([]);
    for(let left =0; left<array.length;left++){
        for(let right=i;right<array.length;right++){
            console.log(array.slice(left,right+1));
        }
    }
}