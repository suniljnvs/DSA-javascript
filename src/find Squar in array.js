// array1 =[2,4,3,1]  , array2 =[16,4,9,1]



function findSquare(array1, array2){
    
    for(let i=0; i<array1.length; i++){

        let isSquare = false;

        for( let j=0; j<array2.length; j++){
            if(array1[i]*array1[i]=== array2[j]){
                isSquare = true;
            }
            if(j===array2.length-1){
                if(!isSquare){
                    return false;
                }
            }
        }
    }
    return true;
}
const result = findSquare([2,4,3,1] ,[16,4,9,1]);
console.log(result);