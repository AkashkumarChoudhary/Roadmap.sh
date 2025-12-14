export { };

/**
 * MODULE 7: CLASSES (OOP)
 * Topic: Inheritance & Polymorphism
 * 
 * THEORY:
 * - `extends`: Create a subclass.
 * - `super`: Call the parent's constructor or methods.
 * - Overriding: Redefining a parent method in the child.
 */

// --- CODE: Inheritance ---

class Animal {
    constructor(public name: string) { }

    makeSound(): void {
        console.log("Generic animal sound");
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name); // Must call super() first in constructor
    }

    // Overriding method
    makeSound(): void {
        console.log("Woof! Woof!");
    }

    fetch(): void {
        console.log(`${this.name} is fetching the ball.`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound(); // "Woof! Woof!" (Polymorphism)
dog.fetch();

// Polymorphism: Treating a Dog as an Animal
const myPet: Animal = new Dog("Rex", "Pug");
myPet.makeSound(); // "Woof! Woof!" (Runtime uses the actual object's method)
// myPet.fetch(); 
// Error: Property 'fetch' does not exist on type 'Animal'.

// --- TASK ---
// TODO: Create a class `Cat` extending `Animal`.
// Override `makeSound` to print "Meow".
// Create an instance and call it.
