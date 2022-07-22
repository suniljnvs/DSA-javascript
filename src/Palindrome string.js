//  how to check if a given string is a Palindrome  or not
//  palindrome means ki jb string to revers kare to bhi same string bane ke aaye  like ......

// dad  = dad  => true
// level = level  =. true    121 = 121  like this
// sunil = linus   => false 
// noon  = noon  => true

//========================================================================================
//  case 1

function isPalindrome(str){
    let reverse = str.split("").reverse().join("");
    return str.toLowerCase() === reverse.toLowerCase();
    //console.log(reverse);       
  
  }
  console.log(isPalindrome("level"));
  
  //===========================================================================================
  
  //  case 2
  
  function isPalindrome2(str){
       let newStr = str.toLowerCase();      // string ko lowerCase me chenge krr rhe hh
  
      left =0 ;
      right = newStr.length-1;
  
      while(left<right){
          if(newStr[left] !== newStr[right])  return false ;    // compaire the first and last character
  
          left++ ;
          right--;
      }
      return true ;
  
  }
  console.log(isPalindrome2("Level")); // true
  //console.log(isPalindrome2("sunil"));  // false
  
  //=======================================================================
  
  function isPlr(str){
    if(str.length==1) return true;
    return  (str[0]==str.slice(-1) && isPlr(str.slice(1,-1)))
  }
  
  const abs= isPlr("level")
  console.log(abs);
  
  //=============================================================================
  
  function isPlr2(str){
    if(str.length==1) return true;
      if(str[0]==str.slice(-1)) return   isPlr(str.slice(1,-1))
      else return false
  }
  
  const absc= isPlr2("refe")
  console.log(absc);
  
  ///////////////////////////////////////////////////////////////////////////////
  