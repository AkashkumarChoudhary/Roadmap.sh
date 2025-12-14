export { };

/**
 * MODULE 4: COMBINING TYPES
 * Topic: Type Aliases
 * 
 * THEORY:
 * We've used `type` before, but let's formalize it.
 * A Type Alias gives a name to any type (primitive, union, intersection, object, etc.).
 * 
 * Unlike Interfaces, Type Aliases can name primitives, unions, and tuples.
 */

// --- CODE: Type Aliases ---

// 1. Primitive Alias
type ID = string;
type Age = number;

// 2. Union Alias
type UserInput = string | number;

// 3. Object Alias
type Point = {
    x: number;
    y: number;
};

// 4. Function Alias
type Callback = (data: string) => void;

function register(cb: Callback) {
    cb("Success");
}

// --- BAD CODE (Uncomment to see errors) ---

// type ID = number; 
// Error: Duplicate identifier 'ID'.

// --- TASK ---
// TODO: Create a type alias `Coordinate` which is a tuple of `[number, number]`.
// Create a function that accepts a `Coordinate` and logs it.
