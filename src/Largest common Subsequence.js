function solution(str1, str2) {
    str1 = str1.split('')
    str2 = str2.split('')  
  
    const output = []
  
    for(let i = str1.length -1; i >= 0; i--) {   
      for(let j = str2.length -1; j >= 0; j--) {
        if( str2[j] === str1[i] ) {
          output.push(str2[j]) 
          // console.log(output);
          break
        }      
      } 
  
    }
  
    return output.reverse().join('')
  
  }
  console.log(solution('ABAZDC', 'BACBAD')) 
  