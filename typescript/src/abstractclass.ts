abstract class Shape {
    constructor(protected color: string) { }
    abstract calculatearea(): number;
    abstract displayarea: () => void;
}
class Circle extends Shape {
    constructor(protected color: string, protected radius: number) {
        super(color);
    }
    calculatearea(): number {
        return Math.PI * this.radius * this.radius
    }
    displayarea: () => void = (): void => {
        console.log(`This is  ${this.color} circle with radius ${this.radius}`)
    };
}
const circle = new Circle("red", 5);
console.log(circle.calculatearea())
circle.displayarea()