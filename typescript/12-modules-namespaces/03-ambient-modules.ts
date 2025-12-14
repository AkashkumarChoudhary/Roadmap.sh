export { };

/**
 * MODULE 12: MODULES & NAMESPACES
 * Topic: Ambient Modules (.d.ts)
 *
 * THEORY:
 * When using a 3rd-party JS library that doesn't have types, you can write a declaration file (`.d.ts`).
 *
 * `declare module "library-name" { ... }`
 */

// --- CODE: Ambient Declaration (Simulation) ---

// Imagine "my-untyped-lib" is a JS package you installed.
// You would put this in a `globals.d.ts` file usually.

// declare module "my-untyped-lib" {
//     export function doSomething(a: string): void;
//     export const version: string;
// }

// NOTE: The above code causes an error in this file because 'my-untyped-lib' doesn't exist.
// In a real project, you would place this in a file named `declarations.d.ts`.

// Then you can import it:
// import { doSomething } from "my-untyped-lib";

// --- TASK ---
// TODO: Imagine you have a library "super-math".
// Write a `declare module "super-math"` block that exports a function `add(a: number, b: number): number`.
