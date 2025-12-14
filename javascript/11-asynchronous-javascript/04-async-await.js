/**
 * ============================================
 * ASYNC/AWAIT IN JAVASCRIPT
 * ============================================
 * 
 * WHY ASYNC/AWAIT?
 * ----------------
 * Async/await (ES2017) makes asynchronous code look synchronous:
 * - Cleaner than promises
 * - Easier to read and write
 * - Better error handling with try/catch
 * - Sequential-looking code
 * - Built on promises
 * 
 * WHAT IS ASYNC/AWAIT?
 * --------------------
 * Syntactic sugar over promises:
 * - async: Marks function as asynchronous
 * - await: Waits for promise to resolve
 * - Returns promise
 * - Can use try/catch for errors
 * 
 * KEY CONCEPTS:
 * ------------
 * - async functions always return promises
 * - await pauses execution until promise settles
 * - Errors thrown become rejected promises
 * - Can await any thenable (promise-like)
 */

'use strict';

// ============================================
// ASYNC FUNCTIONS
// ============================================

// async function always returns a promise
async function asyncFunction() {
    return "Hello";
}

let result = asyncFunction();
console.log(result); // Promise { <fulfilled> }

result.then(value => {
    console.log(value); // "Hello"
});

// ============================================
// AWAIT KEYWORD
// ============================================

// await pauses execution until promise resolves
async function fetchData() {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve("Data"), 100);
    });
    
    let result = await promise; // Wait for promise
    console.log(result); // "Data"
    
    return result;
}

fetchData();

// ============================================
// AWAIT WITH PROMISES
// ============================================

// await works with any promise
async function example() {
    let value = await Promise.resolve("Resolved");
    console.log(value); // "Resolved"
    
    // Can await multiple times
    let value2 = await Promise.resolve("Second");
    console.log(value2); // "Second"
}

example();

// ============================================
// ERROR HANDLING WITH TRY/CATCH
// ============================================

// Use try/catch for error handling
async function riskyOperation() {
    try {
        let result = await Promise.reject("Error occurred");
        return result;
    } catch (error) {
        console.error("Caught error:", error); // "Caught error: Error occurred"
        return "Default value";
    }
}

riskyOperation().then(value => {
    console.log(value); // "Default value"
});

// ============================================
// SEQUENTIAL VS PARALLEL
// ============================================

// Sequential (one after another)
async function sequential() {
    let result1 = await fetchData1(); // Wait for this
    let result2 = await fetchData2(); // Then wait for this
    return [result1, result2];
}

// Parallel (at the same time)
async function parallel() {
    let promise1 = fetchData1(); // Start both
    let promise2 = fetchData2(); // Start both
    let result1 = await promise1; // Wait for first
    let result2 = await promise2; // Wait for second
    return [result1, result2];
}

// Or use Promise.all
async function parallelWithAll() {
    let [result1, result2] = await Promise.all([
        fetchData1(),
        fetchData2()
    ]);
    return [result1, result2];
}

// Helper functions
function fetchData1() {
    return Promise.resolve("Data 1");
}

function fetchData2() {
    return Promise.resolve("Data 2");
}

// ============================================
// ASYNC FUNCTION EXPRESSIONS
// ============================================

// Arrow function
const asyncArrow = async () => {
    return await Promise.resolve("Arrow");
};

// Function expression
const asyncExpression = async function() {
    return await Promise.resolve("Expression");
};

// Method in object
let obj = {
    async method() {
        return await Promise.resolve("Method");
    }
};

// ============================================
// AWAIT IN LOOPS
// ============================================

// Sequential processing
async function processSequential(items) {
    let results = [];
    for (let item of items) {
        let result = await processItem(item); // Wait for each
        results.push(result);
    }
    return results;
}

// Parallel processing
async function processParallel(items) {
    let promises = items.map(item => processItem(item));
    return await Promise.all(promises);
}

function processItem(item) {
    return Promise.resolve(`Processed ${item}`);
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Fetch user data
async function getUserData(userId) {
    try {
        let user = await fetchUser(userId);
        let posts = await fetchUserPosts(userId);
        let comments = await fetchUserComments(userId);
        
        return {
            user,
            posts,
            comments
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

// Helper functions
function fetchUser(id) {
    return Promise.resolve({ id, name: "User" });
}

function fetchUserPosts(id) {
    return Promise.resolve([{ id: 1, title: "Post" }]);
}

function fetchUserComments(id) {
    return Promise.resolve([{ id: 1, text: "Comment" }]);
}

// Example 2: Error handling
async function safeOperation() {
    try {
        let result = await riskyOperation();
        return result;
    } catch (error) {
        // Handle error
        console.error("Operation failed:", error.message);
        return null; // Return default
    }
}

function riskyOperation() {
    return Math.random() > 0.5
        ? Promise.resolve("Success")
        : Promise.reject(new Error("Failed"));
}

// Example 3: Multiple async operations
async function fetchAllData() {
    // Parallel execution
    let [users, posts, comments] = await Promise.all([
        fetchUsers(),
        fetchPosts(),
        fetchComments()
    ]);
    
    return { users, posts, comments };
}

function fetchUsers() {
    return Promise.resolve([{ id: 1, name: "User" }]);
}

function fetchPosts() {
    return Promise.resolve([{ id: 1, title: "Post" }]);
}

function fetchComments() {
    return Promise.resolve([{ id: 1, text: "Comment" }]);
}

// Example 4: Retry logic
async function retryOperation(operation, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await operation();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await delay(1000); // Wait before retry
        }
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// ASYNC/AWAIT VS PROMISES
// ============================================

// Promise version
function promiseVersion() {
    return fetchData()
        .then(data => processData(data))
        .then(result => saveData(result))
        .catch(error => handleError(error));
}

// Async/await version
async function asyncVersion() {
    try {
        let data = await fetchData();
        let result = await processData(data);
        return await saveData(result);
    } catch (error) {
        return handleError(error);
    }
}

// Helper functions
function fetchData() {
    return Promise.resolve("data");
}

function processData(data) {
    return Promise.resolve("processed");
}

function saveData(data) {
    return Promise.resolve("saved");
}

function handleError(error) {
    return "error handled";
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. await only works in async functions
// function regular() {
//     await Promise.resolve(); // SyntaxError
// }

// 2. async functions always return promises
async function returnsValue() {
    return "value";
}

let result2 = returnsValue();
console.log(result2 instanceof Promise); // true

// 3. Unhandled rejections
async function unhandled() {
    await Promise.reject("Error");
}

// unhandled(); // Unhandled promise rejection

// Always handle errors
async function handled() {
    try {
        await Promise.reject("Error");
    } catch (error) {
        // Handled
    }
}

// 4. await with non-promise
async function awaitNonPromise() {
    let value = await "not a promise"; // Works! (wrapped in promise)
    console.log(value); // "not a promise"
}

// 5. Top-level await (ES2022)
// await Promise.resolve("Top level"); // Works in modules

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always use try/catch for error handling
// ✅ Good: try { await operation(); } catch (e) { }

// 2. Use Promise.all for parallel operations
// ✅ Good: await Promise.all([p1, p2, p3])

// 3. Don't await in loops unnecessarily
// ❌ Bad: for (let item of items) { await process(item); }
// ✅ Good: await Promise.all(items.map(process))

// 4. Return promises from async functions
// ✅ Good: async function() { return await ... }

// 5. Handle errors appropriately
// ✅ Good: try/catch or .catch()

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Sequential operations
async function sequential() {
    let step1 = await operation1();
    let step2 = await operation2(step1);
    return await operation3(step2);
}

// Pattern 2: Parallel operations
async function parallel() {
    let [result1, result2] = await Promise.all([
        operation1(),
        operation2()
    ]);
    return { result1, result2 };
}

// Pattern 3: Error handling
async function withErrorHandling() {
    try {
        return await operation();
    } catch (error) {
        // Handle error
        return defaultValue;
    }
}

// Pattern 4: Conditional await
async function conditional() {
    if (condition) {
        return await operation();
    }
    return defaultValue;
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create an async function that returns a value
// 2. Use await to wait for a promise to resolve
// 3. Use try/catch to handle errors in async function
// 4. Create sequential async operations using await
// 5. Create parallel async operations using Promise.all
// 6. Convert a promise-based function to async/await
// 7. Use await in a loop (sequential processing)
// 8. Handle multiple async operations with error handling
// 9. Create an async function that retries on failure
// 10. Explain the difference between async/await and promises

