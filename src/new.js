function count(array){
    // let array = arr.split(" ")
    let map = new Map();
    for(let i =0; i< array.length;i++){
        if(map.get(array[i])== undefined || 0){
            map.set(array[i],1)
            // console.log(i);
        }else{
            map.set(array[i], map.get(array[i])+1)
        }
    }
    return map;
     
}
const res = count(["ram","jam", "ram", "ram", "kam"])
console.log(res);

// method 2

function countWords(array){
    let count ={};
    array.forEach((element) => {
        if(count[element]){
            count[element]++
        }else{
            count[element] = 1;
        }
    });
    return count;
}
const result = countWords(["ram","jam", "ram", "ram","ram", "kam"])
console.log(result);