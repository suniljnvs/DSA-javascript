// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

const user1 = {
    firstName : "harshit",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}

// here both the function in object are same. . .

user1.about();