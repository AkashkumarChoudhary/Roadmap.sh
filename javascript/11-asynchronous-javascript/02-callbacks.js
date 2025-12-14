/**
 * ============================================
 * CALLBACKS IN JAVASCRIPT
 * ============================================
 * 
 * WHY CALLBACKS?
 * --------------
 * Callbacks are fundamental to asynchronous JavaScript:
 * - Handle async operations (I/O, timers, events)
 * - Execute code after operation completes
 * - Foundation for promises and async/await
 * - Essential for event-driven programming
 * 
 * WHAT ARE CALLBACKS?
 * -------------------
 * Functions passed as arguments to other functions:
 * - Executed later (asynchronously or synchronously)
 * - Common pattern in JavaScript
 * - Used in: setTimeout, event listeners, array methods, etc.
 * 
 * KEY CONCEPTS:
 * ------------
 * - Higher-order functions
 * - Callback hell
 * - Error handling
 * - Synchronous vs asynchronous callbacks
 */

'use strict';

// ============================================
// BASIC CALLBACKS
// ============================================

// Callback function
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback(); // Execute callback
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!

// ============================================
// INLINE CALLBACKS
// ============================================

// Callback defined inline
greet("Bob", function() {
    console.log("See you later!");
});

// Arrow function callback
greet("Charlie", () => {
    console.log("Take care!");
});

// ============================================
// ASYNCHRONOUS CALLBACKS
// ============================================

// setTimeout uses callback
console.log("Start");

setTimeout(function() {
    console.log("This runs after 1 second");
}, 1000);

console.log("End");

// Output:
// Start
// End
// This runs after 1 second (after delay)

// ============================================
// CALLBACKS IN ARRAY METHODS
// ============================================

// forEach callback
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num * 2);
});

// map callback
let doubled = numbers.map(function(num) {
    return num * 2;
});

// filter callback
let evens = numbers.filter(function(num) {
    return num % 2 === 0;
});

// ============================================
// ERROR-FIRST CALLBACKS
// ============================================

// Node.js convention: error as first parameter
function readFile(filename, callback) {
    // Simulate async file read
    setTimeout(() => {
        if (filename === "error.txt") {
            callback(new Error("File not found"), null);
        } else {
            callback(null, "File content");
        }
    }, 100);
}

// Usage
readFile("data.txt", function(error, data) {
    if (error) {
        console.error("Error:", error.message);
        return;
    }
    console.log("Data:", data);
});

readFile("error.txt", function(error, data) {
    if (error) {
        console.error("Error:", error.message); // "Error: File not found"
        return;
    }
    console.log("Data:", data);
});

// ============================================
// CALLBACK HELL (PYRAMID OF DOOM)
// ============================================

// Nested callbacks become hard to read
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1");
        callback();
    }, 100);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2");
        callback();
    }, 100);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3");
        callback();
    }, 100);
}

// Callback hell - deeply nested
step1(function() {
    step2(function() {
        step3(function() {
            console.log("All steps complete");
            // More nesting...
        });
    });
});

// ============================================
// HANDLING CALLBACK HELL
// ============================================

// Solution 1: Named functions
function handleStep1() {
    step2(handleStep2);
}

function handleStep2() {
    step3(handleStep3);
}

function handleStep3() {
    console.log("All steps complete");
}

step1(handleStep1);

// Solution 2: Promises (covered later)
// Solution 3: Async/await (covered later)

// ============================================
// CALLBACKS WITH PARAMETERS
// ============================================

function processData(data, callback) {
    // Simulate processing
    setTimeout(() => {
        let result = data * 2;
        callback(result);
    }, 100);
}

processData(5, function(result) {
    console.log("Result:", result); // "Result: 10"
});

// Multiple parameters
function calculate(a, b, callback) {
    setTimeout(() => {
        callback(a + b, a * b);
    }, 100);
}

calculate(5, 3, function(sum, product) {
    console.log("Sum:", sum); // "Sum: 8"
    console.log("Product:", product); // "Product: 15"
});

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: API call simulation
function fetchUser(userId, callback) {
    setTimeout(() => {
        if (userId === 1) {
            callback(null, { id: 1, name: "Alice" });
        } else {
            callback(new Error("User not found"), null);
        }
    }, 100);
}

fetchUser(1, function(error, user) {
    if (error) {
        console.error(error);
        return;
    }
    console.log("User:", user);
});

// Example 2: Sequential operations
function getUser(userId, callback) {
    setTimeout(() => callback(null, { id: userId, name: "User" }), 100);
}

function getUserPosts(userId, callback) {
    setTimeout(() => callback(null, [{ id: 1, title: "Post 1" }]), 100);
}

function getUserComments(userId, callback) {
    setTimeout(() => callback(null, [{ id: 1, text: "Comment 1" }]), 100);
}

// Sequential execution
getUser(1, function(error, user) {
    if (error) {
        console.error(error);
        return;
    }
    
    getUserPosts(user.id, function(error, posts) {
        if (error) {
            console.error(error);
            return;
        }
        
        getUserComments(user.id, function(error, comments) {
            if (error) {
                console.error(error);
                return;
            }
            
            console.log("User:", user);
            console.log("Posts:", posts);
            console.log("Comments:", comments);
        });
    });
});

// Example 3: Parallel operations
let results = {};
let completed = 0;
const total = 3;

function checkComplete() {
    completed++;
    if (completed === total) {
        console.log("All operations complete:", results);
    }
}

getUser(1, function(error, user) {
    if (!error) results.user = user;
    checkComplete();
});

getUserPosts(1, function(error, posts) {
    if (!error) results.posts = posts;
    checkComplete();
});

getUserComments(1, function(error, comments) {
    if (!error) results.comments = comments;
    checkComplete();
});

// ============================================
// CALLBACK PATTERNS
// ============================================

// Pattern 1: Success/Error callbacks
function operation(successCallback, errorCallback) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            successCallback("Success!");
        } else {
            errorCallback(new Error("Failed"));
        }
    }, 100);
}

operation(
    function(result) {
        console.log("Success:", result);
    },
    function(error) {
        console.error("Error:", error.message);
    }
);

// Pattern 2: Error-first callback (Node.js style)
function nodeStyleOperation(callback) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            callback(null, "Success");
        } else {
            callback(new Error("Failed"), null);
        }
    }, 100);
}

// Pattern 3: Callback with options
function flexibleOperation(options, callback) {
    setTimeout(() => {
        callback(null, options);
    }, 100);
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Callback not called
function mightNotCall(callback) {
    if (Math.random() > 0.5) {
        callback("Called");
    }
    // Otherwise callback never called - potential bug!
}

// 2. Callback called multiple times
function mightCallMultiple(callback) {
    callback("First");
    callback("Second"); // Called twice!
}

// 3. Callback called synchronously vs asynchronously
function syncCallback(callback) {
    callback("Sync"); // Called immediately
}

function asyncCallback(callback) {
    setTimeout(() => callback("Async"), 0); // Called later
}

// 4. Error in callback
function operationWithCallback(callback) {
    try {
        callback();
    } catch (error) {
        console.error("Callback error:", error);
    }
}

// 5. Callback context (this binding)
let obj = {
    value: "test",
    method: function(callback) {
        callback(); // `this` might not be obj
    }
};

obj.method(function() {
    // console.log(this.value); // undefined (this is global/undefined)
});

// Solution: Arrow function or bind
obj.method(() => {
    // Arrow function preserves `this` from outer scope
});

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always handle errors
// ✅ Good: if (error) { handle error; return; }

// 2. Use error-first convention (Node.js style)
// ✅ Good: callback(error, result)

// 3. Avoid callback hell (use promises/async-await)
// ❌ Bad: Deeply nested callbacks
// ✅ Good: Promises or async/await

// 4. Ensure callback is called
// ✅ Good: Always call callback (success or error)

// 5. Don't call callback multiple times
// ✅ Good: Call callback once

// 6. Document callback signature
// ✅ Good: JSDoc comments

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Error-first callback
function operation(callback) {
    // callback(error, result)
}

// Pattern 2: Success/Error callbacks
function operation2(success, error) {
    // success(result) or error(error)
}

// Pattern 3: Callback with options
function operation3(options, callback) {
    // callback(error, result)
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a function that accepts a callback and calls it
// 2. Use setTimeout with a callback
// 3. Create an error-first callback function
// 4. Demonstrate callback hell with nested callbacks
// 5. Refactor callback hell using named functions
// 6. Create a function that calls callback with multiple parameters
// 7. Handle errors in a callback-based function
// 8. Create sequential async operations using callbacks
// 9. Create parallel async operations using callbacks
// 10. Explain the problems with callbacks and why promises were introduced

