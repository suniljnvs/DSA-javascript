const findVowels = function(str){
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()) {
      if(vowels.includes(char)) {
        count++
      }
    }
    return count
  }
  const res = findVowels("Aneidbr")
  console.log(res)