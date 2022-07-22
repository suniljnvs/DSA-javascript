// Replace each elements by diffrence of array size and its frequency of that elements
// [1,2,5,2,2,5,4] ==> [6,4,5,4,4,5,6]

function replace(array){
    let map ={};
    for(let ele of array){
       map[ele] = map[ele]+1 || 1;
ChannelMergerNodex
}

    for (let i = 0 ; i<array.leanth; i++){
       array[i] = array.leanth- map[arr[i]];
    }
    return array;
}

const  result = replace([1,2,5,2,2,5,4]);
console.log(result);