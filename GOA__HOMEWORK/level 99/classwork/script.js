class Animals{
    constructor(name){
        this.name = name;
    }
}


class Dog extends Animals{
    bark(){
        console.log(`${this.name} is barking.`);
    }
}


const newDog = new Dog("Buddy");

newDog.bark();

