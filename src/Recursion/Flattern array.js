// program to flattern array  [1,2, [3,4],[5,6,7,8]] => [1,2,3,4,5,6,7,8]
// let array = ["a" ,"b" ["c",[[[["d","e"]]]]]] => ["a" "b" "c" "d" "e" ]



function flatArr(arr) {
  let flat = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) == false) {
      flat.push(arr[i])
      // console.log(flat);
    } else {
      flat = flat.concat(flatArr(arr[i]))
      //console.log(flat);
    }
  }
  return flat;

}

const result = flatArr([1, 2, [3, 4], [5, 6, 7, 8],[9,10]])
console.log(result);