export { };

/**
 * MODULE 11: ADVANCED TYPES
 * Topic: Recursive Types
 * 
 * THEORY:
 * Types can reference themselves. This is useful for tree structures, JSON, etc.
 */

// --- CODE: Recursive Types ---

// JSON Type
type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]             // Recursive Array
    | { [key: string]: JSONValue }; // Recursive Object

const data: JSONValue = {
    name: "Alice",
    meta: {
        verified: true,
        ids: [1, 2, 3]
    }
};

// --- TASK ---
// TODO: Create a type `LinkedList<T>` which has:
// - value: T
// - next: LinkedList<T> | null
