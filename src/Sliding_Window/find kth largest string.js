function isCurrentWindowValid(count, k) {
    let uniq_curr_char = 0;
    for(let i=0;i<count.length;i++){
        if(count[i]>0){
            uniq_curr_char ++;

        }
    }
    return k>=uniq_curr_char
}

function findKthlargestSubString(str,k = 3) {
    let u_c_count = 0//unique curr char
    let count = []//array contain freq of character
    //a-z(26) indexing if array is 0,1,2 ...

    for (let i = 0; i < 26; i++) {
        count.push(0);
    }
    //console.log('z'.charCodeAt(0))
    for (let i = 0; i < str.length; i++) {
        if (count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]) {
            u_c_count++;
        }
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    if (k > u_c_count) {
        console.log("substring cannot formed")
    }

    //reset the count array =now we are counting window
    for (let i = 0; i < 26; i++) {
        count[i] = 0;
    }
    let start = 0;
    let end = 0
    let max_Window_Size = 1
    let max_Window_start=0
    count[str[0].charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for (let i = 1; i < str.length; i++) {
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;//tracking the charecter present in the current window
        end++//incresing the window size
        
        while(!isCurrentWindowValid(count,k)){
            count[str[start].charCodeAt(0) - 'a'.charCodeAt(0)]--;    
        start++;
    }
    if(end-start+1 > max_Window_Size){
         max_Window_Size = end-start+1
         max_Window_start=start
    }
        //console.log(max_Window_Size, max_Window_start)
    }
}
const res = findKthlargestSubString("absbhbacbabaabqretyu",3)
console.log(res);
