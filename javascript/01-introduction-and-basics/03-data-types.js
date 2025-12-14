/**
 * ============================================
 * DATA TYPES IN JAVASCRIPT
 * ============================================
 * 
 * WHY UNDERSTAND DATA TYPES?
 * --------------------------
 * JavaScript is dynamically typed, meaning variables can hold values of any type.
 * Understanding data types helps you:
 * - Write predictable code
 * - Avoid type-related bugs
 * - Use appropriate operations for each type
 * - Understand type coercion (covered in Module 2)
 * 
 * WHAT ARE DATA TYPES?
 * --------------------
 * Data types define the kind of data a variable can hold. JavaScript has:
 * - 7 Primitive Types (immutable, stored by value)
 * - 1 Reference Type (Object - mutable, stored by reference)
 * 
 * PRIMITIVE TYPES (7):
 * --------------------
 * 1. String - Text data
 * 2. Number - Numeric values (integers and floats)
 * 3. BigInt - Large integers beyond Number's safe range
 * 4. Boolean - true or false
 * 5. Undefined - Variable declared but not assigned
 * 6. Null - Intentional absence of value
 * 7. Symbol - Unique identifier (ES6)
 * 
 * REFERENCE TYPE:
 * ---------------
 * - Object - Collections of key-value pairs (includes Arrays, Functions, Dates, etc.)
 */

'use strict';

// ============================================
// 1. STRING - TEXT DATA
// ============================================

let singleQuotes = 'Hello, World!';
let doubleQuotes = "Hello, World!";
let templateLiteral = `Hello, World!`; // ES6 - allows interpolation

// Template literals allow expressions
let name = "Alice";
let greeting = `Hello, ${name}!`; // "Hello, Alice!"
let expression = `2 + 2 = ${2 + 2}`; // "2 + 2 = 4"

// Multi-line strings
let multiLine = `This is
a multi-line
string`;

// String methods
let text = "JavaScript";
console.log(text.length); // 10
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.toLowerCase()); // "javascript"
console.log(text.charAt(0)); // "J"
console.log(text.substring(0, 4)); // "Java"

// ============================================
// 2. NUMBER - NUMERIC VALUES
// ============================================

let integer = 42;
let float = 3.14;
let negative = -10;
let scientific = 1e6; // 1000000
let hex = 0xFF; // 255 in hexadecimal
let octal = 0o10; // 8 in octal (ES6)
let binary = 0b1010; // 10 in binary (ES6)

// Special number values
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN; // "Not a Number" - result of invalid math operations

// Number methods
console.log(Number.isInteger(42)); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseInt("42")); // 42

// Math operations
console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 % 3); // 1 (remainder)
console.log(10 ** 2); // 100 (exponentiation, ES6)

// Floating point precision issues (common gotcha!)
console.log(0.1 + 0.2); // 0.30000000000000004 (not exactly 0.3!)
console.log(0.1 + 0.2 === 0.3); // false

// Solution: Use rounding or Number.EPSILON
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

// ============================================
// 3. BIGINT - LARGE INTEGERS
// ============================================

// BigInt for numbers beyond Number.MAX_SAFE_INTEGER
let bigNumber = 9007199254740991n; // Note the 'n' suffix
let anotherBigInt = BigInt("9007199254740991");

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
let beyondSafe = 9007199254740992n;

// Operations with BigInt
console.log(bigNumber + 1n); // 9007199254740992n
// console.log(bigNumber + 1); // TypeError: Cannot mix BigInt and Number

// Convert between Number and BigInt
let num = 42;
let big = BigInt(num); // 42n
let backToNum = Number(big); // 42

// ============================================
// 4. BOOLEAN - TRUE OR FALSE
// ============================================

let isTrue = true;
let isFalse = false;

// Boolean conversion (truthy/falsy values)
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false (empty string)
console.log(Boolean("text")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true (empty array is truthy!)
console.log(Boolean({})); // true (empty object is truthy!)

// Falsy values in JavaScript (only these 8):
// false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy!

// ============================================
// 5. UNDEFINED - NOT ASSIGNED
// ============================================

let undefinedVar;
console.log(undefinedVar); // undefined
console.log(typeof undefinedVar); // "undefined"

// Undefined is a type AND a value
let explicitlyUndefined = undefined;
console.log(explicitlyUndefined === undefined); // true

// Function without return statement
function noReturn() {
    // No return statement
}
console.log(noReturn()); // undefined

// Accessing non-existent object property
let obj = {};
console.log(obj.nonExistent); // undefined

// ============================================
// 6. NULL - INTENTIONAL ABSENCE
// ============================================

let nullValue = null;
console.log(nullValue); // null
console.log(typeof nullValue); // "object" (this is a bug in JavaScript!)

// Null vs Undefined
console.log(null === undefined); // false (different types)
console.log(null == undefined); // true (loose equality - both are falsy)

// Use null when you want to explicitly indicate "no value"
let user = null; // User is not logged in
// Later...
user = { name: "John" }; // User logged in

// ============================================
// 7. SYMBOL - UNIQUE IDENTIFIER (ES6)
// ============================================

// Symbols are always unique
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false (always unique!)

// Use cases: Object property keys, preventing name collisions
let id = Symbol("id");
let userObj = {
    name: "Alice",
    [id]: 12345 // Symbol as property key
};

console.log(userObj[id]); // 12345
console.log(Object.keys(userObj)); // ["name"] - symbols are hidden!

// Global symbol registry
let globalSym = Symbol.for("globalId");
let sameGlobalSym = Symbol.for("globalId");
console.log(globalSym === sameGlobalSym); // true (same symbol from registry)

// ============================================
// TYPE CHECKING
// ============================================

// typeof operator
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof 42n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug!)
console.log(typeof Symbol()); // "symbol"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects!)
console.log(typeof function(){}); // "function"

// Better type checking
console.log(Array.isArray([])); // true
console.log([] instanceof Array); // true
console.log(null === null); // true (check for null explicitly)

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. typeof null returns "object" (historical bug)
console.log(typeof null); // "object" - but null is primitive!

// 2. NaN is of type "number"
console.log(typeof NaN); // "number"
console.log(NaN === NaN); // false (NaN is never equal to itself!)
console.log(Number.isNaN(NaN)); // true (use this to check)

// 3. Empty string vs null vs undefined
let empty = "";
let nullVal = null;
let undefinedVal = undefined;

console.log(empty == null); // false
console.log(empty == undefined); // false
console.log(nullVal == undefinedVal); // true (loose equality)

// 4. String numbers
let stringNum = "42";
console.log(typeof stringNum); // "string"
console.log(stringNum + 1); // "421" (concatenation, not addition!)

// 5. Array and Object are both "object" type
console.log(typeof []); // "object"
console.log(typeof {}); // "object"
console.log(Array.isArray([])); // true - use this to check arrays

// 6. Function is technically an object
function myFunc() {}
console.log(typeof myFunc); // "function"
console.log(myFunc instanceof Object); // true

// 7. BigInt cannot be used with Number in operations
// let result = 5n + 2; // TypeError
let result = 5n + 2n; // 7n (correct)

// ============================================
// TYPE COERCION PREVIEW (Module 2)
// ============================================

// JavaScript automatically converts types in some contexts
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (number subtraction)
console.log("5" * 3); // 15 (number multiplication)
console.log("5" / 3); // 1.666... (number division)

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create variables of each primitive type (String, Number, BigInt, Boolean, Undefined, Null, Symbol)
// 2. Use typeof to check each variable's type
// 3. Create a template literal that includes your name and age
// 4. Demonstrate the floating-point precision issue with 0.1 + 0.2
// 5. Create a Symbol and use it as a property key in an object
// 6. Check if an empty array is truthy or falsy
// 7. Explain why typeof null returns "object" (research the historical reason)
// 8. Create a BigInt and try to add it to a regular number (observe the error)

