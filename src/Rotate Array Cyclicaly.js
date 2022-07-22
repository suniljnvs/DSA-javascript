// write js program Rotate Cyclically an array

// array = [ 12,3,6,2,9,11] 
// rotate ( array,2) => [9,11,12,3,6,2]

// pahle reverse of whole array [11,9,2,6,3,12]
// then reverse frist two element reverse [9,11    ,2,6,3,12]
// then reverse remaining element in array [ 9 ,11, 12,3,6,2]  final output

//========================================================================
// type 1
// function arrayRotate( arr, numberOfShift){
//     for(let i =0; i< numberOfShift;i++){
//         arr.unshift(arr.pop());
//     }
// }

// function reverseCyclic(arr, numberOfShift){
//  let deletedArray =arr.splice(arr.length-numberOfShift); // [5,6,7]
//  for(let i=0; i<deletedArray.length;i++){
//     arr.splice(i,0,deletedArray[i]); // splice(0,0,5) // (1,0,6)
//  }
//  return deletedArray
// }
// const result = reverseCyclic([1,2,3,4,5,6,7],3)
// console.log(result);


//======================================================================
// type 2
//rotate by anticlock wise

function rotateArr(arr,k){
    for(let i =0 ;i<k ;i++ ){
        let temp =arr[0];
        for(let j=0; j<arr.length;j++){
            arr[j] = arr[j+1];
        }
        arr[arr.length -1] =temp
    }
    return arr;
}
const res = rotateArr([3,2,45,7,8,9,12],3)
console.log(res);


//===================================================================


// rotate by clock wise

function rotteabc(arr,k){
    for( let i =arr.length-1;i>=arr.length-k;i--){
        let temp = arr[arr.length-1];
        
        for(let j=arr.length-1; j>=0;j--){
            arr[j] = arr[j-1];
        }
        arr[0] =temp
    }
    return arr;
}
const abc = rotteabc([3,2,45,7,8,9,12],3)
console.log(abc);