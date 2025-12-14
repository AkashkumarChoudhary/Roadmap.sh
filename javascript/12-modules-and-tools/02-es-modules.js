/**
 * ============================================
 * ES MODULES IN JAVASCRIPT
 * ============================================
 * 
 * WHY ES MODULES?
 * ---------------
 * ES Modules (ES6) are the modern standard:
 * - Official JavaScript module system
 * - Static analysis (better tooling)
 * - Tree shaking (remove unused code)
 * - Works in browsers and Node.js
 * - Better than CommonJS for modern code
 * 
 * WHAT ARE ES MODULES?
 * --------------------
 * Module system using import and export:
 * - export - Export from module
 * - import - Import into module
 * - Static (analyzed at compile time)
 * - Top-level only
 * 
 * KEY CONCEPTS:
 * ------------
 * - Named exports
 * - Default export
 * - Import/export syntax
 * - Static analysis
 */

'use strict';

// ============================================
// NAMED EXPORTS
// ============================================

// Export individual items
// In file: math.js
// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }

// export const PI = 3.14159;

// Export at end of file
// function multiply(a, b) {
//     return a * b;
// }
// export { multiply };

// ============================================
// DEFAULT EXPORT
// ============================================

// Single default export per module
// export default function add(a, b) {
//     return a + b;
// }

// Or
// function add(a, b) {
//     return a + b;
// }
// export default add;

// Export default object/class
// export default class Calculator {
//     add(a, b) { return a + b; }
// }

// ============================================
// NAMED IMPORTS
// ============================================

// Import named exports
// import { add, subtract } from './math.js';

// Import with alias
// import { add as sum, subtract as diff } from './math.js';

// Import all as namespace
// import * as math from './math.js';
// console.log(math.add(5, 3));

// ============================================
// DEFAULT IMPORT
// ============================================

// Import default export
// import add from './math.js';

// Import with alias
// import calculator from './Calculator.js';

// ============================================
// MIXED IMPORTS
// ============================================

// Import default and named
// import add, { subtract, multiply } from './math.js';

// Import default with alias
// import { default as add, subtract } from './math.js';

// ============================================
// RE-EXPORTING
// ============================================

// Re-export from another module
// export { add, subtract } from './math.js';

// Re-export all
// export * from './math.js';

// Re-export default
// export { default } from './math.js';

// ============================================
// DYNAMIC IMPORTS
// ============================================

// Dynamic import (returns promise)
// async function loadModule() {
//     const math = await import('./math.js');
//     console.log(math.add(5, 3));
// }

// Conditional import
// if (condition) {
//     const module = await import('./module.js');
// }

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Math utilities
// math.js
// export function add(a, b) {
//     return a + b;
// }
// export function subtract(a, b) {
//     return a - b;
// }
// export const PI = 3.14159;

// main.js
// import { add, subtract, PI } from './math.js';
// console.log(add(5, 3)); // 8
// console.log(PI); // 3.14159

// Example 2: Default export
// Calculator.js
// export default class Calculator {
//     add(a, b) { return a + b; }
//     subtract(a, b) { return a - b; }
// }

// main.js
// import Calculator from './Calculator.js';
// const calc = new Calculator();
// console.log(calc.add(5, 3)); // 8

// Example 3: Mixed exports
// utils.js
// export function formatDate(date) {
//     return date.toISOString();
// }
// export default function validateEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// main.js
// import validateEmail, { formatDate } from './utils.js';
// console.log(validateEmail("test@example.com"));
// console.log(formatDate(new Date()));

// Example 4: Namespace import
// import * as math from './math.js';
// console.log(math.add(5, 3));
// console.log(math.PI);

// ============================================
// ES MODULES VS COMMONJS
// ============================================

/**
 * ES MODULES:
 * - import/export syntax
 * - Static (analyzed at compile time)
 * - Top-level only
 * - Better tree shaking
 * - Works in browsers
 * - Async loading possible
 * 
 * COMMONJS:
 * - require/module.exports
 * - Dynamic (runtime)
 * - Can be anywhere
 * - Node.js default
 * - Synchronous
 * - Node.js only (traditionally)
 */

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Import hoisting
// import { add } from './math.js';
// console.log(add(5, 3)); // Works (imports hoisted)

// 2. Import must be top-level
// function loadModule() {
//     import { add } from './math.js'; // SyntaxError
// }

// Use dynamic import instead:
// async function loadModule() {
//     const { add } = await import('./math.js');
// }

// 3. File extension required (in some environments)
// import { add } from './math'; // May need .js
// import { add } from './math.js'; // Explicit

// 4. Default export is just a name
// export default function add() {}
// import add from './math.js'; // Can use any name
// import myAdd from './math.js'; // Also works

// 5. Named exports must match
// export { add };
// import { add } from './math.js'; // Must match name
// import { sum } from './math.js'; // Error (unless aliased)

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use named exports for utilities
// ✅ Good: export function helper() {}

// 2. Use default export for main functionality
// ✅ Good: export default class MyClass {}

// 3. Be consistent with export style
// ✅ Good: Choose one style per module

// 4. Use file extensions
// ✅ Good: import from './module.js'

// 5. Use dynamic import for code splitting
// ✅ Good: const module = await import('./module.js')

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Named exports
// export function method1() {}
// export function method2() {}

// Pattern 2: Default export
// export default class MyClass {}

// Pattern 3: Mixed
// export default mainFunction;
// export { helper1, helper2 };

// Pattern 4: Re-export
// export * from './other-module.js';

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a module with named exports
// 2. Import named exports using destructuring
// 3. Create a module with default export
// 4. Import default export
// 5. Create a module with both default and named exports
// 6. Use import aliases to rename imports
// 7. Use namespace import (import * as)
// 8. Re-export from another module
// 9. Use dynamic import for conditional loading
// 10. Explain the difference between ES modules and CommonJS

