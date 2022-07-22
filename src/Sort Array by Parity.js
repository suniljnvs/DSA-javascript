//905. Sort Array By Parity

//Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
//Return any array that satisfies this condition.


var sortArrayByParity = function(nums) {
    
    temp = []
    for ( let i=0; i< nums.length; i++){
        if(nums[i] %2 == 0){
            temp.unshift(nums[i])
        }else{
            temp.push(nums[i])
        }
        
    }
    return temp;
};

// or while loop

var sortArrayByParity = function (nums) {
    let start = 0                       // starting element
    let end = nums.length - 1;          //ending element
    while (start < end) {               
        if (nums[start] % 2 !== 0) {    // if number is odd
            nums.push(nums[start]);     //push number at last
            nums.splice(start, 1)       //remove number from the array
            end--;
        }
        else {
            start++;                    //inc. the counter
        }
        
    }
    return nums;
};