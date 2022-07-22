/* Sum of elements at lower indexes = Sum of elements at higher indexes.
For example, consider the array a[] = {-7, 1, 5, 2, -4, 3, 0}. Here, 
a[0] + a[1] + a[2] = a[4] + a[5] + a[6]. Hence, 3 is the equilibrium 
index.

1-Using two loops.
2-Outer loop iterates through all the element and the inner loop check out whether the current index picked by the outer loop is either equilibrium index or not.
3-The time complexity of this solution is O(n^2).
*/



function equi(arr) {

    if (arr.length == 0) {
        return -1
    };

    let sumArray = 0;
    for (let i = 0; i < arr.length; i++) {
        sumArray = sumArray + arr[i];
    }

    let sumRight = 0;
    for (i = 0; i < arr.length; i++) {
        let sumLeft = sumArray - sumRight - arr[i];
        if (sumRight == sumLeft) {
            return i
        };
        sumRight += arr[i];
    }
    return -1;
}
const res = equi([-7, 1, 5, 2, -4, 3, 0])
console.log(res);