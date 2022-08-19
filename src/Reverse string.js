//   write to a program to reverse a string 
// " Hello" => "olleH"
//   hello  =>  reverse("ello")          +h
//          =>  reverse("llo")         +e+h
//          =>   reverse("lo")       +l+e=h
//          =>   reverse("o")      +l+l+e+h
//          =>        o          +o+l+l+e+h

// " Sunil" => " linuS"

// by recursion

// function reverse(str){

//     // base condition 
//     if(str.length<=1) return str;

//     // recursion condition

//     return reverse(str.slice(1)) + str[0]

// }
// const result= reverse("hello");
// console.log(result);




//================================================================
let result1 = 0;
function reverseNumber(num){
    // base condition 
    if(num>0){
        result1 =result1*10 + num % 10 ;
        return reverseNumber(parseInt(num/10))
    }
    return result1 ;
}

const res =reverseNumber(435431);
console.log(res);

//==============================================================

function reverseTheNumber(num ,result=0){
    if(num > 0){
        return reverseTheNumber(parseInt(num/10),result*10 + num % 10)
    }
    return result;
}
const abc =reverseTheNumber(2323467)
console.log(abc);

//=======================================================================

// reverse array by swaping mathod

function reverse(arr){
 let i =0 ;
 let j= arr.length-1
 while(i<j){
    arr[i]= arr[i]+arr[j]; // i=> 1+5 =6
    arr[j]= arr[i]-arr[j]; // j=> 6-5 =1
    arr[i]= arr[i]-arr[j]; // i=> 6-1 =5
    i++
    j--
 }
 return arr

}
const result3=reverse([1,2,3,4,5])
console.log(result3);


function rotateString(arr){
    for(let i =0; i<arr.length;i++){
        let temp = arr[0];
        
    }
}