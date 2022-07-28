/*
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

*/

var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for(let i =0; i< arr.length; i++){
        for(let j = i; j< arr.length; j += 2){
          for(let k = i; k <= j; k++){
              
                sum += arr[k];
               }
           }
       }
       return sum;
};
const result = sumOddLengthSubarrays([1,4,2,5,3])  // 58
console.log(result);