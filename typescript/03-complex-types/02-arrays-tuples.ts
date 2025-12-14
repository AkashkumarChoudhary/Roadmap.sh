export { };

/**
 * MODULE 3: COMPLEX TYPES & OBJECTS
 * Topic: Arrays and Tuples
 * 
 * THEORY:
 * - Arrays: Lists of values of the same type.
 *   Syntax: `type[]` or `Array<type>`.
 * 
 * - Tuples: Fixed-length arrays where each element has a specific type.
 *   Useful for returning multiple values from a function or specific data structures (like coordinates).
 */

// --- CODE: Arrays ---

// Syntax 1
let numbers: number[] = [1, 2, 3, 4];

// Syntax 2 (Generic)
let names: Array<string> = ["Alice", "Bob"];

// --- CODE: Tuples ---

// A tuple with exactly 3 elements: string, number, boolean
let userRecord: [string, number, boolean];

userRecord = ["Alice", 25, true];

// Accessing tuple elements
const userName = userRecord[0]; // string
const userAge = userRecord[1];  // number

// --- BAD CODE (Uncomment to see errors) ---

// numbers.push("5");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// userRecord = [25, "Alice", true];
// Error: Type 'number' is not assignable to type 'string'. (Order matters!)

// userRecord[3] = "Extra";
// Error: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.

// --- TASK ---
// TODO: Create a tuple `RGB` that holds three numbers (red, green, blue).
// Initialize it with the color red (255, 0, 0).
