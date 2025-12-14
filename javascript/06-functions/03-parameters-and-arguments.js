/**
 * ============================================
 * PARAMETERS AND ARGUMENTS IN JAVASCRIPT
 * ============================================
 * 
 * WHY UNDERSTAND PARAMETERS?
 * --------------------------
 * Parameters and arguments are how functions receive and work with data.
 * Understanding different parameter types helps you write flexible,
 * reusable functions.
 * 
 * WHAT ARE PARAMETERS AND ARGUMENTS?
 * -----------------------------------
 * - Parameters: Variables listed in function definition
 * - Arguments: Values passed to function when called
 * 
 * PARAMETER TYPES:
 * ---------------
 * - Default parameters - Values used when argument not provided
 * - Rest parameters - Collect remaining arguments into array
 * - Named parameters - Using objects for clarity
 * - Arguments object - Available in traditional functions
 */

'use strict';

// ============================================
// BASIC PARAMETERS
// ============================================

// Parameters are variables in function definition
function greet(name, age) {
    // name and age are parameters
    return `Hello, ${name}, you are ${age} years old`;
}

// Arguments are values passed when calling
console.log(greet("Alice", 25)); // "Hello, Alice, you are 25 years old"
// "Alice" and 25 are arguments

// ============================================
// DEFAULT PARAMETERS (ES6)
// ============================================

// Parameters can have default values
function greetDefault(name = "Guest", age = 18) {
    return `Hello, ${name}, you are ${age} years old`;
}

console.log(greetDefault()); // "Hello, Guest, you are 18 years old"
console.log(greetDefault("Alice")); // "Hello, Alice, you are 18 years old"
console.log(greetDefault("Bob", 30)); // "Hello, Bob, you are 30 years old"

// Default parameters can use expressions
function createUser(name, createdAt = new Date()) {
    return {
        name,
        createdAt
    };
}

console.log(createUser("Alice")); // Uses current date
console.log(createUser("Bob", new Date("2020-01-01"))); // Uses provided date

// Default parameters can reference previous parameters
function createRectangle(width, height = width) {
    return { width, height };
}

console.log(createRectangle(10)); // { width: 10, height: 10 } (square)
console.log(createRectangle(10, 5)); // { width: 10, height: 5 } (rectangle)

// ============================================
// REST PARAMETERS (...)
// ============================================

// Collect remaining arguments into an array
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum()); // 0

// Rest parameter must be last
function combine(first, second, ...rest) {
    return {
        first,
        second,
        rest
    };
}

console.log(combine(1, 2, 3, 4, 5));
// { first: 1, second: 2, rest: [3, 4, 5] }

// ============================================
// ARGUMENTS OBJECT (TRADITIONAL FUNCTIONS)
// ============================================

// Traditional functions have `arguments` object
function traditionalFunction() {
    console.log(arguments); // Arguments object (array-like)
    console.log(arguments.length); // Number of arguments
    console.log(arguments[0]); // First argument
    
    // Convert to array
    const argsArray = Array.from(arguments);
    return argsArray;
}

console.log(traditionalFunction(1, 2, 3, 4, 5));

// Arrow functions do NOT have `arguments`
const arrowFunction = () => {
    // console.log(arguments); // ReferenceError
    // Use rest parameters instead
};

const arrowWithRest = (...args) => {
    console.log(args); // Array
    return args;
};

// ============================================
// NAMED PARAMETERS (USING OBJECTS)
// ============================================

// Instead of many positional parameters, use an object
function createUser(positionalName, positionalAge, positionalCity) {
    // Hard to remember order
    return {
        name: positionalName,
        age: positionalAge,
        city: positionalCity
    };
}

// Better: Use object for named parameters
function createUserNamed({ name, age, city }) {
    return { name, age, city };
}

console.log(createUserNamed({
    name: "Alice",
    age: 25,
    city: "Boston"
}));

// With default values
function createUserWithDefaults({ name = "Guest", age = 18, city = "Unknown" }) {
    return { name, age, city };
}

console.log(createUserWithDefaults({ name: "Bob" }));
// { name: "Bob", age: 18, city: "Unknown" }

// ============================================
// PARAMETER DESTRUCTURING
// ============================================

// Destructure objects in parameters
function processUser({ name, email, age }) {
    return `${name} (${email}) is ${age} years old`;
}

const user = {
    name: "Alice",
    email: "alice@example.com",
    age: 25
};

console.log(processUser(user)); // "Alice (alice@example.com) is 25 years old"

// Destructure arrays in parameters
function getFirstAndLast([first, , , last]) {
    return { first, last };
}

console.log(getFirstAndLast([1, 2, 3, 4, 5])); // { first: 1, last: 4 }

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Flexible function with rest parameters
function formatMessage(template, ...values) {
    return template.replace(/{(\d+)}/g, (match, index) => {
        return values[index] || match;
    });
}

console.log(formatMessage("Hello {0}, you have {1} messages", "Alice", 5));
// "Hello Alice, you have 5 messages"

// Example 2: Function with default parameters
function calculateTotal(price, tax = 0.1, discount = 0) {
    const subtotal = price * (1 - discount);
    return subtotal * (1 + tax);
}

console.log(calculateTotal(100)); // 110 (10% tax, no discount)
console.log(calculateTotal(100, 0.15)); // 115 (15% tax)
console.log(calculateTotal(100, 0.1, 0.2)); // 88 (10% tax, 20% discount)

// Example 3: API call with named parameters
function fetchData({ url, method = "GET", headers = {} }) {
    console.log(`Fetching ${url} with ${method}`);
    // Simulated API call
    return { data: "response", url, method };
}

fetchData({
    url: "/api/users",
    method: "POST",
    headers: { "Content-Type": "application/json" }
});

// Example 4: Math operations with rest
function max(...numbers) {
    if (numbers.length === 0) return null;
    return Math.max(...numbers);
}

console.log(max(1, 5, 3, 9, 2)); // 9

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Default parameters and undefined
function testDefault(param = "default") {
    return param;
}

console.log(testDefault()); // "default"
console.log(testDefault(undefined)); // "default" (undefined triggers default)
console.log(testDefault(null)); // null (null doesn't trigger default)
console.log(testDefault("value")); // "value"

// 2. Rest parameter is always an array
function testRest(...args) {
    console.log(Array.isArray(args)); // true
    console.log(args.length); // 0 if no arguments
}

testRest(); // true, 0
testRest(1, 2, 3); // true, 3

// 3. Arguments object is array-like, not array
function testArguments() {
    console.log(Array.isArray(arguments)); // false
    console.log(arguments.length); // Works
    // arguments.forEach(...); // Error: forEach is not a function
    
    // Convert to array
    const args = Array.from(arguments);
    console.log(Array.isArray(args)); // true
}

testArguments(1, 2, 3);

// 4. Default parameters are evaluated at call time
let callCount = 0;
function getDefault() {
    callCount++;
    return callCount;
}

function testEval(param = getDefault()) {
    return param;
}

console.log(testEval()); // 1
console.log(testEval()); // 2 (evaluated again)
console.log(testEval(10)); // 10 (default not used)

// 5. Rest parameter must be last
// function invalid(...rest, last) { } // SyntaxError

// 6. Can't have multiple rest parameters
// function invalid(...a, ...b) { } // SyntaxError

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use default parameters instead of checking undefined
// ✅ Good: function greet(name = "Guest") { ... }
// ❌ Bad: function greet(name) { name = name || "Guest"; ... }

// 2. Use rest parameters instead of arguments object
// ✅ Good: function sum(...numbers) { ... }
// ❌ Bad: function sum() { const numbers = Array.from(arguments); ... }

// 3. Use named parameters for functions with many parameters
// ✅ Good: function createUser({ name, age, email }) { ... }
// ❌ Bad: function createUser(name, age, email, city, country, ...) { ... }

// 4. Put default parameters at the end (or use named parameters)
// ✅ Good: function greet(name, age = 18) { ... }
// ⚠️ Works but confusing: function greet(name = "Guest", age) { ... }

// 5. Document complex parameter patterns
// Add JSDoc comments for clarity

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Optional parameters with defaults
function createConfig({ host = "localhost", port = 3000, ssl = false }) {
    return { host, port, ssl };
}

// Pattern 2: Rest parameters for variable arguments
function log(...messages) {
    console.log(messages.join(" "));
}

// Pattern 3: Destructuring in parameters
function processData({ data, options = {} }) {
    // Process data with options
}

// Pattern 4: Combining rest and regular parameters
function format(template, ...values) {
    // Format template with values
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a function with default parameters
// 2. Create a function that uses rest parameters to sum all arguments
// 3. Convert a function using `arguments` to use rest parameters
// 4. Create a function with named parameters using object destructuring
// 5. Create a function where default parameter references a previous parameter
// 6. Use parameter destructuring to extract properties from an object
// 7. Create a function that accepts variable number of arguments using rest
// 8. Demonstrate the difference between undefined and null with default parameters
// 9. Create a function that uses both regular and rest parameters
// 10. Explain when to use default parameters vs checking for undefined

