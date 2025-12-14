/**
 * ============================================
 * FUNCTION DECLARATIONS VS EXPRESSIONS
 * ============================================
 * 
 * WHY UNDERSTAND THE DIFFERENCE?
 * ------------------------------
 * Functions are fundamental in JavaScript. Understanding the different ways
 * to create functions helps you:
 * - Choose the right syntax for each situation
 * - Understand hoisting behavior
 * - Write more flexible and maintainable code
 * 
 * WHAT ARE THE DIFFERENCES?
 * -------------------------
 * Two main ways to create functions:
 * - Function Declaration - Named function, hoisted
 * - Function Expression - Function assigned to variable, not hoisted
 * 
 * KEY DIFFERENCES:
 * --------------
 * - Hoisting: Declarations are hoisted, expressions are not
 * - Name: Declarations have names, expressions can be anonymous
 * - Usage: Declarations can be called before definition, expressions cannot
 */

'use strict';

// ============================================
// 1. FUNCTION DECLARATION
// ============================================

// Syntax: function name(parameters) { body }

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"

// Function declarations are hoisted
sayHello(); // Works! Function is hoisted

function sayHello() {
    console.log("Hello!");
}

// Can be called before definition (due to hoisting)
console.log(multiply(5, 3)); // 15

function multiply(a, b) {
    return a * b;
}

// ============================================
// 2. FUNCTION EXPRESSION
// ============================================

// Syntax: const/let name = function(parameters) { body }

const greet2 = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet2("Bob")); // "Hello, Bob!"

// Function expressions are NOT hoisted
// sayGoodbye(); // ReferenceError: Cannot access before initialization

const sayGoodbye = function() {
    console.log("Goodbye!");
};

sayGoodbye(); // Works here

// Named function expression
const calculate = function add(a, b) {
    return a + b;
};

console.log(calculate(2, 3)); // 5
// console.log(add(2, 3)); // ReferenceError: add is not defined
// (name is only available inside the function)

// ============================================
// HOISTING DIFFERENCES
// ============================================

// Function Declaration - hoisted
console.log(declaredFunction()); // "I'm hoisted!"

function declaredFunction() {
    return "I'm hoisted!";
}

// Function Expression - NOT hoisted
// console.log(expressedFunction()); // ReferenceError

const expressedFunction = function() {
    return "I'm not hoisted!";
};

console.log(expressedFunction()); // Works here

// ============================================
// ANONYMOUS FUNCTIONS
// ============================================

// Function expressions can be anonymous
const anonymous = function() {
    return "I have no name";
};

// Or named
const named = function myName() {
    return "I have a name";
};

// Function declarations always have names
function alwaysNamed() {
    return "I always have a name";
}

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Function declaration for reusable logic
function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(5, 10)); // 50

// Example 2: Function expression for callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Example 3: Conditional function assignment
let operation;

if (true) {
    operation = function(a, b) {
        return a + b;
    };
} else {
    operation = function(a, b) {
        return a - b;
    };
}

console.log(operation(5, 3)); // 8

// Example 4: Function as property
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(10, 5)); // 15
console.log(calculator.subtract(10, 5)); // 5

// ============================================
// WHEN TO USE EACH
// ============================================

// Use Function Declaration when:
// - Function is used throughout the file
// - You want hoisting behavior
// - Function has a clear, reusable purpose

function processData(data) {
    // Main logic
    return processedData;
}

// Use Function Expression when:
// - Function is used as a callback
// - Function is conditionally assigned
// - Function is a method of an object
// - You want to avoid hoisting

const callback = function(item) {
    return item * 2;
};

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Function declaration in block (not recommended)
if (true) {
    function blockFunction() {
        return "I'm in a block";
    }
}
// Behavior varies by environment (strict mode vs non-strict)

// 2. Function expression with var (hoisted but undefined)
console.log(typeof varFunction); // "undefined" (not ReferenceError)

var varFunction = function() {
    return "I'm a var function";
};

// 3. Function declaration vs expression in strict mode
'use strict';

// Both work, but hoisting differs
function strictDeclared() {
    return "I'm hoisted";
}

const strictExpressed = function() {
    return "I'm not hoisted";
};

// 4. Reassigning function expressions
let func = function() {
    return "First";
};

func = function() {
    return "Second";
};

console.log(func()); // "Second"

// Function declarations can't be reassigned (they're not variables)
function func2() {
    return "First";
}

// Can't do: func2 = function() { return "Second"; }
// (This would create a new variable, shadowing the function)

// 5. Function name property
function namedFunction() {}
const anonymousFunction = function() {};
const namedExpression = function myName() {};

console.log(namedFunction.name); // "namedFunction"
console.log(anonymousFunction.name); // "anonymousFunction" (inferred from variable)
console.log(namedExpression.name); // "myName"

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use function declarations for main functions
// ✅ Good: function processUser(user) { ... }

// 2. Use function expressions for callbacks
// ✅ Good: array.map(function(item) { ... })

// 3. Prefer const for function expressions
// ✅ Good: const func = function() { ... }
// ❌ Bad: var func = function() { ... }

// 4. Use named function expressions for debugging
// ✅ Good: const func = function myFunction() { ... }
// (Shows up in stack traces with name)

// 5. Don't rely on hoisting for readability
// ❌ Bad: Calling function before definition (even if it works)
// ✅ Good: Define function before using it

// ============================================
// COMPARISON SUMMARY
// ============================================

/**
 * FUNCTION DECLARATION:
 * - Hoisted: Yes
 * - Can call before definition: Yes
 * - Always has a name: Yes
 * - Can be reassigned: No (creates new variable)
 * - Syntax: function name() {}
 * 
 * FUNCTION EXPRESSION:
 * - Hoisted: No
 * - Can call before definition: No
 * - Always has a name: No (can be anonymous)
 * - Can be reassigned: Yes (if using let/var)
 * - Syntax: const name = function() {}
 */

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a function declaration and call it before its definition (demonstrate hoisting)
// 2. Create a function expression and try to call it before its definition (observe error)
// 3. Create a named function expression and explain the difference
// 4. Create a function expression assigned to a const variable
// 5. Create an anonymous function expression
// 6. Use a function expression as a callback in array.map()
// 7. Create a function declaration and a function expression that do the same thing
// 8. Explain when you would use a function declaration vs expression
// 9. Create a function expression that's conditionally assigned
// 10. Demonstrate the name property of both declaration and expression

