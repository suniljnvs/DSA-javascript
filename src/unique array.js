function unique(array){
    let map ={}
    array.forEach((item) => {
        if(!map[item]){
            map[item] = item;
        }
    }) 
    return Object.values(map)
    
}
const res = unique([1,2,2,2,3,3,3,4,5,3,4,7,8])
console.log(res) //  [ 1, 2, 3, 4, 5, 7, 8]

 