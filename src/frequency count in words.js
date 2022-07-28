// Infosys interview

function freqCountOfWords(str){
    let newStr = str.split(" ");
    let map = new Map();
    // console.log(newStr);
    for(let i=0; i<newStr.length ; i++){
        if(map.get(newStr[i])== undefined){
            map.set(newStr[i],1)
        }else{
            map.set(newStr[i], map.get(newStr[i])+1)
        }
        // console.log(map);
    }
    return map;
   
}
const result = freqCountOfWords("Hello wolds hi ram Hello ram ram")
console.log(result);
// output => { 'Hello' => 2, 'wolds' => 1, 'hi' => 1, 'ram' => 3 }


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
const result1 = countWords(["ram","jam", "ram", "ram","ram", "kam"])
console.log(result1);