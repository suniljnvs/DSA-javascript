
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

const myFun = user1.about; 
myFun();
//if we store a function in a variable without using bind method then if we call the function it will return undefined. . .

//----------------------------------------------------------------

//right way to do this:-

const myFunc = user1.about.bind(user1);
myFunc();