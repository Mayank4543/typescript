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
    introduce() {
        return `Hi  I m ${this.name} i am ${this.age} years old and my hobbies is${this.hobbies}`;
    }
}
class Student extends Persons {
    grades;
    constructor(names, age, hobbies, grades) {
        super(names, age, hobbies);
        this.grades = grades;
    }
    introduce() {
        return `Hi  I m ${this.name} i am ${this.age} years old and my hobbies is${this.hobbies} MY grade in tenth class is ${this.grades}`;
    }
}
const person1 = new Persons("Mayank", 18, ["singing", "coding"]);
console.log(person1);
const student = new Student("Mayank", 18, ["singing", "coding"], 84);
console.log(student.introduce());
