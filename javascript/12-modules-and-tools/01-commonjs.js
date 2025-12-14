/**
 * ============================================
 * COMMONJS MODULES IN JAVASCRIPT
 * ============================================
 * 
 * WHY COMMONJS?
 * -------------
 * CommonJS is Node.js's original module system:
 * - Organize code into reusable modules
 * - Share code between files
 * - Encapsulate functionality
 * - Standard in Node.js ecosystem
 * 
 * WHAT IS COMMONJS?
 * -----------------
 * Module system using require() and module.exports:
 * - require() - Import modules
 * - module.exports - Export from modules
 * - Synchronous loading
 * - Node.js default (before ES modules)
 * 
 * KEY CONCEPTS:
 * ------------
 * - module.exports - Export single value
 * - exports - Shorthand for module.exports
 * - require() - Import module
 * - Module caching - Modules loaded once
 */

'use strict';

// ============================================
// EXPORTING WITH MODULE.EXPORTS
// ============================================

// Export single value
// In file: math.js
// module.exports = function add(a, b) {
//     return a + b;
// };

// Export object
// module.exports = {
//     add: function(a, b) { return a + b; },
//     subtract: function(a, b) { return a - b; }
// };

// Export class
// module.exports = class Calculator {
//     add(a, b) { return a + b; }
// };

// ============================================
// EXPORTING WITH EXPORTS
// ============================================

// exports is shorthand for module.exports
// exports.add = function(a, b) {
//     return a + b;
// };

// exports.subtract = function(a, b) {
//     return a - b;
// };

// Note: Cannot reassign exports
// exports = { add: ... }; // Doesn't work!
// module.exports = { add: ... }; // Works

// ============================================
// IMPORTING WITH REQUIRE()
// ============================================

// Require single export
// const add = require('./math.js');
// console.log(add(5, 3)); // 8

// Require object export
// const math = require('./math.js');
// console.log(math.add(5, 3)); // 8
// console.log(math.subtract(10, 4)); // 6

// Require with destructuring
// const { add, subtract } = require('./math.js');
// console.log(add(5, 3)); // 8

// ============================================
// MODULE CACHING
// ============================================

// Modules are cached after first require
// const module1 = require('./module.js');
// const module2 = require('./module.js');
// console.log(module1 === module2); // true (same instance)

// Module code executes only once
// Even if required multiple times

// ============================================
// BUILT-IN MODULES
// ============================================

// Node.js built-in modules (no path needed)
// const fs = require('fs');
// const path = require('path');
// const http = require('http');
// const os = require('os');

// ============================================
// NPM PACKAGES
// ============================================

// Third-party packages from node_modules
// const express = require('express');
// const lodash = require('lodash');
// const axios = require('axios');

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Math module
// math.js
// module.exports = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => {
//         if (b === 0) throw new Error("Division by zero");
//         return a / b;
//     }
// };

// main.js
// const math = require('./math');
// console.log(math.add(5, 3)); // 8

// Example 2: Class export
// User.js
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     getInfo() {
//         return `${this.name} (${this.email})`;
//     }
// }
// module.exports = User;

// main.js
// const User = require('./User');
// let user = new User("Alice", "alice@example.com");
// console.log(user.getInfo());

// Example 3: Multiple exports
// utils.js
// exports.formatDate = (date) => {
//     return date.toISOString();
// };
// exports.validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// };

// main.js
// const { formatDate, validateEmail } = require('./utils');
// console.log(formatDate(new Date()));
// console.log(validateEmail("test@example.com"));

// ============================================
// MODULE PATTERNS
// ============================================

// Pattern 1: Single function export
// module.exports = function(config) {
//     // Implementation
// };

// Pattern 2: Object export
// module.exports = {
//     method1: function() {},
//     method2: function() {}
// };

// Pattern 3: Class export
// module.exports = class MyClass {
//     // Implementation
// };

// Pattern 4: Mixed exports
// module.exports.method1 = function() {};
// module.exports.method2 = function() {};
// module.exports.constant = "value";

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Cannot reassign exports
// exports = { new: "object" }; // Doesn't work
// module.exports = { new: "object" }; // Works

// 2. Module caching
// First require executes code, subsequent requires return cached version

// 3. Circular dependencies
// File A requires File B, File B requires File A
// Can cause issues - be careful!

// 4. require() is synchronous
// Blocks execution until module loads
// const module = require('./module'); // Blocks here

// 5. File extensions
// require('./module.js'); // Explicit
// require('./module'); // Also works (tries .js, .json, etc.)

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use module.exports for single export
// ✅ Good: module.exports = function() {};

// 2. Use exports for multiple exports
// ✅ Good: exports.method1 = ...; exports.method2 = ...;

// 3. Be consistent in export style
// ✅ Good: Choose one style per module

// 4. Use descriptive module names
// ✅ Good: userService.js, mathUtils.js

// 5. Avoid circular dependencies
// ⚠️ Warning: Can cause unexpected behavior

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Service module
// module.exports = {
//     get: function() {},
//     post: function() {},
//     put: function() {},
//     delete: function() {}
// };

// Pattern 2: Configuration module
// module.exports = {
//     apiUrl: "https://api.example.com",
//     timeout: 5000
// };

// Pattern 3: Utility module
// exports.helper1 = function() {};
// exports.helper2 = function() {};

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a module that exports a single function
// 2. Create a module that exports an object with multiple methods
// 3. Use require() to import a module
// 4. Export a class from a module
// 5. Use destructuring with require()
// 6. Create a module with both named exports and default export
// 7. Explain the difference between module.exports and exports
// 8. Demonstrate module caching by requiring the same module twice
// 9. Create a utility module with helper functions
// 10. Explain when to use CommonJS vs ES modules

