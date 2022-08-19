// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

for(let i of users){   // For of loop i is equal to for loop users[i]
    console.log(i);
}

for(let i of users){
    console.log(i.firstName);
}
