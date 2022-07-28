let str = "abcdefghijklmnopqrstuvwxyz"
let arr = [1, 2, 4, 6]
let res = []
for (let i of arr) {
    let temp = ""
    for (let j = 0; j < i; j++) {
        temp += str[j]
    }
    res.push(temp)
}
console.log(res)

//================================================================
console.log("===============================");
// frequency count of words in string

function freqCount(str){
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
const result = freqCount("Hello wolds hi ram Hello ram ram")
console.log(result);
// output => { 'Hello' => 2, 'wolds' => 1, 'hi' => 1, 'ram' => 3 }
