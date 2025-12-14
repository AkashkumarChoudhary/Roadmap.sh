export { };

/**
 * MODULE 4: COMBINING TYPES
 * Topic: The `keyof` Operator
 * 
 * THEORY:
 * `keyof` takes an object type and produces a string or numeric literal union of its keys.
 * 
 * Example:
 * type P = { x: number, y: number };
 * type PKeys = keyof P; // "x" | "y"
 * 
 * This is extremely useful for creating dynamic and safe APIs (like getting a property from an object).
 */

// --- CODE: keyof ---

interface User {
    id: number;
    name: string;
    email: string;
}

// "id" | "name" | "email"
type UserKeys = keyof User;

function getProperty(obj: User, key: UserKeys) {
    return obj[key];
}

const user: User = { id: 1, name: "Alice", email: "alice@example.com" };

console.log(getProperty(user, "name")); // OK
console.log(getProperty(user, "id"));   // OK

// --- BAD CODE (Uncomment to see errors) ---

// getProperty(user, "password");
// Error: Argument of type '"password"' is not assignable to parameter of type 'keyof User'.

// --- TASK ---
// TODO: Create a function `printProp` that takes a generic object `T` and a key `K extends keyof T`.
// (We haven't done generics yet, but try to copy this pattern):
// function printProp<T, K extends keyof T>(obj: T, key: K) { ... }
// This ensures 'key' is always a valid property of 'obj'.
