//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

/* Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it. */

function sumToOne(num) {
    if (num < 10) return num;

    const newNum = String(num).split('');
    // const length = nxNum.length;
    let sum = 0;

    for (let i = 0; i < newNum.length; i++) {
        sum = sum + +newNum[i];
       
    }

    return sumToOne(sum);
}

 let result = sumToOne(985);
 console.log(result)

 //============================================================