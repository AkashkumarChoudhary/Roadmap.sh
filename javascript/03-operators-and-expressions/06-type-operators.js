/**
 * ============================================
 * TYPE OPERATORS IN JAVASCRIPT
 * ============================================
 * 
 * WHY TYPE OPERATORS?
 * -------------------
 * Type operators help you determine the type of a value at runtime.
 * This is crucial for:
 * - Type checking and validation
 * - Debugging
 * - Handling different data types
 * - Type guards in TypeScript
 * 
 * WHAT ARE TYPE OPERATORS?
 * ------------------------
 * Operators that provide information about types:
 * - typeof - Returns a string indicating the type
 * - instanceof - Checks if an object is an instance of a constructor
 * 
 * IMPORTANT NOTES:
 * ---------------
 * - typeof has some quirks (null returns "object", arrays return "object")
 * - instanceof checks the prototype chain
 * - Both are runtime checks, not compile-time
 */

'use strict';

// ============================================
// 1. TYPEOF OPERATOR
// ============================================

// Returns a string indicating the type of the operand

// Primitives
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof 42n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"

// Special cases
console.log(typeof null); // "object" (BUG in JavaScript!)
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof {}); // "object"
console.log(typeof function(){}); // "function"
console.log(typeof NaN); // "number"
console.log(typeof Infinity); // "number"

// ============================================
// TYPEOF WITH VARIABLES
// ============================================

let str = "hello";
let num = 42;
let bool = true;
let obj = {};
let arr = [];
let func = function() {};
let nullVal = null;
let undefinedVal = undefined;

console.log(typeof str); // "string"
console.log(typeof num); // "number"
console.log(typeof bool); // "boolean"
console.log(typeof obj); // "object"
console.log(typeof arr); // "object"
console.log(typeof func); // "function"
console.log(typeof nullVal); // "object" (bug!)
console.log(typeof undefinedVal); // "undefined"

// ============================================
// TYPEOF EDGE CASES
// ============================================

// 1. typeof null returns "object" (historical bug)
console.log(typeof null); // "object"
// To check for null, use:
console.log(null === null); // true
console.log(nullVal === null); // true

// 2. Arrays return "object"
console.log(typeof []); // "object"
// Use Array.isArray() instead:
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// 3. Functions return "function" (but they're objects!)
console.log(typeof function(){}); // "function"
console.log(function(){} instanceof Object); // true

// 4. NaN returns "number"
console.log(typeof NaN); // "number"
console.log(Number.isNaN(NaN)); // true (use this to check)

// 5. Undeclared variables
// console.log(typeof undeclaredVar); // "undefined" (doesn't throw error!)
// console.log(undeclaredVar); // ReferenceError

// ============================================
// PRACTICAL TYPEOF USES
// ============================================

// Use case 1: Type checking function
function getType(value) {
    if (value === null) {
        return "null"; // Handle null explicitly
    }
    if (Array.isArray(value)) {
        return "array"; // Handle arrays explicitly
    }
    return typeof value;
}

console.log(getType("hello")); // "string"
console.log(getType(42)); // "number"
console.log(getType(null)); // "null"
console.log(getType([])); // "array"
console.log(getType({})); // "object"

// Use case 2: Type validation
function validateNumber(value) {
    if (typeof value !== "number") {
        throw new TypeError("Expected a number");
    }
    if (isNaN(value)) {
        throw new TypeError("Value is NaN");
    }
    return value;
}

// validateNumber("5"); // TypeError
validateNumber(5); // OK

// Use case 3: Safe property access
function safeGetProperty(obj, prop) {
    if (typeof obj !== "object" || obj === null) {
        return undefined;
    }
    return obj[prop];
}

// Use case 4: Function type check
function isFunction(value) {
    return typeof value === "function";
}

console.log(isFunction(function(){})); // true
console.log(isFunction(() => {})); // true
console.log(isFunction({})); // false

// ============================================
// 2. INSTANCEOF OPERATOR
// ============================================

// Checks if an object is an instance of a constructor
// Returns true if the object's prototype chain contains the constructor's prototype

// With built-in constructors
let arr2 = [];
console.log(arr2 instanceof Array); // true
console.log(arr2 instanceof Object); // true (Array inherits from Object)

let date = new Date();
console.log(date instanceof Date); // true
console.log(date instanceof Object); // true

let regex = /test/;
console.log(regex instanceof RegExp); // true

// With custom constructors
function Person(name) {
    this.name = name;
}

let person = new Person("Alice");
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

// ============================================
// INSTANCEOF WITH CLASSES
// ============================================

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true (inheritance)
console.log(dog instanceof Object); // true

// ============================================
// INSTANCEOF EDGE CASES
// ============================================

// 1. Primitives are not instances
console.log("hello" instanceof String); // false (primitive)
console.log(new String("hello") instanceof String); // true (object)

console.log(42 instanceof Number); // false (primitive)
console.log(new Number(42) instanceof Number); // true (object)

// 2. null and undefined
// console.log(null instanceof Object); // false
// console.log(undefined instanceof Object); // false

// 3. Arrays are instances of both Array and Object
let arr3 = [];
console.log(arr3 instanceof Array); // true
console.log(arr3 instanceof Object); // true

// 4. Functions are instances of Function and Object
function test() {}
console.log(test instanceof Function); // true
console.log(test instanceof Object); // true

// 5. instanceof checks the prototype chain
function Parent() {}
function Child() {}
Child.prototype = Object.create(Parent.prototype);

let child = new Child();
console.log(child instanceof Child); // true
console.log(child instanceof Parent); // true
console.log(child instanceof Object); // true

// ============================================
// INSTANCEOF VS TYPEOF
// ============================================

// typeof works with primitives
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"

// instanceof works with objects
console.log("hello" instanceof String); // false (primitive)
console.log(new String("hello") instanceof String); // true (object)

// Arrays
console.log(typeof []); // "object"
console.log([] instanceof Array); // true

// Functions
console.log(typeof function(){}); // "function"
console.log(function(){} instanceof Function); // true

// ============================================
// PRACTICAL INSTANCEOF USES
// ============================================

// Use case 1: Type checking in functions
function processData(data) {
    if (data instanceof Array) {
        return data.map(x => x * 2);
    }
    if (data instanceof Date) {
        return data.toISOString();
    }
    return String(data);
}

console.log(processData([1, 2, 3])); // [2, 4, 6]
console.log(processData(new Date())); // ISO string

// Use case 2: Error handling
try {
    // Some code
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type error occurred");
    } else if (error instanceof ReferenceError) {
        console.log("Reference error occurred");
    } else {
        console.log("Other error occurred");
    }
}

// Use case 3: Polymorphism
class Shape {
    area() {
        throw new Error("Must implement area()");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

function calculateArea(shape) {
    if (shape instanceof Shape) {
        return shape.area();
    }
    throw new TypeError("Expected a Shape instance");
}

let circle = new Circle(5);
console.log(calculateArea(circle)); // ~78.54

// ============================================
// COMBINING TYPEOF AND INSTANCEOF
// ============================================

function getDetailedType(value) {
    // Handle null explicitly
    if (value === null) {
        return "null";
    }
    
    // Handle arrays
    if (Array.isArray(value)) {
        return "array";
    }
    
    // Handle primitives
    let primitiveType = typeof value;
    if (primitiveType !== "object") {
        return primitiveType;
    }
    
    // Handle objects - check for specific types
    if (value instanceof Date) {
        return "date";
    }
    if (value instanceof RegExp) {
        return "regexp";
    }
    if (value instanceof Error) {
        return "error";
    }
    
    // Generic object
    return "object";
}

console.log(getDetailedType("hello")); // "string"
console.log(getDetailedType(42)); // "number"
console.log(getDetailedType(null)); // "null"
console.log(getDetailedType([])); // "array"
console.log(getDetailedType(new Date())); // "date"
console.log(getDetailedType({})); // "object"

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use typeof for primitives
// ✅ Good: if (typeof value === "string") { ... }

// 2. Use instanceof for objects/classes
// ✅ Good: if (value instanceof Array) { ... }

// 3. Handle null explicitly
// ❌ Bad: if (typeof value === "object") { ... } // Includes null!
// ✅ Good: if (value !== null && typeof value === "object") { ... }

// 4. Use Array.isArray() for arrays
// ❌ Bad: if (typeof arr === "object") { ... } // Doesn't distinguish arrays
// ✅ Good: if (Array.isArray(arr)) { ... }

// 5. Check for functions with typeof
// ✅ Good: if (typeof fn === "function") { ... }

// 6. Use instanceof for error types
// ✅ Good: if (error instanceof TypeError) { ... }

// ============================================
// COMMON MISTAKES
// ============================================

// Mistake 1: typeof null
if (typeof value === "object") {
    // This includes null! Be careful
}

// Mistake 2: typeof array
if (typeof arr === "object") {
    // This is true for arrays, but also objects, null, etc.
    // Use Array.isArray() instead
}

// Mistake 3: instanceof with primitives
if ("hello" instanceof String) {
    // false! Primitives are not instances
}

// Mistake 4: typeof function
// typeof works fine for functions, but remember they're also objects

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Use typeof to check if a value is a string
// 2. Use typeof to check if a value is a number (and not NaN)
// 3. Use Array.isArray() to check if a value is an array
// 4. Use instanceof to check if an object is a Date
// 5. Create a function that returns the detailed type of any value
// 6. Explain why typeof null returns "object"
// 7. Use instanceof to check if an error is a TypeError
// 8. Create a type guard function using typeof and instanceof
// 9. Check if a value is a function using typeof
// 10. Explain the difference between typeof and instanceof with examples

