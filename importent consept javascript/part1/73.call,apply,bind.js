//call,apply,bind :-

function good(){
    console.log("he is a veryGood boy");
}

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

// use of call :-

good.call() //we can call function like this. . .
about.call() //if we don't pass any arguments then if will return undefined. . . .
about.call(user1,"go","pro")  //we can call function like this also in an object. . .
about.call(user2)


// apply :-
// about.apply(user1, ["guitar", "bach"]); //we have to pass the agruments to the function in  an array otherwise it gives an error. . .


// bind :- whenever we use the bind function then we need to store this into a variable and then call it later. . .if we just apply this function and not stored it into a variable then it doesn't return anything. . .

const func = about.bind(user2, "guitar", "bach");
func();

