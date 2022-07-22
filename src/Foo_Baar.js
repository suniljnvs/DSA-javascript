// take a number if no is multiple of 3 then return "foo"
// if number are multiple of 5 then return "Baar"
// if number are multiple of 3 and 5 then return "fooBaar"
// if number are not multiple of either no then return "nothing"


function check(nums){
    if( nums%3===0){
        return "foo"
    }else if(nums%5===0 && nums%7 !==0){
        return "Baar"
    }else if (nums%5===0 && nums%7===0){
        return "fooBaar"
    }
}
const res = check(45);
console.log(res);