export { };

/**
 * MODULE 3: COMPLEX TYPES & OBJECTS
 * Topic: Type Compatibility (Structural Typing)
 * 
 * THEORY:
 * TypeScript uses "Structural Typing" (Duck Typing).
 * "If it looks like a duck and quacks like a duck, it's a duck."
 * 
 * If Object A has all the properties required by Type B, then A is compatible with B.
 * It doesn't matter if A has *extra* properties (in most cases).
 */

// --- CODE: Structural Typing ---

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`x: ${p.x}, y: ${p.y}`);
}

// 1. Exact match
const p1 = { x: 10, y: 20 };
logPoint(p1); // OK

// 2. Extra properties (Compatible!)
const p2 = { x: 10, y: 20, z: 30 };
logPoint(p2); // OK! p2 has x and y, so it satisfies Point.

// 3. Missing properties (Incompatible)
const p3 = { x: 10 };
// logPoint(p3); 
// Error: Property 'y' is missing.

// NOTE: Object Literal Strictness
// If you pass an object literal *directly*, TS is stricter to prevent typos.
// logPoint({ x: 10, y: 20, z: 30 }); 
// Error: Object literal may only specify known properties. 'z' does not exist in type 'Point'.

// --- TASK ---
// TODO: Create a class `Dog` with a method `bark()`.
// Create an interface `Barker` with a method `bark()`.
// Create a function that takes a `Barker`. Pass an instance of `Dog` to it.
// It works because of structural typing!
