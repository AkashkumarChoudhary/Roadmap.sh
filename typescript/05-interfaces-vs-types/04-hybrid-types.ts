export { };

/**
 * MODULE 5: INTERFACES VS TYPES
 * Topic: Hybrid Types
 * 
 * THEORY:
 * In JavaScript, functions are objects. They can have properties.
 * TypeScript allows us to define "Hybrid Types" to describe this.
 * 
 * Example: A function that also acts as an object with properties (like `jQuery` or `axios`).
 */

// --- CODE: Hybrid Types ---

interface Counter {
    (start: number): string; // Callable signature
    interval: number;        // Property
    reset(): void;           // Method
}

function getCounter(): Counter {
    const counter = function (start: number) {
        return "Started at " + start;
    } as Counter; // Assertion needed because we are building it step-by-step

    counter.interval = 123;
    counter.reset = function () {
        console.log("Resetting...");
    };

    return counter;
}

const c = getCounter();
c(10); // Call as function
c.reset(); // Call method
c.interval = 5; // Access property

// --- TASK ---
// TODO: Create a hybrid type `Greeter` that:
// 1. Is a function taking a `name: string` and returning `void`.
// 2. Has a property `greeting: string`.
// Implement it.
