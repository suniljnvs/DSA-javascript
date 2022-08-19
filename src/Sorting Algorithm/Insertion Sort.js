/*  Insertion Sort step-by-step
Insertion Sort works by comparing an element with the elements to its left, until it 
reaches an element that is smaller than it; the element is then inserted in front of
 the smaller element.

1- Pass the unsorted array [5, 2, 4, 6, 1, 3] into Insertion Sort.
2- Start at the second element (2) of the array and compare it with its neighbouring 
              element to the left (5).
3- Is 2 < 5? Yes, so insert 2 into 5’s place => [2, 5, 4, 6, 1, 3]
4- Now move up to the 3rd element (4) and compare with the value to the left (5).
5- Is 4 < 5? Yes, so move to the next element on the left.
6- Is 4 < 2? No, so insert in front of 2 => [2, 4, 5, 6, 1, 3]. As you can see, the numbers in bold are in order.
7- Now move up to the 4th element (6) and compare with the value to the left (5).
8- Is 6 < 5? No, leave where it is => [2, 4, 5, 6, 1, 3].
9- Now move up to the 5th element (1) and compare with the value to the left (6).
10- Is 1 < 6? Yes.
11- Is 1 < 5? Yes.
12 -Is 1 < 4? Yes.
13- Is 1 < 2? Yes. We have reached the beginning of the array, so insert at front => [1, 2, 4, 5, 6, 3].
14- Now move up to 5th element (3) and compare with the value to the left (6).
15- Is 3 < 6? Yes.
16- Is 3 < 5? Yes.
17- Is 3 < 4? Yes.
18- Is 3 < 2? No => Insert after 2 => [1, 2, 3, 4, 5, 6]. The array is now sorted!
*/

// consider 2nd element . arr[i] - start yhi se hoga

function InsertionSort(array){
    for(let i=1; i<array.length; i++){
        let curr = array[i];
        let j = i-1;
        while(j>=0 && array[j]>curr){
            array[j+1]=array[j];
            j--;
        }
        array[j+1]=curr;
    }
    return array;

}
const result= InsertionSort([45,34,12,78,90,65]);
console.log(result);


//==========================================================

function inseSort(arr){
    for(let right =1; right<arr.length;right++){
        let curr = right;
        while(curr>=1 && arr[curr-1]>arr[curr]){
            [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]];
            curr--;
        }
    }
}

const arr=[2,4,11,6,8,1,3,9,23];
inseSort(arr);
console.log(arr);

