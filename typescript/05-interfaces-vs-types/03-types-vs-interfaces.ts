export { };

/**
 * MODULE 5: INTERFACES VS TYPES
 * Topic: Types vs Interfaces (When to use which?)
 * 
 * THEORY:
 * They are very similar, but here are the rules of thumb:
 * 
 * Use INTERFACES when:
 * 1. You are defining the shape of an object.
 * 2. You are writing a library and want users to be able to extend your types (merging).
 * 3. You want to use `extends` for readability (OOP style).
 * 
 * Use TYPE ALIASES when:
 * 1. You need Unions (`A | B`) or Intersections (`A & B`).
 * 2. You are defining primitives (`type ID = string`).
 * 3. You are defining tuples (`type Point = [x, y]`).
 * 4. You are using advanced mapped/conditional types.
 * 
 * Summary: Use `interface` for objects/classes, use `type` for everything else.
 */

// --- CODE: Comparison ---

// Intersection (Type) vs Extension (Interface)

// Type way
type A = { a: number };
type B = A & { b: number };

// Interface way
interface IA { a: number; }
interface IB extends IA { b: number; }

// Both result in the same structure: { a: number, b: number }

// --- TASK ---
// TODO: Just read and understand the distinction.
// Try to convert the `B` type alias above into an interface `IB_Alt` without looking at the example.
