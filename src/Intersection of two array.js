/*
349. Intersection of Two Arrays
Easy

3486

1984

Add to List

Share
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.


Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/




function intersectionofAarry(nums1, nums2) {
    
    let set1 = new Set(nums1);
    let set2 =  new Set(nums2);
    
    let result = [];
    
    for(let i of set2){
        if(set1.has(i)) {
            result.push(i)
        }
    }
    return result ;
    
};

const result = intersectionofAarry([4,9,5],[9,4,9,8,4])
console.log(result);