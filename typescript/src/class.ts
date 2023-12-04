class Persons {
    name: string;
    age: number;
    hobbies: string[];
    constructor(names: string, age: number, hobbies: string[]) {
        this.name = names;
        this.age = age;
        this.hobbies = hobbies;

    }
    introduce(): string {
        return `Hi  I m ${this.name} i am ${this.age} years old and my hobbies is${this.hobbies}`
    }

}
class Student extends Persons {
    grades: number;
    constructor(names: string, age: number, hobbies: string[], grades: number) {
        super(names, age, hobbies);
        this.grades = grades
    }
    introduce(): string {
        return `Hi  I m ${this.name} i am ${this.age} years old and my hobbies is${this.hobbies} MY grade in tenth class is ${this.grades}`
    }
}
const person1: Persons = new Persons("Mayank", 18, ["singing", "coding"]);
console.log(person1)
const student: Student = new Student("Mayank", 18, ["singing", "coding"], 84);
console.log(student.introduce())