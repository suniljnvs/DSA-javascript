// Bubble sort := are most simplest and popular
// arr= [ 34,23,65,78,98,1,12,90 ] = [1,12,23,34,65,78,90,98]
// check the element adjesent element ( ye apne bagal bagal wale ko compaire karta hh aur swap kar deta hh)

function bubbleSort2(arr){
    if(arr.length<=1) return arr;
    for( let i =arr.length;i>0;i--){  // i-- esliye kiye hh kyuki last wala element har baar large  hota jayega esliye ek baar i km karte jayenge
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
              
            }
        }
       
    }return arr
}
const result = bubbleSort2([ 34,23,65,78,98,1,12,90 ]);
console.log(result);

// time complexity is O(n^2)


// optimise tarieke se

function bubbleSort1(arr){
    if(arr.length==1) return arr;
    for( let i =arr.length;i>0;i--){  // i-- esliye kiye hh kyuki last wala element har baar large  hota jayega esliye ek baar i km karte jayenge
        let isSwap ;
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                isSwap=true; // ager ek bhi swap nhi huya to break laga denge
            }
        }
        if(!isSwap){
            break;
        }
    }return arr
}
const result1 = bubbleSort1([ 3,4,5,6,65,78,98,1,12,90 ]);
console.log(result1);

// sort array in decending order

function bubbleSort(arr){
    if(arr.length<=1) return arr;
    for( let i =arr.length;i>0;i--){  // i-- esliye kiye hh kyuki last wala element har baar large  hota jayega esliye ek baar i km karte jayenge
        for(let j=arr.length-1;j>=0;j--){
            if(arr[j]> arr[j-1]){
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
              
            }
        }
       
    }return arr;
}
const result2 = bubbleSort([ 34,23,65,78,98,1,12,90 ]);
console.log(result2);