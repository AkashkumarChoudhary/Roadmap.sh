export { };

/**
 * MODULE 4: COMBINING TYPES
 * Topic: Union Types
 * 
 * THEORY:
 * A Union Type allows a value to be one of several types.
 * Syntax: `TypeA | TypeB`
 * 
 * It's like saying "This value can be a string OR a number".
 * 
 * When using a union, you can only access members that are common to ALL types in the union,
 * unless you narrow the type first.
 */

// --- CODE: Union Types ---

function printId(id: number | string) {
    console.log("Your ID is: " + id);

    // id.toUpperCase(); 
    // Error: Property 'toUpperCase' does not exist on type 'number'.

    // We must narrow the type:
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // OK
    } else {
        console.log(id.toFixed(2)); // OK (must be number here)
    }
}

printId(101);
printId("202");

// Union of Literals
type WindowState = "open" | "closed" | "minimized";
let windowState: WindowState = "open";

// --- BAD CODE (Uncomment to see errors) ---

// windowState = "broken";
// Error: Type '"broken"' is not assignable to type 'WindowState'.

// --- TASK ---
// TODO: Create a function `padLeft` that takes:
// - value: string
// - padding: number | string
// If padding is a number, return spaces + value.
// If padding is a string, return padding + value.
