/**
 * ============================================
 * PROMISES IN JAVASCRIPT
 * ============================================
 * 
 * WHY PROMISES?
 * -------------
 * Promises solve callback hell problems:
 * - Cleaner async code
 * - Better error handling
 * - Chainable operations
 * - Foundation for async/await
 * - Standardized async pattern
 * 
 * WHAT ARE PROMISES?
 * ------------------
 * Objects representing eventual completion/failure of async operation:
 * - Pending: Initial state
 * - Fulfilled: Operation succeeded
 * - Rejected: Operation failed
 * - Settled: Either fulfilled or rejected
 * 
 * KEY METHODS:
 * -----------
 * - .then() - Handle fulfillment
 * - .catch() - Handle rejection
 * - .finally() - Execute regardless
 * - Promise.all() - Wait for all
 * - Promise.race() - Wait for first
 */

'use strict';

// ============================================
// CREATING PROMISES
// ============================================

// Create promise
let promise = new Promise(function(resolve, reject) {
    // Async operation
    setTimeout(() => {
        resolve("Success!"); // Fulfill promise
    }, 100);
});

// Using promise
promise.then(function(result) {
    console.log(result); // "Success!"
});

// ============================================
// PROMISE STATES
// ============================================

// Pending
let pending = new Promise(() => {});
console.log(pending); // Promise { <pending> }

// Fulfilled
let fulfilled = Promise.resolve("Done");
console.log(fulfilled); // Promise { <fulfilled> }

// Rejected
let rejected = Promise.reject("Error");
rejected.catch(() => {}); // Handle to avoid unhandled rejection

// ============================================
// .THEN() - HANDLE FULFILLMENT
// ============================================

// Basic then
Promise.resolve("Hello")
    .then(function(value) {
        console.log(value); // "Hello"
        return value + " World";
    })
    .then(function(value) {
        console.log(value); // "Hello World"
    });

// Chaining promises
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data"), 100);
    });
}

fetchData()
    .then(data => {
        console.log("Received:", data);
        return data.toUpperCase();
    })
    .then(upperData => {
        console.log("Uppercase:", upperData);
    });

// ============================================
// .CATCH() - HANDLE ERRORS
// ============================================

// Catch rejection
Promise.reject("Error occurred")
    .catch(function(error) {
        console.error("Error:", error); // "Error: Error occurred"
    });

// Chaining with catch
Promise.resolve("Start")
    .then(value => {
        throw new Error("Something went wrong");
    })
    .catch(error => {
        console.error("Caught:", error.message);
        return "Recovered";
    })
    .then(value => {
        console.log(value); // "Recovered"
    });

// ============================================
// .FINALLY() - ALWAYS EXECUTE
// ============================================

// Finally executes regardless of outcome
Promise.resolve("Success")
    .then(value => {
        console.log(value);
    })
    .finally(() => {
        console.log("Always runs");
    });

Promise.reject("Error")
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Always runs");
    });

// ============================================
// PROMISE.ALL() - WAIT FOR ALL
// ============================================

// Wait for all promises to resolve
let promise1 = Promise.resolve("First");
let promise2 = Promise.resolve("Second");
let promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
    .then(function(results) {
        console.log(results); // ["First", "Second", "Third"]
    });

// If any promise rejects, all fails
let p1 = Promise.resolve("Success");
let p2 = Promise.reject("Error");
let p3 = Promise.resolve("Success");

Promise.all([p1, p2, p3])
    .then(results => {
        console.log(results); // Never executes
    })
    .catch(error => {
        console.error("Error:", error); // "Error: Error"
    });

// ============================================
// PROMISE.ALLSETTLED() - WAIT FOR ALL (ES2020)
// ============================================

// Wait for all, regardless of success/failure
Promise.allSettled([p1, p2, p3])
    .then(function(results) {
        console.log(results);
        // [
        //   { status: 'fulfilled', value: 'Success' },
        //   { status: 'rejected', reason: 'Error' },
        //   { status: 'fulfilled', value: 'Success' }
        // ]
    });

// ============================================
// PROMISE.RACE() - FIRST TO SETTLE
// ============================================

// Returns first promise to settle (fulfill or reject)
let fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
let slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));

Promise.race([fast, slow])
    .then(function(result) {
        console.log(result); // "Fast" (wins the race)
    });

// ============================================
// PROMISE.ANY() - FIRST TO FULFILL (ES2021)
// ============================================

// Returns first promise to fulfill (ignores rejections)
let reject1 = Promise.reject("Error 1");
let reject2 = Promise.reject("Error 2");
let success = Promise.resolve("Success");

Promise.any([reject1, reject2, success])
    .then(function(result) {
        console.log(result); // "Success" (first to fulfill)
    });

// ============================================
// PROMISE.RESOLVE() AND PROMISE.REJECT()
// ============================================

// Create fulfilled promise
let resolved = Promise.resolve("Value");
resolved.then(value => console.log(value)); // "Value"

// Create rejected promise
let rejected2 = Promise.reject("Error");
rejected2.catch(error => console.error(error)); // "Error"

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Fetch API (simulated)
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "Alice" });
            } else {
                reject(new Error("User not found"));
            }
        }, 100);
    });
}

fetchUser(1)
    .then(user => {
        console.log("User:", user);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

// Example 2: Sequential operations
function step1() {
    return Promise.resolve("Step 1");
}

function step2(data) {
    return Promise.resolve(data + " -> Step 2");
}

function step3(data) {
    return Promise.resolve(data + " -> Step 3");
}

step1()
    .then(step2)
    .then(step3)
    .then(result => {
        console.log(result); // "Step 1 -> Step 2 -> Step 3"
    });

// Example 3: Parallel operations
function fetchUserData(userId) {
    return Promise.resolve({ id: userId, name: "User" });
}

function fetchUserPosts(userId) {
    return Promise.resolve([{ id: 1, title: "Post" }]);
}

function fetchUserComments(userId) {
    return Promise.resolve([{ id: 1, text: "Comment" }]);
}

Promise.all([
    fetchUserData(1),
    fetchUserPosts(1),
    fetchUserComments(1)
])
    .then(([user, posts, comments]) => {
        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    });

// Example 4: Error handling
function riskyOperation() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Success");
        } else {
            reject(new Error("Failed"));
        }
    });
}

riskyOperation()
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Operation complete");
    });

// ============================================
// PROMISE CHAINING
// ============================================

// Each then returns a new promise
Promise.resolve(1)
    .then(value => {
        console.log(value); // 1
        return value + 1;
    })
    .then(value => {
        console.log(value); // 2
        return value * 2;
    })
    .then(value => {
        console.log(value); // 4
        return Promise.resolve(value + 1);
    })
    .then(value => {
        console.log(value); // 5
    });

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Unhandled rejections
// Promise.reject("Error"); // Unhandled promise rejection warning

// Always handle rejections
Promise.reject("Error").catch(() => {});

// 2. Promise constructor executes immediately
console.log("Before promise");
new Promise(resolve => {
    console.log("In promise constructor");
    resolve("Done");
});
console.log("After promise");

// Output:
// Before promise
// In promise constructor
// After promise

// 3. Returning value vs promise
Promise.resolve(1)
    .then(value => value + 1) // Returns 2 (wrapped in promise)
    .then(value => Promise.resolve(value + 1)) // Returns promise
    .then(value => console.log(value)); // 3

// 4. Throwing in then
Promise.resolve(1)
    .then(value => {
        throw new Error("Thrown error");
    })
    .catch(error => {
        console.error(error.message); // "Thrown error"
    });

// 5. Multiple catch handlers
Promise.reject("Error")
    .catch(error => {
        console.log("First catch:", error);
        throw error; // Re-throw
    })
    .catch(error => {
        console.log("Second catch:", error);
    });

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always handle rejections
// ✅ Good: .catch() or try/catch with async/await

// 2. Return promises from functions
// ✅ Good: return new Promise(...)

// 3. Chain promises instead of nesting
// ✅ Good: promise.then().then().then()
// ❌ Bad: promise.then(() => { promise.then(...) })

// 4. Use Promise.all for parallel operations
// ✅ Good: Promise.all([p1, p2, p3])

// 5. Use finally for cleanup
// ✅ Good: .finally(() => cleanup())

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Promise wrapper
function promisify(callback) {
    return new Promise((resolve, reject) => {
        callback((error, result) => {
            if (error) reject(error);
            else resolve(result);
        });
    });
}

// Pattern 2: Timeout wrapper
function withTimeout(promise, timeout) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), timeout)
        )
    ]);
}

// Pattern 3: Retry logic
function retry(operation, maxRetries = 3) {
    return operation().catch(error => {
        if (maxRetries > 0) {
            return retry(operation, maxRetries - 1);
        }
        throw error;
    });
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a promise that resolves with a value
// 2. Create a promise that rejects with an error
// 3. Use .then() to handle a fulfilled promise
// 4. Use .catch() to handle a rejected promise
// 5. Chain multiple .then() calls
// 6. Use Promise.all() to wait for multiple promises
// 7. Use Promise.race() to get the first settled promise
// 8. Create a function that returns a promise
// 9. Handle errors in a promise chain
// 10. Convert a callback-based function to return a promise

