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

// time complexity is O(n^2)

//////////////////////////////////////////////////////////////////////

// Optimize the code
// array1 =[2,4,3,1] ,array2 =[16,4,9,1]
// map1 ={ 2:1 ,4:1, 3:1, 1:1}
// map2 ={16:1, 4:1, 9:1, 1:1}

function checkSquare(array1,array2){
let map1={};
let map2={};

for(item of array1){
    map1[item]=(map1[item]||0) + 1 ;
 
}
for(item1 of array2){
    map2[item1]= (map2[item1]||0)+1
}
for(let key in map1){
    if(!map2[key*key]){  // Object key compaire in term of square
        return false;
    }
    if(map1[key] !== map2[key*key]){ // value check
        return false;
    }
}
return true;
}
const res =checkSquare([2,4,3,1],[16,9,4,1])
console.log(res);