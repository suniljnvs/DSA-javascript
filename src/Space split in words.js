function spaceSplit(str){
    // let arr =str.split(" ");
    // for(let ele of arr){
    //     console.log(ele)
    // }

    // 2nd method

    let i=0;
    let j=0;
    while(j !=str.length){
        if(str[j]===" "){
            console.log(str.slice(i,j))
            i=j+1;
        }
        j++
    }
console.log(str.slice(i,j));

}
spaceSplit("Hello World how are you")


