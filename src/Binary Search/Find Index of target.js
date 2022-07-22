// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


function searchIndex(nums, target) {
    
    for(let i = 0;i<nums.length;i++){
        
        if (nums[i] == target){
            return i
        }
        else if (target <= nums[i]){
            return i
        }
    }
    return nums.length
    
};

 const result = searchIndex([ 1,2,3,4,5,6,7], 5)
 console.log(result);