/**
 * ============================================
 * MEMORY MANAGEMENT IN JAVASCRIPT
 * ============================================
 * 
 * WHY UNDERSTAND MEMORY MANAGEMENT?
 * ----------------------------------
 * Understanding memory helps you:
 * - Write efficient code
 * - Avoid memory leaks
 * - Understand garbage collection
 * - Debug performance issues
 * - Optimize applications
 * 
 * WHAT IS MEMORY MANAGEMENT?
 * --------------------------
 * How JavaScript handles memory:
 * - Automatic garbage collection
 * - Memory allocation
 * - Reference counting
 * - Mark and sweep algorithm
 * - Memory leaks prevention
 * 
 * KEY CONCEPTS:
 * ------------
 * - Stack vs Heap
 * - Garbage collection
 * - Memory leaks
 * - Weak references
 */

'use strict';

// ============================================
// STACK VS HEAP
// ============================================

// Stack: Primitives (small, fixed size)
let num = 42; // Stored in stack
let str = "hello"; // Stored in stack
let bool = true; // Stored in stack

// Heap: Objects (large, dynamic size)
let obj = { name: "Alice" }; // Reference in stack, object in heap
let arr = [1, 2, 3]; // Reference in stack, array in heap

// ============================================
// GARBAGE COLLECTION
// ============================================

// JavaScript automatically frees memory when objects are no longer referenced

// Object becomes eligible for garbage collection
function createObject() {
    let obj = { data: "temporary" };
    return obj;
}

let myObj = createObject();
myObj = null; // Object can be garbage collected

// ============================================
// REFERENCE COUNTING
// ============================================

// Objects are kept alive while referenced
let obj1 = { name: "Object 1" };
let obj2 = obj1; // Both reference same object

obj1 = null; // Object still referenced by obj2
obj2 = null; // Now object can be garbage collected

// ============================================
// CIRCULAR REFERENCES
// ============================================

// Circular references can prevent garbage collection
let obj3 = { name: "A" };
let obj4 = { name: "B" };

obj3.ref = obj4;
obj4.ref = obj3;

obj3 = null;
obj4 = null;
// Objects still reference each other, but modern GC handles this

// ============================================
// MEMORY LEAKS
// ============================================

// Memory leak 1: Global variables
// window.myData = new Array(1000000).fill("data");
// Never garbage collected (global reference)

// Memory leak 2: Event listeners
// function addListener() {
//     const element = document.querySelector('.button');
//     element.addEventListener('click', function() {
//         // Handler keeps element in memory
//     });
// }

// Solution: Remove listeners
// element.removeEventListener('click', handler);

// Memory leak 3: Closures holding references
function createLeak() {
    let largeData = new Array(1000000).fill("data");
    return function() {
        // Closure holds reference to largeData
        console.log("Handler");
    };
}

// Memory leak 4: Timers
// let interval = setInterval(function() {
//     // Keeps references alive
// }, 1000);
// clearInterval(interval); // Clear when done

// ============================================
// WEAK REFERENCES
// ============================================

// WeakMap/WeakSet allow garbage collection
let weakMap = new WeakMap();
{
    let obj = { data: "large" };
    weakMap.set(obj, "metadata");
    // When obj goes out of scope, it can be garbage collected
    // WeakMap entry is automatically removed
}

// Regular Map prevents garbage collection
let map = new Map();
{
    let obj = { data: "large" };
    map.set(obj, "metadata");
    // obj cannot be garbage collected while in Map
}

// ============================================
// BEST PRACTICES
// ============================================

// 1. Remove event listeners
// ✅ Good: element.removeEventListener('click', handler);

// 2. Clear timers
// ✅ Good: clearInterval(interval);

// 3. Null out large objects
// ✅ Good: largeData = null;

// 4. Use WeakMap/WeakSet when appropriate
// ✅ Good: WeakMap for metadata

// 5. Avoid global variables
// ❌ Bad: window.data = largeArray;
// ✅ Good: let data = largeArray; (local scope)

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Explain the difference between stack and heap
// 2. Demonstrate how objects become eligible for garbage collection
// 3. Create a memory leak with global variables
// 4. Create a memory leak with event listeners
// 5. Fix memory leaks by removing references
// 6. Use WeakMap to allow garbage collection
// 7. Explain how closures can cause memory leaks
// 8. Demonstrate clearing timers to prevent leaks
// 9. Explain the mark and sweep garbage collection algorithm
// 10. Create code that properly cleans up resources

