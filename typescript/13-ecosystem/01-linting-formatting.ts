export { };

/**
 * MODULE 13: ECOSYSTEM
 * Topic: Linting (ESLint) & Formatting (Prettier)
 * 
 * THEORY:
 * 1. ESLint: Analyzes your code for potential errors and style violations.
 *    - TypeScript has `typescript-eslint`.
 *    - It catches things like "unused variables", "any usage", etc.
 * 
 * 2. Prettier: An opinionated code formatter.
 *    - It handles indentation, quotes, spacing, etc.
 *    - You stop arguing about style in code reviews.
 * 
 * Setup:
 * - `npm install -D eslint prettier`
 * - `.eslintrc.json`
 * - `.prettierrc`
 */

// --- CODE: Linting Examples ---

// ESLint would complain about this (unused variable):
const unused = 10;

// ESLint would complain about this (explicit any):
function doSomething(arg: any) {
    console.log(arg);
}

// Prettier would auto-format this ugly line:
// const x={a:1,b:2}; 
// -> const x = { a: 1, b: 2 };

// --- TASK ---
// TODO: Install the "ESLint" and "Prettier" extensions in your VS Code.
// They will highlight errors and format your code on save.
