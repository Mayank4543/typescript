"use strict";
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculatearea() {
        return Math.PI * this.radius * this.radius;
    }
    displayarea = () => {
        console.log(`This is  ${this.color} circle with radius ${this.radius}`);
    };
}
const circle = new Circle("red", 5);
console.log(circle.calculatearea());
circle.displayarea();
