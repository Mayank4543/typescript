"use strict";
class Person {
    names;
    hobbies;
    _age;
    constructor(names, hobbies) {
        this.names = names;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not defined");
        }
        return this._age;
    }
    introduce() {
        return `Hi  I m ${this.names} i am ${this._age} years old and my hobbies is${this.hobbies}`;
    }
}
const person2 = new Person("Mayank", ["singing", "coding"]);
console.log(person2);
person2.age = 12;
console.log(person2);
