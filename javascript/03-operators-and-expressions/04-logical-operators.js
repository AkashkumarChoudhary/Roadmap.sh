/**
 * ============================================
 * LOGICAL OPERATORS IN JAVASCRIPT
 * ============================================
 * 
 * WHY LOGICAL OPERATORS?
 * ----------------------
 * Logical operators combine or modify boolean values. They're essential for
 * conditionals, validation, and controlling program flow. JavaScript's logical
 * operators have unique behaviors that make them powerful tools.
 * 
 * WHAT ARE LOGICAL OPERATORS?
 * ---------------------------
 * Operators that work with boolean logic:
 * - Logical AND (&&) - Returns first falsy or last truthy value
 * - Logical OR (||) - Returns first truthy or last falsy value
 * - Logical NOT (!) - Negates a boolean value
 * - Nullish Coalescing (??) - Returns right operand if left is null/undefined
 * 
 * KEY BEHAVIOR:
 * ------------
 * JavaScript logical operators don't always return boolean values!
 * They return the actual value that determined the result (short-circuit evaluation).
 */

'use strict';

// ============================================
// 1. LOGICAL AND (&&)
// ============================================

// Returns first falsy value, or last value if all are truthy
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false (short-circuits, doesn't evaluate right side)
console.log(false && false); // false

// Returns the actual value, not just boolean!
console.log("hello" && "world"); // "world" (both truthy, returns last)
console.log("" && "world"); // "" (first is falsy, returns it)
console.log(0 && "world"); // 0
console.log(null && "world"); // null

// Short-circuit evaluation
let x = 0;
let result1 = x && console.log("This won't run"); // x is falsy, so stops here
console.log(result1); // 0

// ============================================
// 2. LOGICAL OR (||)
// ============================================

// Returns first truthy value, or last value if all are falsy
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Returns the actual value!
console.log("hello" || "world"); // "hello" (first is truthy, returns it)
console.log("" || "world"); // "world" (first is falsy, returns second)
console.log(null || undefined || "default"); // "default"

// Short-circuit evaluation
let y = "value";
let result2 = y || console.log("This won't run"); // y is truthy, so stops here
console.log(result2); // "value"

// ============================================
// 3. LOGICAL NOT (!)
// ============================================

// Negates a boolean value
console.log(!true); // false
console.log(!false); // true

// Converts value to boolean, then negates
console.log(!"hello"); // false (truthy becomes false)
console.log(!""); // true (falsy becomes true)
console.log(!0); // true
console.log(!1); // false

// Double negation (!!) converts to boolean
console.log(!!"hello"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!1); // true

// ============================================
// 4. NULLISH COALESCING (??) - ES2020
// ============================================

// Returns right operand only if left is null or undefined
// Unlike ||, it doesn't treat other falsy values (0, "", false) as nullish

console.log(null ?? "default"); // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? "default"); // 0 (0 is not nullish!)
console.log("" ?? "default"); // "" (empty string is not nullish!)
console.log(false ?? "default"); // false (false is not nullish!)

// Comparison with ||
console.log(null || "default"); // "default"
console.log(0 || "default"); // "default" (0 is falsy, so uses default)
console.log(0 ?? "default"); // 0 (0 is not nullish, so keeps 0)

// Practical use case
function greet(name) {
    // || would replace empty string with "Guest"
    // ?? only replaces null/undefined
    name = name ?? "Guest";
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet(null)); // "Hello, Guest!"
console.log(greet(undefined)); // "Hello, Guest!"
console.log(greet("")); // "Hello, !" (empty string is kept)

// ============================================
// COMBINING LOGICAL OPERATORS
// ============================================

// Multiple conditions
let age = 25;
let hasLicense = true;
let hasCar = false;

// AND: All must be true
if (age >= 18 && hasLicense) {
    console.log("Can drive");
}

// OR: At least one must be true
if (hasLicense || hasCar) {
    console.log("Has transportation");
}

// Complex conditions
if ((age >= 18 && hasLicense) || hasCar) {
    console.log("Can travel");
}

// ============================================
// PRACTICAL PATTERNS
// ============================================

// Pattern 1: Default values with ||
function getUsername(user) {
    return user.name || "Anonymous";
}
console.log(getUsername({ name: "John" })); // "John"
console.log(getUsername({})); // "Anonymous"

// Pattern 2: Conditional execution with &&
function logIfDebug(message) {
    let isDebug = true;
    isDebug && console.log(message); // Only logs if isDebug is true
}
logIfDebug("Debug message");

// Pattern 3: Nullish coalescing for optional values
function getConfig() {
    return {
        timeout: null ?? 5000, // Only use default if null/undefined
        retries: 0 ?? 3 // Keeps 0, doesn't replace with 3
    };
}

// Pattern 4: Chaining with &&
let user = {
    profile: {
        name: "Alice"
    }
};

// Safe property access (before optional chaining)
let userName = user && user.profile && user.profile.name;
console.log(userName); // "Alice"

// Pattern 5: Validation with &&
function validateEmail(email) {
    return email && email.includes("@") && email.length > 5;
}
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("")); // "" (falsy)

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. && returns last truthy, not boolean
console.log("a" && "b" && "c"); // "c" (not true!)
console.log(Boolean("a" && "b" && "c")); // true (if you need boolean)

// 2. || returns first truthy, not boolean
console.log("a" || "b" || "c"); // "a" (not true!)
console.log(Boolean("a" || "b" || "c")); // true

// 3. Operator precedence
console.log(true || false && false); // true (&& has higher precedence)
console.log((true || false) && false); // false (parentheses change order)

// 4. Nullish coalescing precedence
// ?? has lower precedence than && and ||
// console.log(null || undefined ?? "default"); // SyntaxError!
console.log((null || undefined) ?? "default"); // "default" (need parentheses)

// 5. Falsy values with ||
let count = 0;
let result = count || 10; // 10 (0 is falsy, so uses 10)
// This might not be what you want! Use ?? if 0 is valid:
let result2 = count ?? 10; // 0 (0 is not nullish, so keeps 0)

// 6. Empty string with ||
let name = "";
let displayName = name || "Anonymous"; // "Anonymous" ("" is falsy)
// If you want to keep empty string, use ??:
let displayName2 = name ?? "Anonymous"; // "" (empty string is kept)

// 7. Multiple && or ||
console.log(true && true && false); // false (last falsy)
console.log(false || false || true); // true (first truthy)

// ============================================
// TRUTHY AND FALSY VALUES
// ============================================

/**
 * FALSY VALUES (only these 8):
 * - false
 * - 0
 * - -0
 * - 0n (BigInt zero)
 * - "" (empty string)
 * - null
 * - undefined
 * - NaN
 * 
 * Everything else is TRUTHY, including:
 * - "0" (string zero)
 * - "false" (string)
 * - [] (empty array)
 * - {} (empty object)
 * - function(){} (empty function)
 */

console.log(!!false); // false
console.log(!!0); // false
console.log(!!""); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

console.log(!!"0"); // true (string)
console.log(!!"false"); // true (string)
console.log(!![]); // true (array)
console.log(!!{}); // true (object)
console.log(!!function(){}); // true (function)

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use ?? for default values when 0, "", false are valid
// ❌ Bad: let timeout = config.timeout || 5000; // Replaces 0 with 5000
// ✅ Good: let timeout = config.timeout ?? 5000; // Only replaces null/undefined

// 2. Use && for conditional execution
// ✅ Good: isDebug && console.log("Debug info");

// 3. Use || for default values when falsy values should be replaced
// ✅ Good: let name = user.name || "Anonymous";

// 4. Be explicit when you need boolean
// ❌ Unclear: if (value && otherValue) { ... }
// ✅ Clear: if (Boolean(value && otherValue)) { ... }
// Or: if (value && otherValue === true) { ... }

// 5. Use parentheses for clarity with mixed operators
// ❌ Unclear: a || b && c
// ✅ Clear: a || (b && c)

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Form validation
function validateForm(email, password) {
    return email && password && email.includes("@") && password.length >= 8;
}
console.log(validateForm("test@example.com", "password123")); // true
console.log(validateForm("", "password123")); // "" (falsy)

// Example 2: Feature flags
function isFeatureEnabled(feature) {
    let flags = {
        newUI: true,
        darkMode: false
    };
    return flags[feature] ?? false; // Default to false if feature doesn't exist
}

// Example 3: Safe property access (before optional chaining)
function getNestedValue(obj, path) {
    return obj && obj.nested && obj.nested.value;
}

// Example 4: Default parameters pattern
function createUser(name, email) {
    return {
        name: name || "Anonymous",
        email: email || "no-email@example.com"
    };
}

// Better with nullish coalescing:
function createUserBetter(name, email) {
    return {
        name: name ?? "Anonymous", // Only default if null/undefined
        email: email ?? "no-email@example.com"
    };
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use && to check if a number is between 10 and 20
// 2. Use || to provide a default value if a variable is falsy
// 3. Use ?? to provide a default value only if a variable is null/undefined
// 4. Explain the difference between: value || "default" and value ?? "default"
// 5. Use ! to negate a boolean value
// 6. Use !! to convert a value to boolean
// 7. Create a function that uses && to conditionally execute code
// 8. Chain multiple && operators and observe what value is returned
// 9. Test: What does 0 || 10 return? What about 0 ?? 10?
// 10. Create a validation function using && that checks multiple conditions

