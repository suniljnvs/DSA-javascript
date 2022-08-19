// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1);

// In this arrow function inside the object the "this keyword" does not work as the normal function. . .in this function the "this keyword"represents the window object. . . .