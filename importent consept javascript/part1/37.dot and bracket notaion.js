// difference between dot and bracket notaion
// In bracket notation we have to write key in quotes otherwise it gives an error. . . .

const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}

console.log(person["person hobbies"]);
person[key] = "harshitvashisth@gmail.com"; // person.email / person["email"] and person[key] all the 3 are same. . .
console.log(person);
