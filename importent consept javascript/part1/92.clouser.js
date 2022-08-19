// clouser 
//exm -1

let sum = function(a){
   console.log(a)
   var c = 4;
   return function(b){
    return a+b+c;
   }
}

var store = sum(3)
console.log(store(5))


//exm-2

function summ(){
    var name = "sunil";
    function abc(){
        console.log(name)
    }
    abc()
}
summ()


//exm -3

var xyz = function(a,b,c){

    return{
        getTwoSum : function(){
            return a+b;
        },
        getThreeSum : function(){
            return a+b+c;
        }
    }
}
var store = xyz(10,20,30);
console.log(store.getTwoSum())
console.log(store.getThreeSum());