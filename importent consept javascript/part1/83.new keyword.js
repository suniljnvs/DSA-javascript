/* new keyword done 3 things for us :-

=> 1.) it creates an empty object which name is this = {}.so we use this.proportyName instead of functionName.propertyName. . . .
=> 2.) it returns this object{}. so we don't write return at the end. . .
=> 3.) it automatically set the proto to the prototype object. . .
=> 4.) when we use new keyword, then we starting the name of that function with captial letter. . .

*/

// constructor function :- Here the below function construct an object.so it's called as constructor function. . .

function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());