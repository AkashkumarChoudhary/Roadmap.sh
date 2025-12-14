/**
 * ============================================
 * EXCEPTION HANDLING IN JAVASCRIPT
 * ============================================
 * 
 * WHY EXCEPTION HANDLING?
 * -----------------------
 * Errors happen in programs. Exception handling allows you to:
 * - Gracefully handle errors without crashing
 * - Provide meaningful error messages
 * - Clean up resources
 * - Continue program execution
 * 
 * WHAT IS EXCEPTION HANDLING?
 * ---------------------------
 * Mechanisms for handling errors and exceptions:
 * - try - Code that might throw an error
 * - catch - Handles errors if they occur
 * - finally - Always executes (cleanup code)
 * - throw - Manually throw an error
 * 
 * ERROR TYPES:
 * -----------
 * - Error - Base error class
 * - TypeError - Wrong type used
 * - ReferenceError - Variable doesn't exist
 * - SyntaxError - Invalid syntax
 * - RangeError - Value out of range
 * - Custom errors - Your own error types
 */

'use strict';

// ============================================
// 1. TRY-CATCH BLOCK
// ============================================

// Basic try-catch
try {
    let result = 10 / 0;
    console.log(result); // Infinity (not an error, but demonstrates structure)
} catch (error) {
    console.log("An error occurred:", error.message);
}

// Catching actual errors
try {
    let value = undefined;
    console.log(value.property); // TypeError
} catch (error) {
    console.log("Error caught:", error.message);
    console.log("Error type:", error.name);
}

// ============================================
// 2. TRY-CATCH-FINALLY
// ============================================

// finally always executes
try {
    console.log("Try block");
    let result = 10 / 2;
    console.log(result);
} catch (error) {
    console.log("Catch block:", error.message);
} finally {
    console.log("Finally block - always runs");
}

// finally runs even if error is thrown
try {
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Caught:", error.message);
} finally {
    console.log("Finally still runs");
}

// finally runs even if return is used
function testFinally() {
    try {
        return "try";
    } catch (error) {
        return "catch";
    } finally {
        console.log("Finally runs before return");
    }
}
console.log(testFinally()); // "try" (but finally logged first)

// ============================================
// 3. THROW STATEMENT
// ============================================

// Throwing errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
} catch (error) {
    console.log("Error:", error.message);
}

// Throwing different error types
function processNumber(num) {
    if (typeof num !== "number") {
        throw new TypeError("Expected a number");
    }
    if (num < 0) {
        throw new RangeError("Number must be positive");
    }
    return num * 2;
}

try {
    processNumber("5"); // TypeError
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type error:", error.message);
    } else if (error instanceof RangeError) {
        console.log("Range error:", error.message);
    }
}

// ============================================
// ERROR TYPES
// ============================================

// TypeError - Wrong type
try {
    let obj = null;
    obj.property; // TypeError: Cannot read property of null
} catch (error) {
    console.log(error.name); // "TypeError"
}

// ReferenceError - Undefined variable
try {
    console.log(undefinedVariable); // ReferenceError
} catch (error) {
    console.log(error.name); // "ReferenceError"
}

// RangeError - Value out of range
try {
    let arr = new Array(-1); // RangeError
} catch (error) {
    console.log(error.name); // "RangeError"
}

// SyntaxError - Invalid syntax (usually caught at parse time)
// try {
//     eval("let x = ;"); // SyntaxError
// } catch (error) {
//     console.log(error.name);
// }

// ============================================
// CUSTOM ERRORS
// ============================================

// Creating custom error class
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required", "name");
    }
    if (!user.email) {
        throw new ValidationError("Email is required", "email");
    }
}

try {
    validateUser({});
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation error in ${error.field}: ${error.message}`);
    } else {
        console.log("Unknown error:", error.message);
    }
}

// ============================================
// NESTED TRY-CATCH
// ============================================

try {
    try {
        throw new Error("Inner error");
    } catch (innerError) {
        console.log("Inner catch:", innerError.message);
        throw new Error("Re-thrown error"); // Re-throw
    }
} catch (outerError) {
    console.log("Outer catch:", outerError.message);
}

// ============================================
// ERROR OBJECT PROPERTIES
// ============================================

try {
    throw new Error("Test error");
} catch (error) {
    console.log("Name:", error.name); // "Error"
    console.log("Message:", error.message); // "Test error"
    console.log("Stack:", error.stack); // Stack trace
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Safe property access
function safeGetProperty(obj, prop) {
    try {
        return obj[prop];
    } catch (error) {
        console.log("Error accessing property:", error.message);
        return undefined;
    }
}

// Example 2: JSON parsing
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log("Invalid JSON:", error.message);
        return null;
    }
}

let validJSON = '{"name": "John"}';
let invalidJSON = '{name: "John"}'; // Missing quotes

console.log(parseJSON(validJSON)); // { name: "John" }
console.log(parseJSON(invalidJSON)); // null

// Example 3: API call with error handling
async function fetchUserData(userId) {
    try {
        // Simulated API call
        if (userId < 0) {
            throw new Error("Invalid user ID");
        }
        return { id: userId, name: "John" };
    } catch (error) {
        console.log("Failed to fetch user:", error.message);
        return null;
    }
}

// Example 4: File operations (conceptual)
function readFile(filename) {
    try {
        // Simulated file read
        if (!filename) {
            throw new Error("Filename is required");
        }
        return "File content";
    } catch (error) {
        console.log("File read error:", error.message);
        throw error; // Re-throw to caller
    } finally {
        console.log("File operation completed");
    }
}

// Example 5: Validation with specific errors
function validateInput(input) {
    if (input === null || input === undefined) {
        throw new TypeError("Input cannot be null or undefined");
    }
    if (typeof input !== "string") {
        throw new TypeError("Input must be a string");
    }
    if (input.length === 0) {
        throw new Error("Input cannot be empty");
    }
    if (input.length > 100) {
        throw new RangeError("Input must be less than 100 characters");
    }
    return input;
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Errors in catch block
try {
    throw new Error("First error");
} catch (error) {
    console.log("Caught:", error.message);
    // throw new Error("Error in catch"); // This needs outer try-catch!
}

// 2. Return in try-catch-finally
function testReturn() {
    try {
        return "try";
    } catch (error) {
        return "catch";
    } finally {
        // Code here runs, but return value is from try/catch
        console.log("Finally");
    }
}

// 3. Async errors
async function asyncFunction() {
    try {
        await Promise.reject("Async error");
    } catch (error) {
        console.log("Caught async error:", error);
    }
}

// 4. Uncaught errors
// Errors not in try-catch will propagate up
function uncaughtError() {
    throw new Error("This will crash if not caught");
}

// Call with try-catch:
try {
    uncaughtError();
} catch (error) {
    console.log("Caught:", error.message);
}

// 5. Error in finally
try {
    console.log("Try");
} catch (error) {
    console.log("Catch");
} finally {
    // If error occurs here, it won't be caught by this try-catch
    console.log("Finally");
}

// ============================================
// BEST PRACTICES
// ============================================

// 1. Be specific with error types
// ✅ Good: throw new TypeError("Expected number");
// ❌ Bad: throw new Error("Wrong type");

// 2. Don't catch errors you can't handle
// ❌ Bad: catch (error) { /* ignore */ }
// ✅ Good: catch (error) { log and handle appropriately }

// 3. Always clean up in finally
// ✅ Good: Close files, connections, etc. in finally

// 4. Provide meaningful error messages
// ✅ Good: throw new Error("User ID must be positive");
// ❌ Bad: throw new Error("Error");

// 5. Don't use try-catch for control flow
// ❌ Bad: Using try-catch instead of if-else
// ✅ Good: Use try-catch only for actual errors

// 6. Re-throw errors you can't handle
try {
    // Some operation
} catch (error) {
    // Log error
    console.log("Error occurred:", error);
    // Re-throw if you can't handle it
    throw error;
}

// 7. Use custom errors for domain-specific errors
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthenticationError";
    }
}

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Error wrapper
function safeOperation(operation) {
    try {
        return operation();
    } catch (error) {
        console.log("Operation failed:", error.message);
        return null;
    }
}

// Pattern 2: Retry logic
function retryOperation(operation, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return operation();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            console.log(`Retry ${i + 1} failed, retrying...`);
        }
    }
}

// Pattern 3: Error logging
function logError(error, context) {
    console.error(`Error in ${context}:`, {
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
    });
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a try-catch block that handles a division by zero error
// 2. Create a function that throws a custom error
// 3. Use finally to clean up resources (e.g., close a connection)
// 4. Create a custom error class that extends Error
// 5. Handle different error types (TypeError, ReferenceError, etc.)
// 6. Create a function that safely parses JSON with error handling
// 7. Use nested try-catch blocks
// 8. Create a validation function that throws specific errors for different cases
// 9. Demonstrate re-throwing an error
// 10. Create a function that retries an operation on failure

