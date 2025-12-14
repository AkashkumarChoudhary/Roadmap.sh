export { };

/**
 * MODULE 5: INTERFACES VS TYPES
 * Topic: Extending Interfaces
 * 
 * THEORY:
 * Interfaces can extend other interfaces using the `extends` keyword.
 * This copies properties from the parent to the child.
 * 
 * You can extend multiple interfaces: `interface C extends A, B { ... }`
 */

// --- CODE: Extending ---

interface Animal {
    name: string;
    eat(): void;
}

interface Dog extends Animal {
    bark(): void;
}

const myDog: Dog = {
    name: "Buddy",
    eat: () => console.log("Eating..."),
    bark: () => console.log("Woof!")
};

// Extending Types?
// Interfaces can also extend Type Aliases (if the type is an object).
type Machine = {
    id: string;
};

interface Robot extends Machine {
    battery: number;
}

// --- BAD CODE (Uncomment to see errors) ---

// interface Cat extends Animal {
//     name: number; 
// }
// Error: Interface 'Cat' incorrectly extends interface 'Animal'.
// Types of property 'name' are incompatible.

// --- TASK ---
// TODO: Create an interface `Vehicle` (speed: number).
// Create an interface `Car` that extends `Vehicle` and adds `wheels: number`.
