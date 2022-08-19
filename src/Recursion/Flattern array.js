// program to flattern array  [1,2, [3,4],[5,6,7,8]] => [1,2,3,4,5,6,7,8]
// let array = ["a" ,"b" ["c",[[[["d","e"]]]]]] => ["a" "b" "c" "d" "e" ]



function flatArr(arr) {
  let flat = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) == false) {
      flat.push(arr[i])
    } else {
      flat = flat.concat(flatArr(arr[i]))
    }
  }
  return flat;

}

const result = flatArr([1, 2, [3, 4], [5, 6, 7, 8]])
console.log(result);