export { };

/**
 * MODULE 2: THE TYPE SYSTEM
 * Topic: Type Inference
 * 
 * THEORY:
 * TypeScript is smart. You don't always need to explicitly write the type.
 * If you initialize a variable, TS will infer its type.
 * 
 * Rule of Thumb: Let inference work for you. Only add types when necessary or for clarity.
 */

// --- CODE: Explicit vs Inferred ---

// Explicit Typing
let ageExplicit: number = 25;

// Type Inference
let ageInferred = 25; // TS knows this is a number

// ageInferred = "25"; // Error: Type 'string' is not assignable to type 'number'.

// Inference with functions
function add(a: number, b: number) {
    return a + b; // TS infers the return type is number
}

const result = add(10, 20); // TS knows result is number

console.log("Result:", result);

// --- BAD CODE (Uncomment to see errors) ---

// let name = "John";
// name = 100;
// Error: Type 'number' is not assignable to type 'string'.

// --- TASK ---
// TODO: Create a variable initialized with a boolean value. 
// Hover over the variable name in your IDE to see if TS inferred it correctly as 'boolean'.
