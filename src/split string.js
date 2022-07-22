let str = "abcdefghijklmnopqrstuvwxyz"
let arr = [1, 2, 4, 6]
let res = []
for (let i of arr) {
    let temp = ""
    for (let j = 0; j < i; j++) {
        temp += str[j]
    }
    res.push(temp)
}
console.log(res)
