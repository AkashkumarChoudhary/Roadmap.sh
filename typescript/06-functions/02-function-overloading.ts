export { };

/**
 * MODULE 6: FUNCTIONS
 * Topic: Function Overloading
 * 
 * THEORY:
 * Sometimes a function can accept different arguments and return different types.
 * TypeScript allows "Overloading": defining multiple signatures for one function.
 * 
 * Structure:
 * 1. Overload Signature(s) (No implementation)
 * 2. Implementation Signature (Must handle all cases)
 */

// --- CODE: Overloading ---

// Overload Signatures
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// Implementation Signature
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        // Case 2: m, d, y
        return new Date(y, mOrTimestamp - 1, d);
    } else {
        // Case 1: timestamp
        return new Date(mOrTimestamp);
    }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 2023);

console.log(d1);
console.log(d2);

// --- BAD CODE (Uncomment to see errors) ---

// const d3 = makeDate(5, 5);
// Error: No overload expects 2 arguments.

// --- TASK ---
// TODO: Create a function `parseInput` that:
// - Accepts a `string` and returns a `string[]` (splits by comma).
// - Accepts a `number` and returns a `boolean` (true if > 0).
// Implement it using function overloading.
