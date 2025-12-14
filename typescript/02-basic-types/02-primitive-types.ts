export { };

/**
 * MODULE 2: THE TYPE SYSTEM
 * Topic: Primitive Types
 * 
 * THEORY:
 * TypeScript supports all JavaScript primitives:
 * - boolean: true / false
 * - number: Integers, floats, hex, binary (all are 'number')
 * - string: Text
 * - void: Absence of a return value (for functions)
 * - undefined: Not assigned value
 * - null: Intentional absence of value
 */

// --- CODE: Primitives ---

let isActive: boolean = true;
let total: number = 100;
let username: string = "admin";

// Void
function logMessage(msg: string): void {
    console.log(msg);
    // return true; // Error: Type 'boolean' is not assignable to type 'void'.
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// With strictNullChecks: true (which we have enabled),
// you cannot assign null/undefined to other types (unless you use a union, e.g., string | null).
// let myString: string = null; // Error

console.log({ isActive, total, username });

// --- BAD CODE (Uncomment to see errors) ---

// isActive = 1; 
// Error: Type 'number' is not assignable to type 'boolean'.

// --- TASK ---
// TODO: Create a function that takes a name (string) and returns nothing (void).
// Inside, log "Hello, " + name.
