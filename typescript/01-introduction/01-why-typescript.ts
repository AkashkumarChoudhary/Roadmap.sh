export { };

/**
 * MODULE 1: INTRODUCTION & SETUP
 * Topic: TypeScript vs JavaScript (Why use TS?)
 * 
 * THEORY:
 * TypeScript is a superset of JavaScript that adds static typing.
 * JavaScript is dynamically typed, meaning types are checked at runtime.
 * TypeScript is statically typed, meaning types are checked at compile time.
 * 
 * Benefits of TypeScript:
 * 1. Early Error Detection: Catch bugs before running the code.
 * 2. Better Tooling: Autocomplete, navigation, and refactoring.
 * 3. Readability: Types serve as documentation.
 * 4. Scalability: Easier to manage large codebases.
 */

// --- CODE: JavaScript (Dynamic Typing) vs TypeScript (Static Typing) ---

// In JavaScript, this is valid (but dangerous):
// let user = "Alice";
// user = 42; // No error until you try to use string methods on a number

// In TypeScript, we define types:
let userName: string = "Alice";

console.log("User Name:", userName);

// --- BAD CODE (Uncomment to see errors) ---

// userName = 42;
// Error: Type 'number' is not assignable to type 'string'.

// function add(a: number, b: number) {
//     return a + b;
// }
// add("1", 2);
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// --- TASK ---
// TODO: Create a variable 'isDone' with a boolean type and try to assign a number to it. Observe the error.
