// methods :- function inside object. . .

/* This keyword :-

this keyword represents the whole object in which object we use this keyword. . .
if we we it randomly this it return the window object as it is the global object like 11 line. . .
if we use this keyword in person1 object it return the person1 object as like 16-24 line. . .

*/

// console.log(this);


const person1 = {
    firstName: "harsh",
    age: 8,
    about: function () {
        console.log(this)
    }
}

person1.about();

//--------------------------------------------------------------------------------------------------------------------------


function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

// const person1 = {
//     firstName : "harsh",
//     age: 8,
//     about: personInfo
// }
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

 // when the about function call then it will move to the personInfo function then this keyword there represents object which we mentioned before the about method. . .  


