// Selection sort
// 0,2,4,6,5,7,3,8,9
// follow step
// 1-Initialize minimum value(min_idx) to location 0
// 2-Traverse the array to find the minimum element in the array
// 3-While traversing if any element smaller than min_idx is found then swap both the values.
// 4-Then, increment min_idx to point to next element
// 5-Repeat until array is sorted


// time complexity is O(n^2)  Quadratic


function SelectionSort(arr){

    for(let i=0; i<arr.length;i++){
        let min= i;  // initialize min value
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[[min]]){
                min=j;    // find min value
            }

        }
        if(i!==min){
            temp=arr[i];  // swap the number
            arr[i]=arr[min];
            arr[min]=temp
        }
    }
    return arr;
}
const result =SelectionSort([3,2,45,8,5,9,21,35])
console.log(result);
