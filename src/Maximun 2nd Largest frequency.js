// second largest frequency number find

function secondLargestFrequency(arr) {
    let map = {};
    for(let ele of arr){
        map[ele] =map[ele]+1 || 1 ;

    }
    // let map = new Map();
    // for (let i = 0; i < arr.length; i++) {
    //     if (map.get(arr[i]) === undefined) map.set(arr[i], 1)
    //     else map.set(arr[i], map.get(arr[i]) + 1)
    // }
    console.log(map);
    let max = 0;
    let prevMax = 0;
    for (let ele in map) {
        if (map[ele] > max) {
            prevMax = max;
            max = map[ele];
        } else if (map[ele] > prevMax) {
            prevMax = map[ele]
        }
    }
    if (prevMax === 0) {
        return "No second number is present"
    }
    for (let ele in map) {
        if (map[ele] === prevMax) {
            return ele;
        }
    }return map;

}

const result = secondLargestFrequency([1, 2,2, 2, 3, 1, 2, 3,  5, 6, 4, 5, 6, 7, 8, 6, 5, 4, 3, 2, 3, 4, 5])
console.log(result);