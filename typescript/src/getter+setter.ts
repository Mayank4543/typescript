class Person {

    private _age: number | undefined;

    constructor(public names: string, protected hobbies: string[]) {


    }
    public set age(age: number) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid")
        }
        this._age = age
    }
    public get age(): number {
        if (this._age === undefined) {
            throw new Error("age is not defined")
        }
        return this._age;
    }

    introduce(): string {
        return `Hi  I m ${this.names} i am ${this._age} years old and my hobbies is${this.hobbies}`
    }

}

const person2: Person = new Person("Mayank", ["singing", "coding"]);

console.log(person2)
person2.age = 12;
console.log(person2)

