export { };

/**
 * MODULE 4: COMBINING TYPES
 * Topic: Intersection Types
 * 
 * THEORY:
 * An Intersection Type combines multiple types into one.
 * Syntax: `TypeA & TypeB`
 * 
 * The resulting object must have ALL properties from TypeA AND TypeB.
 * It's like "Inheritance" for types.
 */

// --- CODE: Intersection Types ---

interface Draggable {
    drag: () => void;
}

interface Resizable {
    resize: () => void;
}

// Combine them
type UIWidget = Draggable & Resizable;

const widget: UIWidget = {
    drag: () => console.log("Dragging..."),
    resize: () => console.log("Resizing...")
};

// Intersection with Primitives (Rare but possible)
// type Universal = string & number; 
// This results in 'never' because a value cannot be both a string and a number.

// --- BAD CODE (Uncomment to see errors) ---

// const brokenWidget: UIWidget = {
//     drag: () => {}
// };
// Error: Property 'resize' is missing.

// --- TASK ---
// TODO: Create two types: `Person` (name: string) and `Employee` (employeeId: number).
// Create a type `Staff` that is an intersection of both.
// Create an object of type `Staff`.
