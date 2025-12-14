export { };

/**
 * MODULE 10: TYPE NARROWING
 * Topic: typeof and instanceof
 * 
 * THEORY:
 * "Narrowing" is the process of refining a general type (like `unknown` or `string | number`) 
 * into a more specific type.
 * 
 * 1. `typeof`: For primitives (string, number, boolean, symbol).
 * 2. `instanceof`: For classes.
 */

// --- CODE: typeof ---

function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input; // TS knows padding is number here
    }
    return padding + input; // TS knows padding is string here
}

// --- CODE: instanceof ---

class Dog {
    bark() { console.log("Woof"); }
}

class Cat {
    meow() { console.log("Meow"); }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // OK
    } else {
        animal.meow(); // OK (TS knows it must be Cat)
    }
}

// --- TASK ---
// TODO: Create a function that takes `Date | string`.
// If it's a Date, return `.toISOString()`.
// If it's a string, return it as is.
// Use `instanceof Date`.
