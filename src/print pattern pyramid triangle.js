// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let n =5;
// let sum =""
// for(let i=1;i<=6;i++){
//     for(let j=1;j<=i;j++){
//         sum = sum + j;
//     }
//     sum =sum+"\n";
// }
// console.log(sum)


// console.log("=========================");

// // Downward Triangle star print
// /*

// *****
// ****
// ***
// **
// *


// */

// let no = 5;
// let string = "";
// for(let i=0;i<=no;i++){
//     for(let j=0;j<no-i ; j++){
//         string += "*"
//     }
//     string =string+"\n"
// }
// console.log(string)



// print square of star


// ****
// ****
// ****
// ****

// let n=4;
// let string = "";

// for(let i=1; i<=n ; i++ ){
//     for(let j=1;j<=n;j++){
//         string = string + "*"
//     }
//     string = string +"\n"
// }
// console.log(string);




//===========================================

// javascript Pyramid pattern

    //      *
    //     ***
    //    *****
    //   *******
    //  *********

let n =5;
let string = "";

for(let i=1;i<=n;i++){  // create no of line

    for(let j=1;j<=n-i; j++){  // create for space
        string += " ";
              
    }
    for(let k=0;k<2*i-1;k++){   // print star (*)
        string += "*";
    }
    string += "\n"  // chenge the line
}
console.log(string)





    //       ****
    //     ***
    //   **
    // *

// let n=5 ;
// let str = "";
// for(let i=1 ;i<n;i++){
//     for(let j=1;j<=n-i;j++){
//         str += "  ";
//     }
//     for(let k=1;k<=n-i;k++){
//         str += "*"
//     }
//     str = str + ("\n")
// }
// console.log(str)