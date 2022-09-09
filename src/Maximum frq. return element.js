function maxFrequency(arr){
    let map = new Map();
    // if(!arr.length){
    //     return null;

    // }
    let maxFreq=1;
    let maxFreqElem=arr[0];
    for( let i=0; i<arr.length;i++){
        if(map.get(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);

            if(maxFreq < map.get(arr[i])){
                maxFreq=map.get(arr[i]);
                maxFreqElem=arr[i];
            }
        }else{
            map.set(arr[i],1);
        }

    }
    console.log(maxFreqElem + " => " + maxFreq);
}

maxFrequency([1,2,3,4,5,6,7,1,1,1,1,1,2,3,4,5]);