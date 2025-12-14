export { };

/**
 * MODULE 5: INTERFACES VS TYPES
 * Topic: Interface Declaration & Merging
 * 
 * THEORY:
 * One unique feature of Interfaces is "Declaration Merging".
 * If you define the same interface multiple times, TypeScript merges them into one.
 * 
 * Type Aliases DO NOT support this (you'll get a duplicate identifier error).
 * 
 * This is why libraries often use Interfaces: so you can extend them (e.g., adding a property to the global `Window` object).
 */

// --- CODE: Declaration Merging ---

interface Box {
    height: number;
    width: number;
}

// ... somewhere else in the code ...

interface Box {
    scale: number;
}

// Now 'Box' has height, width, AND scale.
const box: Box = {
    height: 10,
    width: 20,
    scale: 1
};

console.log(box);

// --- BAD CODE (Uncomment to see errors) ---

// type Shape = { color: string };
// type Shape = { area: number };
// Error: Duplicate identifier 'Shape'.

// --- TASK ---
// TODO: Create an interface `Settings` with `theme: string`.
// Then, re-declare `Settings` to add `notifications: boolean`.
// Create an object that satisfies the merged interface.
