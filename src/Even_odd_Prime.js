// 1. Write a JS code to print Even numbers in given array

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


  // for prime no
 let Number= 4;
 var isPrimeNumber = true;

  for(let i=2 ;i<Number; i++){
    if(Number % i ==0 ){
      isPrimeNumber= false ;
    }
   
  }
if(isPrimeNumber == true){
  console.log(`${Number} is a prime no `);

}else{
  console.log(`${Number} is a not prime no`);
}
