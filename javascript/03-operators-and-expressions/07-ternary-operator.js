/**
 * ============================================
 * TERNARY OPERATOR IN JAVASCRIPT
 * ============================================
 * 
 * WHY TERNARY OPERATOR?
 * ---------------------
 * The ternary operator provides a concise way to write conditional expressions.
 * It's a one-line alternative to if-else statements when assigning values
 * or returning values based on a condition.
 * 
 * WHAT IS THE TERNARY OPERATOR?
 * -----------------------------
 * Syntax: condition ? valueIfTrue : valueIfFalse
 * 
 * - If condition is truthy, returns valueIfTrue
 * - If condition is falsy, returns valueIfFalse
 * 
 * KEY FEATURES:
 * ------------
 * - Returns a value (unlike if-else which is a statement)
 * - Can be nested (though not recommended for readability)
 * - Shorter than if-else for simple conditions
 * - Can be used in expressions
 */

'use strict';

// ============================================
// BASIC SYNTAX
// ============================================

// Simple ternary
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Equivalent if-else:
let status2;
if (age >= 18) {
    status2 = "adult";
} else {
    status2 = "minor";
}

// ============================================
// COMMON USE CASES
// ============================================

// Use case 1: Assigning values based on condition
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message); // "Welcome back!"

// Use case 2: Returning values in functions
function getGreeting(hour) {
    return hour < 12 ? "Good morning" : "Good afternoon";
}
console.log(getGreeting(10)); // "Good morning"
console.log(getGreeting(15)); // "Good afternoon"

// Use case 3: Providing default values
function greet(name) {
    return `Hello, ${name ? name : "Guest"}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet(null)); // "Hello, Guest!"

// Use case 4: Conditional property assignment
let user = {
    name: "John",
    role: "admin"
};
let canEdit = user.role === "admin" ? true : false;
console.log(canEdit); // true

// ============================================
// NESTED TERNARY (USE SPARINGLY)
// ============================================

// Nested ternary for multiple conditions
let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : 
            score >= 60 ? "D" : "F";
console.log(grade); // "B"

// Equivalent if-else (more readable):
let grade2;
if (score >= 90) {
    grade2 = "A";
} else if (score >= 80) {
    grade2 = "B";
} else if (score >= 70) {
    grade2 = "C";
} else if (score >= 60) {
    grade2 = "D";
} else {
    grade2 = "F";
}

// ============================================
// TERNARY IN EXPRESSIONS
// ============================================

// Can be used in any expression
let a = 5;
let b = 10;
let max = a > b ? a : b;
console.log(max); // 10

// In template literals
let userName = "Alice";
let greeting = `Hello, ${userName ? userName : "Guest"}!`;
console.log(greeting); // "Hello, Alice!"

// In function calls
console.log(5 > 3 ? "greater" : "lesser"); // "greater"

// In array/object literals
let numbers = [1, 2, 3, 4, 5];
let filtered = numbers.filter(n => n > 2 ? true : false);
console.log(filtered); // [3, 4, 5]

// ============================================
// TERNARY WITH FUNCTIONS
// ============================================

// Calling different functions
function getPositiveMessage() {
    return "Great job!";
}

function getNegativeMessage() {
    return "Try again!";
}

let isSuccess = true;
let result = isSuccess ? getPositiveMessage() : getNegativeMessage();
console.log(result); // "Great job!"

// ============================================
// TERNARY WITH NULLISH COALESCING
// ============================================

// Combining ternary with nullish coalescing
function getValue(input) {
    // If input is null/undefined, use default, otherwise use input
    return input ?? "default";
}

// With ternary for more complex logic
function getValueWithTernary(input) {
    return input !== null && input !== undefined ? input : "default";
}

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Falsy values
let value = 0;
let result1 = value ? "truthy" : "falsy";
console.log(result1); // "falsy" (0 is falsy)

let value2 = "";
let result2 = value2 ? "truthy" : "falsy";
console.log(result2); // "falsy" (empty string is falsy)

// 2. Null/undefined handling
let name = null;
let displayName = name ? name : "Anonymous";
console.log(displayName); // "Anonymous"

// Better with nullish coalescing:
let displayName2 = name ?? "Anonymous";
console.log(displayName2); // "Anonymous"

// 3. Side effects in ternary
let counter = 0;
let value3 = counter++ > 0 ? "positive" : "zero or negative";
console.log(value3); // "zero or negative"
console.log(counter); // 1 (incremented)

// 4. Returning objects/arrays
let condition = true;
let data = condition ? { name: "John" } : { name: "Jane" };
console.log(data); // { name: "John" }

// 5. Ternary with method calls
let obj = {
    getName: function() { return "John"; },
    getDefault: function() { return "Guest"; }
};
let name2 = condition ? obj.getName() : obj.getDefault();
console.log(name2); // "John"

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use for simple conditions
// ✅ Good: let status = age >= 18 ? "adult" : "minor";
// ❌ Bad: Complex nested ternaries that are hard to read

// 2. Prefer if-else for complex logic
// ❌ Bad: let result = a ? b ? c : d : e ? f : g; // Too nested!
// ✅ Good: Use if-else for readability

// 3. Use parentheses for clarity
// ✅ Good: let result = (a > b) ? a : b;
// ✅ Also good: let result = a > b ? a : b; // Simple enough without

// 4. Don't use ternary for side effects
// ❌ Bad: condition ? doSomething() : doSomethingElse(); // Use if-else
// ✅ Good: if (condition) { doSomething(); } else { doSomethingElse(); }

// 5. Use nullish coalescing when appropriate
// ❌ Verbose: let value = input !== null && input !== undefined ? input : "default";
// ✅ Better: let value = input ?? "default";

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: User role display
function getUserDisplay(user) {
    return user.role === "admin" ? "Administrator" : "User";
}

// Example 2: Price formatting
function formatPrice(price, currency = "USD") {
    return currency === "USD" ? `$${price}` : `${price} ${currency}`;
}

// Example 3: Status indicator
function getStatusColor(status) {
    return status === "active" ? "green" : 
           status === "pending" ? "yellow" : "red";
}

// Example 4: Conditional class names (React-like)
function getButtonClass(isPrimary, isDisabled) {
    return isPrimary ? 
           (isDisabled ? "btn btn-primary disabled" : "btn btn-primary") :
           (isDisabled ? "btn disabled" : "btn");
}

// Example 5: Min/Max values
function clamp(value, min, max) {
    return value < min ? min : value > max ? max : value;
}
console.log(clamp(15, 10, 20)); // 15
console.log(clamp(5, 10, 20)); // 10
console.log(clamp(25, 10, 20)); // 20

// ============================================
// TERNARY VS IF-ELSE
// ============================================

// When to use ternary:
// - Simple value assignment
// - Returning values in functions
// - Inline expressions
// - Short, readable conditions

// When to use if-else:
// - Complex logic
// - Multiple statements
// - Side effects
// - Better readability for nested conditions

// Ternary (good for simple cases):
let result3 = condition ? valueA : valueB;

// If-else (good for complex cases):
if (condition) {
    // Multiple statements
    doSomething();
    doSomethingElse();
} else {
    // Multiple statements
    doOtherThing();
    doAnotherThing();
}

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Default value
let value4 = input || "default"; // Uses first truthy
let value5 = input ?? "default"; // Only for null/undefined
let value6 = input ? input : "default"; // Explicit ternary

// Pattern 2: Toggle/Flip
let isActive = true;
isActive = isActive ? false : true; // Toggle
// Better: isActive = !isActive;

// Pattern 3: Min/Max
let maxValue = a > b ? a : b;
let minValue = a < b ? a : b;

// Pattern 4: Conditional property
let obj2 = {
    name: "John",
    ...(condition && { role: "admin" }) // Spread if condition is true
};

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use ternary to assign "adult" or "minor" based on age
// 2. Create a function that returns "even" or "odd" using ternary
// 3. Use ternary to provide a default value if a variable is null/undefined
// 4. Create a nested ternary for grade assignment (A, B, C, D, F)
// 5. Use ternary in a template literal to conditionally include text
// 6. Create a function that returns the maximum of two numbers using ternary
// 7. Use ternary to conditionally call one of two functions
// 8. Explain when to use ternary vs if-else
// 9. Create a ternary that checks if a number is positive, negative, or zero
// 10. Use ternary with nullish coalescing to handle default values

