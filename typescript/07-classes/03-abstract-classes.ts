export { };

/**
 * MODULE 7: CLASSES (OOP)
 * Topic: Abstract Classes
 * 
 * THEORY:
 * An Abstract Class cannot be instantiated directly. It is a blueprint.
 * It can contain:
 * - Abstract methods (must be implemented by subclasses).
 * - Concrete methods (already implemented).
 */

// --- CODE: Abstract Classes ---

abstract class Shape {
    constructor(public color: string) { }

    // Abstract method: No body, just signature
    abstract getArea(): number;

    // Concrete method
    describe(): void {
        console.log(`I am a ${this.color} shape.`);
    }
}

class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }

    // Must implement getArea
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(color: string, public side: number) {
        super(color);
    }

    getArea(): number {
        return this.side * this.side;
    }
}

const myCircle = new Circle("Red", 10);
console.log("Circle Area:", myCircle.getArea());
myCircle.describe();

// --- BAD CODE (Uncomment to see errors) ---

// const shape = new Shape("Blue");
// Error: Cannot create an instance of an abstract class.

// class Triangle extends Shape {
//     // Error: Non-abstract class 'Triangle' does not implement inherited abstract member 'getArea'.
// }

// --- TASK ---
// TODO: Implement the `Triangle` class correctly by adding the `getArea` method.
// (Area = 0.5 * base * height)
