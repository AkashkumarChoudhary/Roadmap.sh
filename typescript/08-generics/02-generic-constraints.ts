export { };

/**
 * MODULE 8: GENERICS
 * Topic: Generic Constraints
 * 
 * THEORY:
 * Sometimes you want a generic, but you need to limit what types can be passed.
 * You use `extends` to enforce that `T` must have certain properties.
 */

// --- CODE: Constraints ---

// We want to access .length, but T could be anything (like a number, which has no length).
// So we constrain T to extend { length: number }.

interface Lengthy {
    length: number;
}

function logLength<T extends Lengthy>(arg: T): T {
    console.log("Length:", arg.length);
    return arg;
}

// Works
logLength("Hello"); // string has .length
logLength([1, 2, 3]); // array has .length
logLength({ length: 10, value: "something" }); // object has .length

// --- BAD CODE (Uncomment to see errors) ---

// logLength(123);
// Error: Argument of type 'number' is not assignable to parameter of type 'Lengthy'.

// --- TASK ---
// TODO: Create a function `getProperty<T, K extends keyof T>(obj: T, key: K)`
// This is the safe way to access properties dynamically.
// (We saw this in Module 4, but now you understand the syntax!)
