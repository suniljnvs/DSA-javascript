// Divide & Conquerer Technique
//find the index of given number in a sorted array  7
// array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]  => 7 present at the 6 index in array 
// output = 6  ( hme index nikalna h 7 ka )

/*  min =0 ; =. element 1
    max = array.length-1;
    minIndex = ( min + max)/2   , => (0+14)/2 = 7 
    if ( array[midIndex] < number(7))
    min = midIndex + 1 ;
    else if ( array[midIndex] > number(7)) 
    max = midIndex -1 ,   min =0 , max =6 ( 1,2,3,4,5,6,7)
    (min + max)/2    (0+ 6)/2 == 3
    index + 1 => 4(min)  , max =6  ( 5,6,7)
    (min + max)/2 =>   (4+6)/2 = 5 +1 =6(min),   max = 6 ,
    (min + max )/2 = 6   
    array[index] === number  then return midIndex                   */

    function seachIndex(array, number){
        // array must be sorted ager nhi huya aisa to sort karenge pahle
     let min = 0 ; 
     let max = array.length -1;

     while ( min <= max){
        let midIndex = Math.floor(( min + max) / 2)
         if(array[midIndex] < number){
            min = midIndex +1;
         }else if(array[midIndex] > number){
            max = midIndex-1;
         }else{
            return midIndex;
         }
     }
     return -1; 
     
    }

   //  let result = seachIndex([1,2,3,4,5,6,12,13,14,15],6) // sorted array
    let result = seachIndex([1,22,15,6,8,10,12,14],10) // without sorted array
    console.log(result);

    // time complexity  binary  O(logn)

    // time complexity of binary search 
         // best case    O(1)
         // worst case   O(log n)
         // avarage case O(log n)

   //  function binarySearch(arr , start ,end ,num) {
   //    if(end>= start){
   //       mid = Math.round(start+end) /2
   //       if(num== arr[mid]) return mid
   //       else if(num> arr[mid]) return binarySearch(arr ,mid+1 , end ,num) // recursion
   //       else(num<arr[mid]) return binarySearch(arr ,start ,mid-1, num)  // recursion
   //    }
   //    return arr
   //  }     