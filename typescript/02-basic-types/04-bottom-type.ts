export { };

/**
 * MODULE 2: THE TYPE SYSTEM
 * Topic: The "Bottom" Type (never)
 * 
 * THEORY:
 * `never` represents a value that NEVER occurs.
 * It is used for:
 * 1. Functions that throw errors (and never return).
 * 2. Functions that have infinite loops.
 * 3. Exhaustive checks in switch statements (ensuring all cases are handled).
 */

// --- CODE: never ---

// 1. Function that throws
function throwError(message: string): never {
    throw new Error(message);
}

// 2. Infinite loop
function infiniteLoop(): never {
    while (true) { }
}

// 3. Exhaustiveness checking
type Direction = "UP" | "DOWN";

function move(direction: Direction) {
    switch (direction) {
        case "UP":
            console.log("Moving Up");
            break;
        case "DOWN":
            console.log("Moving Down");
            break;
        default:
            // If we handle all cases, 'direction' here should be 'never'.
            // If we add "LEFT" to Direction but forget to handle it, this line will error.
            const _exhaustiveCheck: never = direction;
            break;
    }
}

// --- BAD CODE (Uncomment to see errors) ---

// let x: never = 10;
// Error: Type 'number' is not assignable to type 'never'.

// --- TASK ---
// TODO: Add "LEFT" to the Direction type definition above.
// Observe the error in the default case of the switch statement.
// Then fix it by adding a case for "LEFT".
