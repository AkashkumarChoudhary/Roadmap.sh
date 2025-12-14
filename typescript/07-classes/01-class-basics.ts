export { };

/**
 * MODULE 7: CLASSES (OOP)
 * Topic: Class Syntax & Constructors
 * 
 * THEORY:
 * TypeScript fully supports ES6 classes and adds type checking for:
 * - Properties
 * - Constructor parameters
 * - Methods
 * 
 * You must initialize properties in the constructor or give them a default value.
 */

// --- CODE: Basic Class ---

class Person {
    // Properties must be declared
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age}.`;
    }
}

const p1 = new Person("Alice", 30);
console.log(p1.greet());

// Parameter Properties (Shorthand)
// You can declare and assign properties directly in the constructor!
class Car {
    constructor(public make: string, public model: string) {
        // No need to write 'this.make = make'
    }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.make);

// --- BAD CODE (Uncomment to see errors) ---

// class Uninitialized {
//     value: number; 
//     // Error: Property 'value' has no initializer and is not definitely assigned in the constructor.
// }

// --- TASK ---
// TODO: Create a class `Rectangle` with `width` and `height`.
// Add a method `getArea()` that returns the area.
// Use the "Parameter Properties" shorthand for the constructor.
