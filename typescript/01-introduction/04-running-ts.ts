export { };

/**
 * MODULE 1: INTRODUCTION & SETUP
 * Topic: Running TS (tsc, ts-node)
 * 
 * THEORY:
 * There are two main ways to run TypeScript:
 * 
 * 1. Compilation (`tsc`):
 *    - Converts .ts files to .js files.
 *    - You then run the .js files with `node`.
 *    - Good for production.
 * 
 * 2. Execution (`ts-node`):
 *    - Compiles and runs in memory in one step.
 *    - Great for development and learning.
 *    - We will use `ts-node` for most of this course.
 */

// --- CODE: Running this file ---

console.log("If you can see this, you successfully ran the TypeScript code!");

const mathOperation = (a: number, b: number): number => {
    return a * b;
};

console.log("5 * 5 =", mathOperation(5, 5));

// --- TASK ---
// TODO: Run this file using ts-node:
// Command: `npx ts-node 01-introduction/04-running-ts.ts`
