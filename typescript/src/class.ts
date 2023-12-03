class Persons {
    name: string;
    age: number;
    hobbies: string[];
    constructor(names: string, age: number, hobbies: string[]) {
        this.name = names;
        this.age = age;
        this.hobbies = hobbies;

    }

}
const person1: Persons = new Persons("Mayank", 18, ["singing", "coding"]);
console.log(person1)