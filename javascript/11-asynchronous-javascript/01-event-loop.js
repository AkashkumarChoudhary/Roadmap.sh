/**
 * ============================================
 * THE EVENT LOOP IN JAVASCRIPT
 * ============================================
 * 
 * WHY UNDERSTAND THE EVENT LOOP?
 * -------------------------------
 * The event loop is fundamental to understanding JavaScript:
 * - JavaScript is single-threaded but handles async operations
 * - Explains how callbacks, promises, and async/await work
 * - Critical for debugging async code
 * - Understanding performance and blocking
 * 
 * WHAT IS THE EVENT LOOP?
 * -----------------------
 * JavaScript's concurrency model:
 * - Call Stack: Executes synchronous code
 * - Web APIs: Handle async operations (browser) / C++ APIs (Node.js)
 * - Callback Queue: Holds callbacks waiting to execute
 * - Event Loop: Moves callbacks from queue to stack
 * 
 * KEY CONCEPTS:
 * ------------
 * - Single-threaded execution
 * - Non-blocking I/O
 * - Callback queue
 * - Microtasks vs macrotasks
 */

'use strict';

// ============================================
// CALL STACK
// ============================================

// Call stack executes code synchronously
function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
    third();
}

function third() {
    console.log("Third");
}

first();
// Output:
// First
// Second
// Third

// Stack execution order:
// 1. first() added to stack
// 2. second() added to stack (from first)
// 3. third() added to stack (from second)
// 4. third() executes and removed
// 5. second() completes and removed
// 6. first() completes and removed

// ============================================
// ASYNCHRONOUS OPERATIONS
// ============================================

// setTimeout is asynchronous
console.log("Start");

setTimeout(function() {
    console.log("Timeout callback");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timeout callback

// Even though timeout is 0ms, callback executes after synchronous code

// ============================================
// HOW EVENT LOOP WORKS
// ============================================

// Step 1: Synchronous code executes in call stack
console.log("1. Synchronous");

// Step 2: Async operation registered with Web API
setTimeout(() => {
    console.log("2. Async callback");
}, 0);

// Step 3: More synchronous code
console.log("3. More synchronous");

// Step 4: Call stack empty, event loop moves callback to stack
// Step 5: Callback executes

// ============================================
// CALLBACK QUEUE
// ============================================

// Multiple async operations
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);
setTimeout(() => console.log("Timeout 3"), 0);

console.log("End");

// Output:
// Start
// End
// Timeout 1
// Timeout 2
// Timeout 3

// Callbacks execute in order they were added to queue

// ============================================
// MICROTASKS VS MACROTASKS
// ============================================

// Microtasks (Promise callbacks, queueMicrotask) have higher priority
console.log("Start");

setTimeout(() => console.log("Macrotask (setTimeout)"), 0);

Promise.resolve().then(() => console.log("Microtask (Promise)"));

queueMicrotask(() => console.log("Microtask (queueMicrotask)"));

console.log("End");

// Output:
// Start
// End
// Microtask (Promise)
// Microtask (queueMicrotask)
// Macrotask (setTimeout)

// Microtasks execute before macrotasks

// ============================================
// EVENT LOOP PHASES
// ============================================

// 1. Execute synchronous code (call stack)
// 2. Execute all microtasks (Promise callbacks, queueMicrotask)
// 3. Execute one macrotask (setTimeout, setInterval, I/O)
// 4. Repeat

console.log("1. Sync");

setTimeout(() => console.log("4. Macrotask"), 0);

Promise.resolve().then(() => {
    console.log("2. Microtask");
    Promise.resolve().then(() => console.log("3. Nested Microtask"));
});

// Output:
// 1. Sync
// 2. Microtask
// 3. Nested Microtask
// 4. Macrotask

// ============================================
// BLOCKING THE EVENT LOOP
// ============================================

// Synchronous code blocks the event loop
console.log("Start");

// This blocks - no other code can execute
let start = Date.now();
while (Date.now() - start < 2000) {
    // Busy wait for 2 seconds
}

console.log("End");

// During the while loop, nothing else can execute
// Async callbacks wait in queue

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Understanding execution order
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// Output: A, D, C, B
// Explanation:
// 1. A (synchronous)
// 2. setTimeout registered (Web API)
// 3. Promise.then registered (microtask queue)
// 4. D (synchronous)
// 5. C (microtask - higher priority)
// 6. B (macrotask)

// Example 2: Nested async operations
console.log("1");

setTimeout(() => {
    console.log("2");
    Promise.resolve().then(() => console.log("3"));
    setTimeout(() => console.log("4"), 0);
}, 0);

Promise.resolve().then(() => {
    console.log("5");
    setTimeout(() => console.log("6"), 0);
});

console.log("7");

// Output: 1, 7, 5, 2, 3, 6, 4

// ============================================
// VISUALIZING THE EVENT LOOP
// ============================================

/**
 * EVENT LOOP CYCLE:
 * 
 * ┌─────────────────┐
 * │   Call Stack    │ ← Executes code
 * └────────┬────────┘
 *          │
 *          │ Empty?
 *          ↓
 * ┌─────────────────┐
 * │  Microtask      │ ← Check first (Promise callbacks)
 * │     Queue       │
 * └────────┬────────┘
 *          │
 *          │ Empty?
 *          ↓
 * ┌─────────────────┐
 * │  Macrotask      │ ← Check second (setTimeout, I/O)
 * │     Queue       │
 * └─────────────────┘
 * 
 * Process:
 * 1. Execute call stack until empty
 * 2. Execute all microtasks
 * 3. Execute one macrotask
 * 4. Repeat
 */

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. setTimeout(0) doesn't guarantee immediate execution
setTimeout(() => console.log("Timeout"), 0);
// Other code might execute first

// 2. Infinite microtasks block macrotasks
function infiniteMicrotasks() {
    Promise.resolve().then(() => {
        console.log("Microtask");
        infiniteMicrotasks(); // Creates infinite loop
    });
}

// infiniteMicrotasks(); // Blocks forever, macrotasks never execute

// 3. Long-running synchronous code blocks everything
function longRunning() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    return sum;
}

// During execution, no async callbacks can run

// 4. setImmediate (Node.js) vs setTimeout
// setImmediate: Executes after current phase
// setTimeout: Executes after minimum delay

// 5. process.nextTick (Node.js) - highest priority
// Executes before microtasks

// ============================================
// BEST PRACTICES
// ============================================

// 1. Keep synchronous code short
// ✅ Good: Break long operations into chunks
// ❌ Bad: Long-running synchronous code

// 2. Use microtasks for immediate execution
// ✅ Good: Promise.resolve().then(...)
// ⚠️ Acceptable: setTimeout(..., 0)

// 3. Avoid blocking the event loop
// ✅ Good: Use async operations
// ❌ Bad: Synchronous loops, heavy computations

// 4. Understand execution order
// ✅ Good: Know microtasks vs macrotasks

// 5. Use async/await for cleaner code
// ✅ Good: async/await (covered later)

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Defer execution
function defer(callback) {
    Promise.resolve().then(callback);
}

// Pattern 2: Next tick
function nextTick(callback) {
    queueMicrotask(callback);
}

// Pattern 3: Break up long operations
function processChunk(array, chunkSize, callback) {
    let index = 0;
    
    function process() {
        const chunk = array.slice(index, index + chunkSize);
        chunk.forEach(callback);
        index += chunkSize;
        
        if (index < array.length) {
            setTimeout(process, 0); // Yield to event loop
        }
    }
    
    process();
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create code that demonstrates synchronous execution order
// 2. Use setTimeout to demonstrate asynchronous execution
// 3. Compare execution order of setTimeout vs Promise
// 4. Create nested async operations and observe execution order
// 5. Demonstrate how long synchronous code blocks the event loop
// 6. Use queueMicrotask and compare with setTimeout
// 7. Create code that shows microtasks execute before macrotasks
// 8. Explain the difference between call stack, callback queue, and event loop
// 9. Create a function that yields to the event loop during long operations
// 10. Trace through the execution order of a complex async example

