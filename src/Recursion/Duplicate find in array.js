// print duplicates  element in an array 
//e.g  [23,3,2,1,3,1]
// 3 and 1 are duplicate
// let frequency = {
 //   23:1,
//    3:2
 //   2:1
 //   1:2
//   }

// by Hash Map () 
function duplicates(arr){
    let map = new Map()

    for ( let i=0 ; i< arr.length; i++){
        if(map.get (arr[i])===undefined){
            map.set(arr[i],1);
        }else{
            map.set(arr[i],map.get(arr[i])+1);
        }
    }
    let result=[]
    for(let item of map){
        //item[1] means frequency of item[0] (number)>1 means duplicate occour
        if(item[1]>1){
            //push the repeated number (item[0]=>key of map)
            result.push(item[0])
        }
    }
    return result;
}

const eleDuplicate = duplicates([1,2,3,4,5,6,7,1,2,3,4,3,4]);
console.log(eleDuplicate);

// method 2
// by Object{}

 function findDuplicates(nums) {
    var obj = {};
      var res = [];
      for(let i=0;i<nums.length;i++){
          if(nums[i] in obj === false) obj[nums[i]] = 1;
          else obj[nums[i]]+=1;
          if(obj[nums[i]] === 2) res.push(nums[i]);
      }
      return res;   
  };

  const arr =findDuplicates([2,3,3,4,5,6,7,1,1,2]);
  console.log(arr);
