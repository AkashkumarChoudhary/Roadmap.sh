/**
 * ============================================
 * DEBUGGING IN JAVASCRIPT
 * ============================================
 * 
 * WHY LEARN DEBUGGING?
 * --------------------
 * Debugging is essential for development:
 * - Find and fix bugs
 * - Understand code execution
 * - Inspect variables and state
 * - Improve code quality
 * - Essential developer skill
 * 
 * WHAT IS DEBUGGING?
 * ------------------
 * Process of finding and fixing errors:
 * - Console methods
 * - Breakpoints
 * - Step through code
 * - Inspect variables
 * - Trace execution
 * 
 * KEY TOOLS:
 * ---------
 * - console methods
 * - Debugger statement
 * - Browser DevTools
 * - Node.js debugger
 */

'use strict';

// ============================================
// CONSOLE METHODS
// ============================================

// console.log() - General logging
console.log("Hello, World!");
console.log("Value:", 42);
console.log("Object:", { name: "Alice", age: 30 });

// console.error() - Error messages
console.error("This is an error message");

// console.warn() - Warnings
console.warn("This is a warning");

// console.info() - Informational messages
console.info("This is informational");

// console.debug() - Debug messages
console.debug("Debug information");

// ============================================
// CONSOLE WITH FORMATTING
// ============================================

// String substitution
console.log("Name: %s, Age: %d", "Alice", 30);
console.log("Object: %o", { name: "Alice" });

// Template literals (preferred)
console.log(`Name: ${"Alice"}, Age: ${30}`);

// ============================================
// CONSOLE.GROUP()
// ============================================

// Group related logs
console.group("User Data");
console.log("Name: Alice");
console.log("Age: 30");
console.log("City: Boston");
console.groupEnd();

// Collapsed group
console.groupCollapsed("Details");
console.log("Hidden by default");
console.groupEnd();

// ============================================
// CONSOLE.TABLE()
// ============================================

// Display data as table
let users = [
    { name: "Alice", age: 30, city: "Boston" },
    { name: "Bob", age: 25, city: "NYC" },
    { name: "Charlie", age: 35, city: "LA" }
];

console.table(users);

// ============================================
// CONSOLE.TIME()
// ============================================

// Measure execution time
console.time("Operation");
// Simulate operation
for (let i = 0; i < 1000000; i++) {
    // Some operation
}
console.timeEnd("Operation"); // Logs: Operation: Xms

// ============================================
// CONSOLE.TRACE()
// ============================================

// Stack trace
function function1() {
    function2();
}

function function2() {
    function3();
}

function function3() {
    console.trace("Trace point");
}

// function1(); // Shows call stack

// ============================================
// CONSOLE.ASSERT()
// ============================================

// Assert condition (only logs if false)
console.assert(1 === 1, "This won't log"); // No output
console.assert(1 === 2, "This will log"); // Logs assertion error

// ============================================
// DEBUGGER STATEMENT
// ============================================

// Pauses execution (if debugger attached)
function debugFunction() {
    let x = 10;
    let y = 20;
    debugger; // Execution pauses here
    let sum = x + y;
    return sum;
}

// debugFunction(); // Pauses at debugger statement

// ============================================
// BREAKPOINTS
// ============================================

// In browser DevTools:
// 1. Open DevTools (F12)
// 2. Go to Sources tab
// 3. Click line number to set breakpoint
// 4. Code pauses at breakpoint
// 5. Inspect variables, step through code

// ============================================
// STEPPING THROUGH CODE
// ============================================

// In debugger:
// - Step Over: Execute current line
// - Step Into: Enter function calls
// - Step Out: Exit current function
// - Continue: Resume execution

// ============================================
// INSPECTING VARIABLES
// ============================================

// In debugger, you can:
// - View variable values
// - Watch expressions
// - Evaluate expressions in console
// - View call stack
// - Inspect scope

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Debugging function
function calculateTotal(items) {
    console.log("Items:", items);
    let total = 0;
    
    for (let item of items) {
        console.log("Processing item:", item);
        total += item.price;
        console.log("Running total:", total);
    }
    
    console.log("Final total:", total);
    return total;
}

// Example 2: Conditional logging
function processData(data) {
    if (process.env.DEBUG) {
        console.log("Processing:", data);
    }
    // Process data
}

// Example 3: Error tracking
function riskyOperation() {
    try {
        // Operation
    } catch (error) {
        console.error("Error occurred:", error);
        console.error("Stack trace:", error.stack);
        throw error;
    }
}

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use appropriate console method
// ✅ Good: console.error() for errors
// ✅ Good: console.log() for general info

// 2. Remove debug code in production
// ✅ Good: Use build tools to strip console

// 3. Use descriptive messages
// ✅ Good: console.log("User data:", user);
// ❌ Bad: console.log("data");

// 4. Use breakpoints for complex debugging
// ✅ Good: Set breakpoints in DevTools

// 5. Use debugger statement sparingly
// ✅ Good: For specific debugging sessions

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Log entry/exit
function myFunction() {
    console.log("Entering myFunction");
    // Code
    console.log("Exiting myFunction");
}

// Pattern 2: Log with context
console.log("[UserService] Fetching user:", userId);

// Pattern 3: Conditional debug
const DEBUG = true;
if (DEBUG) {
    console.log("Debug info");
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use console.log() to output values
// 2. Use console.error() for error messages
// 3. Use console.table() to display array data
// 4. Use console.time() and console.timeEnd() to measure performance
// 5. Use console.group() to organize logs
// 6. Use console.trace() to see call stack
// 7. Use console.assert() to check conditions
// 8. Use debugger statement to pause execution
// 9. Set breakpoints in browser DevTools
// 10. Step through code using debugger controls

