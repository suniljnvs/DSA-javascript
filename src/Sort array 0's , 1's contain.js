// sort the array an input containing 0's and 1's in array 

// its solution are only one itretions 
// its solution are optimise 

function sort01(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        while (arr[left] == 0 && left < right) {
            left++;
        }
        while (arr[right] == 1 && left < right) {
            right--;
        }

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    }
    return arr;

}
const arr= [0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1];
sort01(arr);
console.log(arr);

//==========================================================
// if x's and o's are both counting numbers are same then return true ; otherwise return false;
// only pass the value in string x and o   like "xxooxo"
function match(str){
    let count =0;
    for(let i=0;i<str.length;i++){
        if(str[i] == 'x') return count++;
        if(str[i] == 'o') return count--;
        
    }
    if(count > 0 || count < 0){
        return "false";
    }else{
        return "true";
    }
    
}
const res = match("xxooxo");
console.log(res)