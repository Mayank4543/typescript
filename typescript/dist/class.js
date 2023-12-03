"use strict";
class Persons {
    name;
    age;
    hobbies;
    constructor(names, age, hobbies) {
        this.name = names;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const person1 = new Persons("Mayank", 18, ["singing", "coding"]);
console.log(person1);
