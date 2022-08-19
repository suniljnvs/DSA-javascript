//  [2,3,4,5] => 2*3*4*5 = 120
// product of array those element present in array [ 2,3,4,5]= 2*3*4*5=120


function productArr(arr){
    if(arr.length ==1) return arr;
    let product = 1;
    for(let i =0; i<arr.length; i++){
        product = product*arr[i]
    }
    return product;

}
const abc = productArr([3,4,5,10])
console.log(abc);


//================================================

// by using recursion

function productArray(nums){
    // base condition 
    if(nums.length === 0){
        return 1
    }else{   // recursive condition
        return nums[0]*productArray(nums.splice(1))
    }

 }
 const arr= productArray([2,3,4,5])
 console.log(arr);

 //=====================================================================

// By recursion 
// product of digit of given no like(n=234) => 2*3*4=24

function productDigit(num){
    // base condition 
    if(num <10 ){
        return num;
    }
    // recursion condition 
    return num % 10 *productDigit(parseInt(num/10))
}
const result = productDigit(2345)
console.log(result);


//==================================================================
// product of even number 
// frist even no =2
// f(4)=> 2*4*6*8 ==384

function productEven(num){
    // base condition 
    if(num<=0){
        return "Error";

    }else {
        if(num === 1){
            return 2;
        }
    }
    return 2 * num * productEven(num-1)
}
const output = productEven(4)
console.log(output);



let array = [2,3,4,5,6]
 array = array.slice(2,5)
 console.log(array);