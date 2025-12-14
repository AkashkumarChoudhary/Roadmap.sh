export { };

/**
 * MODULE 2: THE TYPE SYSTEM
 * Topic: The "Top" Types (any, unknown)
 * 
 * THEORY:
 * - `any`: Turns off type checking. It allows anything. AVOID using it if possible.
 * - `unknown`: A safer version of `any`. You can assign anything to it, but you can't USE it until you check its type.
 */

// --- CODE: any vs unknown ---

// 1. The 'any' type (The Wild West)
let looseData: any = 10;
looseData = "Hello";
looseData = true;
looseData.foo(); // No error at compile time, but CRASHES at runtime!

// 2. The 'unknown' type (Safe)
let safeData: unknown = 10;
safeData = "Hello";

// safeData.toUpperCase(); 
// Error: 'safeData' is of type 'unknown'. TS prevents us from doing unsafe things.

// We must check the type first (Type Narrowing):
if (typeof safeData === "string") {
    console.log(safeData.toUpperCase()); // Now it works!
}

// --- BAD CODE (Uncomment to see errors) ---

// let val: unknown = 5;
// let num: number = val;
// Error: Type 'unknown' is not assignable to type 'number'.
// (You can assign 'any' to 'number', but not 'unknown')

// --- TASK ---
// TODO: Create a variable of type `unknown` set to a number.
// Try to multiply it by 2. Fix the error by using an `if (typeof ... === 'number')` check.
