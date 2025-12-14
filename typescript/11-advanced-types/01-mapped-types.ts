export { };

/**
 * MODULE 11: ADVANCED TYPES
 * Topic: Mapped Types
 * 
 * THEORY:
 * Mapped Types allow you to create a new type by iterating over keys of an existing type.
 * It's like `.map()` for types.
 * 
 * Syntax: `[P in Key]: Type`
 */

// --- CODE: Mapped Types ---

interface User {
    name: string;
    age: number;
}

// Let's re-create 'Readonly' manually
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

type ReadonlyUser = MyReadonly<User>;
// { readonly name: string; readonly age: number; }

// Let's re-create 'Partial' manually
type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

// Modifiers: -readonly, -? (removes readonly or optional)
type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

// --- TASK ---
// TODO: Create a Mapped Type `Booleanify<T>` that converts all properties of T to `boolean`.
// Apply it to `User`.
