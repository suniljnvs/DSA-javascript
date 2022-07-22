// 1- Write a JS code to print numbers from 1 to 10

function printNumbers() {
    for(var i=1;i<=10;i++){
      console.log(i);
    }
  }
  
  //printNumbers() //1 2 3 4 5 6 7 8 9 10

  // 2- Write a JS code to print a 2D array

  function printArray(arr) {
    for (var i=0;i<arr.length;i++){
      for(var j=0;j<arr[0].length;j++){
        console.log(arr[i][j]);
      }   
    }
  }
  var arr = [[1, 2],
             [3, 4],
             [5, 6]];
  
  //printArray(arr) //1 2 3 4 5 6


  // 3. Write a JS code to print Even numbers in given array

  function printEven(arr) {
    for (var i=0;i<arr.length;i++){
      if(arr[i]%2==0){
        console.log(arr[i]); //print even number
      }  
    }
  }
  var arr = [13,23,12,45,22,48,66,100]
  
  printEven(arr) //12 22 48 66 100



  // for odd no 

  function printOdd(arr) {
    for (var i=0;i<arr.length;i++){
      if(arr[i]%2==1){
        console.log(arr[i]); //print odd number
      }  
    }
  }
  var arr = [13,23,12,45,22,48,66,100]
  
  printOdd(arr) // 13 23 45


  // Write a JS code to delete all occurrence of element in given array

  function deleteElement(arr, ele) {
    for (var i=0;i<arr.length;i++){
      if(arr[i]==ele){
        arr.splice(i,1); //Delete element from array
      }
    }
    return arr;
  }
  var arr = [23,56,4,78,5,63,45,210,56];
  arr = deleteElement(arr, 56)
  
  //console.log(arr); //[23, 4, 78, 5, 63, 45, 210]


  // 6. Write a JS code to find the power of a number using for loop

  function numPower(num,pow) {
    var res=1; //return 1 for pow=0
    for(var i=0;i<pow;i++){
       res=res*num;
    }
    return res;
  }
  //console.log(numPower(4,3)); //64
  //console.log(numPower(16,2)); //256


  // 7. Write a JS code to print a pattern using for loop

  function printPattern(range) {
    for(var i=1;i<=range;i++){
      var str="";
      for(var j=1;j<=i;j++){
        str += j+" ";
      }
      console.log(str);
    }
  }
  //printPattern(8);
  
  /* 1 
     1 2 
     1 2 3 
     1 2 3 4 
     1 2 3 4 5 
     1 2 3 4 5 6 
     1 2 3 4 5 6 7 
     1 2 3 4 5 6 7 8 */


//  Write a JS code to calculate the sum of digits in a number

function digitSum(num) {
    var sum=0;
    while(num!=0){
     sum += num % 10;
     num = Math.floor(num/10);
    }
    return sum;
  }
  //console.log(digitSum(4367)); //20
  //console.log(digitSum(56349)); //27


  // 10. Write a JS code to find the largest number in an array

  var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];  
var largest = arr[0];
for(var i=0;i<arr.length;i++){
   largest = arr[i]>largest ? arr[i]:largest; //Check largest number
}
//console.log(largest) //567


// 12. Write a JS code to find product of two arrays

function findProd(arr1, arr2) {
    var arrProd = arr1.length>arr2.length ? arr1 : arr2;
    for(var i=0; i < Math.min(arr1.length, arr2.length); i++){
       arrProd[i] = arr1[i] * arr2[i]; //Product of 2 array elements
    }
    return arrProd;
  }
  var arr1 = [3,45,23,78,34];
  var arr2 = [4,2,34,4,12,1];
  
  //console.log(findProd(arr1,arr2)); //[12, 90, 782, 312, 408, 1]


  // 13. Write a JS code to print the Fibonacci series for a given value of N

  function fibonacci(n) {
    var n1=0;
    var n2=1;
    var count=2;    
    var n3;
    console.log(n1,n2);
    while(count<n){
     n3=n1+n2;
     console.log(n3); //print current element
     n1=n2;
     n2=n3;
     count++;
    }
  }
  
  //fibonacci(8) //0 1 1 2 3 5 8 13


  // 14. Write a JS code to find N value in the Fibonacci series for a given number

  function findFibonacci(num) {
    var n1=0;
    var n2=1;
    var count=2;
    var n3;
    while(true){
      n3=n1+n2;
      if(n3==num){
         console.log(`Element ${num} is present in index ${count}`)
         break;
       }     
       else if(n3>num){
         console.log("Element not present");
         break;
       }
       n1=n2;
       n2=n3;
       count++;
    }
  }
  
  //findFibonacci(13) //"Element 13 is present in index 7"
  //findFibonacci(144) //"Element 144 is present in index 12"


  // 15. Write a JS code to count all letters in a word

//   var str="Suggesting";
// var count=new Array(26);
// str=str.toLowerCase();
// for(var i=0; i<str.length; i++){
//    if(count[str.charCodeAt(i)-97]){
//      count[str.charCodeAt(i)-97]++; // Increment count
//    }
//    else{
//      count[str.charCodeAt(i)-97]=1; // Add entry
//    }  
// }
// for(var i=0;i<26;i++){
//   if(count[i]){
//     console.log(`Character ${i+'a'} has occured ${count[i]} number of times`);
//     }
// }



//  16. Write a JS code to find duplicate values in a given array

function findDup(arr) {
    var arrDup=[]
    for(var i=0; i<arr.length; i++){
       if(arr.indexOf(arr[i])!=i&&arrDup.indexOf(arr[i])==-1){
         arrDup.push(arr[i]);
       }
    }
    return arrDup;
  }
  var arr = [4,2,34,4,1,12,1,4];
  
 // console.log(findDup(arr)); //[4, 1]
