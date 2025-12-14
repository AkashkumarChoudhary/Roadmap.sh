export { };

/**
 * MODULE 12: MODULES & NAMESPACES
 * Topic: ES Modules (Import/Export)
 * 
 * THEORY:
 * This is the modern standard for organizing JS/TS code.
 * - `export`: Expose variables, functions, types.
 * - `import`: Import them in another file.
 * 
 * Note: In this repo, we've been using `export {}` to force files to be modules.
 */

// --- CODE: Exports ---

export const PI = 3.14;

export interface MathConfig {
    precision: number;
}

export function calculateCircumference(radius: number): number {
    return 2 * PI * radius;
}

// Default Export
export default class Calculator {
    add(a: number, b: number) { return a + b; }
}

// --- TASK ---
// TODO: Create a new file `math-utils.ts` (you can do it mentally or actually create it).
// Export a function `square(x: number)`.
// Import it here (commented out) to show syntax:
// import { square } from './math-utils';
