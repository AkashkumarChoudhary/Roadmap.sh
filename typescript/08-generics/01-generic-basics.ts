export { };

/**
 * MODULE 8: GENERICS
 * Topic: Generic Types (The Hard Part made Easy)
 * 
 * THEORY:
 * Generics allow you to write reusable code that works with ANY type, 
 * while still keeping type safety.
 * 
 * Think of `<T>` as a "Type Variable". 
 * When you call the function, you pass a type into `T`.
 */

// --- CODE: Generics ---

// Without Generics (We lose information)
function identityAny(arg: any): any {
    return arg;
}
// const result = identityAny("hello"); // result is 'any'

// With Generics
function identity<T>(arg: T): T {
    return arg;
}

// 1. Explicit Type
const s = identity<string>("Hello"); // s is string

// 2. Type Inference (Common)
const n = identity(123); // n is number (TS infers T is number)

// Generic Interface
interface Box<T> {
    contents: T;
}

const stringBox: Box<string> = { contents: "Gift" };
const numberBox: Box<number> = { contents: 100 };

console.log(stringBox.contents);

// --- BAD CODE (Uncomment to see errors) ---

// const b: Box<number> = { contents: "oops" };
// Error: Type 'string' is not assignable to type 'number'.

// --- TASK ---
// TODO: Create a generic function `wrapInArray<T>` that takes a value of type `T`
// and returns an array `T[]` containing that value.
