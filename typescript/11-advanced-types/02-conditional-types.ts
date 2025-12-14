export { };

/**
 * MODULE 11: ADVANCED TYPES
 * Topic: Conditional Types
 * 
 * THEORY:
 * Conditional Types act like ternary operators for types.
 * 
 * Syntax: `T extends U ? X : Y`
 * "If T is assignable to U, then type is X, otherwise Y."
 */

// --- CODE: Conditional Types ---

type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"

// Useful for extracting types (like `Exclude`)
// (T extends U ? never : T) -> If T is in U, remove it (never), else keep it.
type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<"a" | "b" | "c", "a">; // "b" | "c"

// --- TASK ---
// TODO: Create a conditional type `TypeName<T>` that returns:
// - "string" if T is string
// - "number" if T is number
// - "boolean" if T is boolean
// - "object" otherwise
