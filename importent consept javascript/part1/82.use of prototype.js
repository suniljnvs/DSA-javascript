// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }

/* Object.create():-

 => it basically creates a __proto__ of that object which written in the documents as [[prototype]]. . .
=> what we will pass in the argument it is created that object's proto. .
=> if we console.log() the object,just after the Object.create() method but before adding any properties into it then it will return empty object({}). . .
=> when we cosole.log()the object's key , if it doesn't exist, then it will check the key in his proto object and if it exists in the proto object, then it will return the value of that key. . .

=> proto and prototype are  not the same. . .they are different. . .but proto and [[prototype]] are same. . .

 */

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1); 
console.log(user1.is18());