export { };

/**
 * MODULE 9: UTILITY TYPES
 * Topic: Exclude, Extract, NonNullable
 * 
 * THEORY:
 * These work on Union Types.
 * 
 * 1. `Exclude<T, U>`: Remove types from T that are assignable to U.
 * 2. `Extract<T, U>`: Extract types from T that are assignable to U.
 * 3. `NonNullable<T>`: Remove null and undefined from T.
 */

// --- CODE: Union Utilities ---

type Status = "success" | "error" | "loading";

// 1. Exclude
type ResultStatus = Exclude<Status, "loading">; // "success" | "error"

// 2. Extract
type OnlyError = Extract<Status, "error" | "fatal">; // "error" ("fatal" is ignored as it's not in Status)

// 3. NonNullable
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>; // string

// --- TASK ---
// TODO: Create a type `Primitive` = string | number | boolean.
// Use `Exclude` to create a type `Numeric` that is just `number` (by excluding string and boolean).
