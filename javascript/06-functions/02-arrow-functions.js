/**
 * ============================================
 * ARROW FUNCTIONS IN JAVASCRIPT
 * ============================================
 * 
 * WHY ARROW FUNCTIONS?
 * --------------------
 * Arrow functions (ES6) provide a shorter, more concise syntax for writing
 * functions. They also have different behavior with the `this` keyword,
 * making them useful in specific contexts.
 * 
 * WHAT ARE ARROW FUNCTIONS?
 * -------------------------
 * A shorter syntax for writing function expressions:
 * - Concise syntax
 * - Lexical `this` binding (doesn't have its own `this`)
 * - No `arguments` object
 * - Cannot be used as constructors
 * 
 * KEY FEATURES:
 * ------------
 * - Shorter syntax for simple functions
 * - `this` is inherited from enclosing scope
 * - Implicit return for single expressions
 * - No function hoisting
 */

'use strict';

// ============================================
// BASIC ARROW FUNCTION SYNTAX
// ============================================

// Traditional function expression
const traditional = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function equivalent
const arrow = (name) => {
    return `Hello, ${name}!`;
};

console.log(traditional("Alice")); // "Hello, Alice!"
console.log(arrow("Bob")); // "Hello, Bob!"

// ============================================
// IMPLICIT RETURN
// ============================================

// Single expression - can omit braces and return
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Equivalent to:
const add2 = (a, b) => {
    return a + b;
};

// Single parameter - can omit parentheses
const square = x => x * x;
console.log(square(5)); // 25

// No parameters - need parentheses
const greet = () => "Hello!";
console.log(greet()); // "Hello!"

// ============================================
// ARROW FUNCTIONS WITH ARRAYS
// ============================================

let numbers = [1, 2, 3, 4, 5];

// Map with arrow function
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter with arrow function
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// Reduce with arrow function
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// ForEach with arrow function
numbers.forEach(n => console.log(n * 2)); // 2, 4, 6, 8, 10

// ============================================
// MULTILINE ARROW FUNCTIONS
// ============================================

// Need braces and explicit return for multiple statements
const process = (x) => {
    const doubled = x * 2;
    const squared = doubled * doubled;
    return squared;
};

console.log(process(3)); // 36

// ============================================
// LEXICAL THIS BINDING
// ============================================

// Traditional function - `this` depends on how it's called
const obj1 = {
    name: "Object 1",
    traditional: function() {
        return this.name; // `this` refers to obj1
    }
};

console.log(obj1.traditional()); // "Object 1"

// Arrow function - `this` is inherited from enclosing scope
const obj2 = {
    name: "Object 2",
    arrow: () => {
        return this.name; // `this` refers to global/window, not obj2
    }
};

console.log(obj2.arrow()); // undefined (or error in strict mode)

// Practical example: Event handlers
const button = {
    clicked: 0,
    // Traditional function - `this` refers to button
    handleClick: function() {
        this.clicked++;
        console.log(`Clicked ${this.clicked} times`);
    },
    // Arrow function - `this` doesn't refer to button
    handleClickArrow: () => {
        // this.clicked++; // Error: `this` is not button
        console.log("Arrow function - `this` is not button");
    }
};

button.handleClick(); // "Clicked 1 times"
button.handleClickArrow(); // "Arrow function - `this` is not button"

// ============================================
// ARROW FUNCTIONS IN CALLBACKS
// ============================================

// Common use case: Preserving `this` in callbacks
class Timer {
    constructor() {
        this.seconds = 0;
    }
    
    start() {
        // Traditional function - `this` changes
        // setInterval(function() {
        //     this.seconds++; // `this` is not Timer instance!
        // }, 1000);
        
        // Arrow function - `this` is preserved
        setInterval(() => {
            this.seconds++; // `this` refers to Timer instance
        }, 1000);
    }
}

// ============================================
// NO ARGUMENTS OBJECT
// ============================================

// Traditional function has `arguments` object
function traditionalArgs() {
    console.log(arguments); // Arguments object
    console.log(arguments[0]); // First argument
}

traditionalArgs(1, 2, 3);

// Arrow function does NOT have `arguments`
const arrowArgs = () => {
    // console.log(arguments); // ReferenceError: arguments is not defined
};

// Use rest parameters instead
const arrowWithRest = (...args) => {
    console.log(args); // Array of arguments
    console.log(args[0]); // First argument
};

arrowWithRest(1, 2, 3);

// ============================================
// CANNOT BE USED AS CONSTRUCTORS
// ============================================

// Traditional function can be constructor
function Person(name) {
    this.name = name;
}

const person = new Person("Alice");
console.log(person.name); // "Alice"

// Arrow function cannot be constructor
const PersonArrow = (name) => {
    this.name = name;
};

// const person2 = new PersonArrow("Bob"); // TypeError: PersonArrow is not a constructor

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Array methods
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Get names
const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

// Filter by age
const youngUsers = users.filter(user => user.age < 30);
console.log(youngUsers); // [{ name: "Alice", age: 25 }]

// Example 2: Sorting
const numbers2 = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = numbers2.sort((a, b) => a - b);
console.log(sorted); // [1, 1, 2, 3, 4, 5, 6, 9]

// Example 3: Promise chains
// fetch('/api/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// Example 4: Higher-order functions
const createMultiplier = (factor) => (number) => number * factor;
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Returning object literals
// Need parentheses around object literal
const createObj = () => ({ name: "Alice", age: 30 });
console.log(createObj()); // { name: "Alice", age: 30 }

// Without parentheses - syntax error
// const createObj2 = () => { name: "Alice" }; // SyntaxError

// 2. Arrow functions are not hoisted
// arrowFunc(); // ReferenceError

const arrowFunc = () => {
    return "Not hoisted";
};

// 3. Cannot use `yield` in arrow functions
// const generator = () => { yield 1; }; // SyntaxError

// 4. No prototype property
function Traditional() {}
const Arrow = () => {};

console.log(Traditional.prototype); // { constructor: f }
console.log(Arrow.prototype); // undefined

// 5. Cannot be used as methods (usually)
const obj3 = {
    name: "Test",
    // Arrow function - `this` is not obj3
    arrow: () => this.name,
    // Traditional function - `this` is obj3
    traditional: function() {
        return this.name;
    }
};

console.log(obj3.traditional()); // "Test"
console.log(obj3.arrow()); // undefined

// ============================================
// WHEN TO USE ARROW FUNCTIONS
// ============================================

// ✅ Use arrow functions for:
// - Short callbacks (map, filter, reduce)
// - When you want lexical `this`
// - When you don't need `arguments` object
// - When you don't need to be a constructor

// ❌ Don't use arrow functions for:
// - Object methods (usually want `this` to be object)
// - Constructors
// - When you need `arguments` object
// - Event handlers that need `this` to be the element

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use arrow functions for callbacks
// ✅ Good: array.map(item => item * 2)

// 2. Use traditional functions for object methods
// ✅ Good: const obj = { method: function() { return this.value; } }

// 3. Use arrow functions when you need lexical `this`
// ✅ Good: class methods that use callbacks

// 4. Be consistent in your codebase
// ✅ Good: Choose one style and stick with it

// 5. Use parentheses for single parameter (optional but recommended)
// ✅ Good: (x) => x * 2
// ✅ Also good: x => x * 2

// ============================================
// COMPARISON: ARROW VS TRADITIONAL
// ============================================

/**
 * ARROW FUNCTIONS:
 * - Shorter syntax: (x) => x * 2
 * - Lexical `this`: Inherits from enclosing scope
 * - No `arguments`: Use rest parameters
 * - No constructor: Cannot use `new`
 * - No hoisting: Cannot call before definition
 * 
 * TRADITIONAL FUNCTIONS:
 * - Longer syntax: function(x) { return x * 2; }
 * - Dynamic `this`: Depends on how called
 * - Has `arguments`: Available automatically
 * - Can be constructor: Can use `new`
 * - Hoisted: Can call before definition (declarations)
 */

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Convert a traditional function to an arrow function
// 2. Create an arrow function with implicit return
// 3. Use arrow functions with array methods (map, filter, reduce)
// 4. Create an arrow function that returns an object literal
// 5. Demonstrate lexical `this` binding in arrow functions
// 6. Create a higher-order function using arrow functions
// 7. Use arrow function in a callback that preserves `this`
// 8. Convert a function with `arguments` to use rest parameters
// 9. Explain why arrow functions can't be constructors
// 10. Create arrow functions with different parameter counts (0, 1, multiple)

