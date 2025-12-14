/**
 * ============================================
 * INTRODUCTION TO JAVASCRIPT
 * ============================================
 * 
 * WHY LEARN JAVASCRIPT?
 * ---------------------
 * JavaScript is the language of the web. It's the only programming language
 * that runs natively in browsers, making it essential for frontend development.
 * With Node.js, it also powers backend services, making it a full-stack language.
 * 
 * WHAT IS JAVASCRIPT?
 * -------------------
 * JavaScript (JS) is a high-level, interpreted programming language that follows
 * the ECMAScript specification. It's dynamically typed, prototype-based, and
 * supports multiple programming paradigms (procedural, object-oriented, functional).
 * 
 * HISTORY & EVOLUTION
 * -------------------
 * - 1995: Created by Brendan Eich at Netscape (originally called "Mocha", then "LiveScript")
 * - 1997: ECMAScript 1 (ES1) - First standardized version
 * - 2009: ES5 - Added strict mode, JSON support, array methods
 * - 2015: ES6/ES2015 - Major update: let/const, arrow functions, classes, modules, promises
 * - 2016-2023: ES2016-ES2023 - Annual releases with incremental improvements
 * 
 * KEY VERSIONS TO KNOW:
 * - ES5 (2009): Widely supported, baseline for most browsers
 * - ES6/ES2015 (2015): Modern JavaScript foundation
 * - ES2017: Async/await
 * - ES2020: Optional chaining, nullish coalescing
 * - ES2022: Top-level await, class fields
 * 
 * JAVASCRIPT ENGINES
 * ------------------
 * Different browsers use different engines to execute JavaScript:
 * - V8: Chrome, Edge, Node.js
 * - SpiderMonkey: Firefox
 * - JavaScriptCore: Safari
 * 
 * WHERE JAVASCRIPT RUNS
 * ---------------------
 * 1. Browser (Client-side): DOM manipulation, user interactions
 * 2. Node.js (Server-side): Backend APIs, file system operations
 * 3. Mobile Apps: React Native, Ionic
 * 4. Desktop Apps: Electron
 * 
 * JAVASCRIPT CHARACTERISTICS
 * --------------------------
 * - Single-threaded: One call stack, but asynchronous via event loop
 * - Dynamically typed: Types are determined at runtime
 * - Prototype-based: Objects inherit from other objects
 * - First-class functions: Functions are treated as values
 */

// ============================================
// BASIC HELLO WORLD
// ============================================

console.log("Hello, JavaScript!");

// In browser console, you can also use:
// alert("Hello, JavaScript!"); // Shows a popup
// document.write("Hello, JavaScript!"); // Writes to HTML (not recommended)

// ============================================
// JAVASCRIPT IN DIFFERENT ENVIRONMENTS
// ============================================

// Browser environment
console.log("Window object:", typeof window !== 'undefined' ? 'Available' : 'Not available');
console.log("Document object:", typeof document !== 'undefined' ? 'Available' : 'Not available');

// Node.js environment
console.log("Global object:", typeof global !== 'undefined' ? 'Available' : 'Not available');
console.log("Process object:", typeof process !== 'undefined' ? 'Available' : 'Not available');

// ============================================
// STRICT MODE (ES5 FEATURE)
// ============================================
// Strict mode makes JavaScript more secure and helps catch common errors

'use strict';

// In strict mode, this prevents common mistakes:
// let undefinedVariable; // Would throw error if used without declaration

// ============================================
// COMMENTS IN JAVASCRIPT
// ============================================

// Single-line comment

/*
 * Multi-line comment
 * Can span multiple lines
 */

/**
 * JSDoc comment
 * Used for documentation
 * @param {string} name - The name parameter
 * @returns {string} A greeting message
 */

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// JavaScript is case-sensitive
let myVariable = "lowercase";
let MyVariable = "uppercase";
console.log(myVariable !== MyVariable); // true - they're different!

// Semicolons are optional but recommended
let x = 1
let y = 2 // Works, but semicolons are better practice

// JavaScript uses Automatic Semicolon Insertion (ASI)
// This can sometimes cause unexpected behavior:
function returnExample() {
    return
        {
            value: 42
        }
    // Returns undefined! ASI inserts semicolon after 'return'
    // Should be: return { value: 42 };
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO: 
// 1. Write a console.log statement that displays your name and the current year
// 2. Create a variable called 'language' and assign it the value "JavaScript"
// 3. Log a message that says "I'm learning [language] in [current year]"
// 4. Research and log one interesting fact about JavaScript's history

