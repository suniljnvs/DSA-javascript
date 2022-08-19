class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

//extends keywords uses the constructor of it's parents class.. .here in the below dog is a child class and the animal is a parent class. .
class Dog extends Animal{
    
} 

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());
