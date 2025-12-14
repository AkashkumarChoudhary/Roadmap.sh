/**
 * ============================================
 * IMPLICIT TYPE COERCION IN JAVASCRIPT
 * ============================================
 * 
 * WHY UNDERSTAND IMPLICIT COERCION?
 * ----------------------------------
 * JavaScript automatically converts types in certain contexts. This "feature"
 * can lead to unexpected behavior and bugs if not understood. Knowing how
 * coercion works helps you write predictable code and debug issues.
 * 
 * WHAT IS IMPLICIT COERCION?
 * --------------------------
 * Implicit coercion (also called type coercion) happens when JavaScript
 * automatically converts a value from one type to another to perform an
 * operation. You don't explicitly tell it to convert - it happens automatically.
 * 
 * WHEN DOES COERCION HAPPEN?
 * --------------------------
 * 1. Arithmetic operations (+, -, *, /, %)
 * 2. Comparison operations (==, !=, <, >, <=, >=)
 * 3. Logical operations (&&, ||, !)
 * 4. String concatenation (+)
 * 5. Template literals
 * 
 * THE WEIRD PARTS:
 * ---------------
 * JavaScript's coercion rules can be surprising:
 * - "5" + 3 = "53" (string concatenation)
 * - "5" - 3 = 2 (number subtraction)
 * - [] + [] = "" (empty string!)
 * - [] + {} = "[object Object]"
 * - {} + [] = 0 (in some contexts)
 * - true + true = 2
 * - null + 1 = 1
 * - undefined + 1 = NaN
 */

'use strict';

// ============================================
// 1. COERCION WITH ARITHMETIC OPERATORS
// ============================================

// Addition (+) - Special case: prefers string concatenation
console.log("5" + 3); // "53" (string concatenation, not addition!)
console.log(3 + "5"); // "35" (same result)
console.log("Hello" + " " + "World"); // "Hello World"

// If ANY operand is a string, + becomes concatenation
console.log(1 + 2 + "3"); // "33" (1+2=3, then "3"+"3"="33")
console.log("1" + 2 + 3); // "123" (all become strings)
console.log(1 + "2" + 3); // "123"

// Other arithmetic operators convert to numbers
console.log("5" - 3); // 2 (both converted to numbers)
console.log("10" - "5"); // 5
console.log("5" * 2); // 10
console.log("10" / "2"); // 5
console.log("10" % "3"); // 1

// Coercion with different types
console.log(true + 1); // 2 (true becomes 1)
console.log(false + 1); // 1 (false becomes 0)
console.log(null + 1); // 1 (null becomes 0)
console.log(undefined + 1); // NaN (undefined becomes NaN)
console.log("5" - true); // 4 ("5"=5, true=1, 5-1=4)

// ============================================
// 2. COERCION WITH COMPARISON OPERATORS
// ============================================

// Loose equality (==) - performs coercion
console.log(5 == "5"); // true (coerces string to number)
console.log(true == 1); // true (coerces boolean to number)
console.log(false == 0); // true
console.log(null == undefined); // true (special case)
console.log("" == 0); // true (empty string becomes 0)
console.log(" " == 0); // true (whitespace becomes 0)
console.log([] == 0); // true (empty array becomes 0)
console.log([5] == 5); // true (array with one element)

// Strict equality (===) - NO coercion
console.log(5 === "5"); // false (different types)
console.log(true === 1); // false
console.log(null === undefined); // false

// Comparison operators (<, >, <=, >=) - convert to numbers
console.log("5" > 3); // true
console.log("10" < "2"); // true! (string comparison, not number!)
console.log("10" < 2); // false (one is number, so both converted to numbers)

// String comparison (lexicographic)
console.log("10" < "2"); // true (compares "1" vs "2" character by character)
console.log("apple" < "banana"); // true
console.log("Z" < "a"); // true (uppercase < lowercase in ASCII)

// ============================================
// 3. THE WEIRD PARTS - ARRAYS AND OBJECTS
// ============================================

// Arrays in arithmetic
console.log([] + []); // "" (empty string!)
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 (in Node.js) or "[object Object]" (in browser console)
console.log({} + {}); // "[object Object][object Object]"

// How arrays convert
console.log([].toString()); // "" (empty array becomes empty string)
console.log([1, 2, 3].toString()); // "1,2,3"
console.log([1] + 1); // "11" (array becomes "1", then concatenation)
console.log([1, 2] + 1); // "1,21"
console.log([1, 2, 3] - 1); // NaN (can't subtract from "1,2,3")

// Objects in arithmetic
console.log({} + 1); // "[object Object]1" or 1 (context dependent)
console.log({} - 1); // NaN
console.log({}.toString()); // "[object Object]"

// ============================================
// 4. COERCION IN LOGICAL OPERATIONS
// ============================================

// Logical AND (&&) - returns first falsy or last truthy
console.log("hello" && "world"); // "world" (both truthy, returns last)
console.log("" && "world"); // "" (first is falsy, returns it)
console.log(0 && "world"); // 0
console.log(null && "world"); // null

// Logical OR (||) - returns first truthy or last falsy
console.log("hello" || "world"); // "hello" (first is truthy)
console.log("" || "world"); // "world" (first is falsy, returns second)
console.log(null || undefined || "default"); // "default"

// Logical NOT (!) - converts to boolean, then negates
console.log(!"hello"); // false
console.log(!!"hello"); // true (double negation for boolean conversion)
console.log(!0); // true
console.log(![]); // false (array is truthy, so ![] is false)

// ============================================
// 5. COERCION WITH NULL AND UNDEFINED
// ============================================

// null coercion
console.log(null + 1); // 1 (null becomes 0)
console.log(null * 5); // 0
console.log(null == 0); // false! (special case)
console.log(null == null); // true
console.log(null == undefined); // true (special case)

// undefined coercion
console.log(undefined + 1); // NaN (undefined becomes NaN)
console.log(undefined * 5); // NaN
console.log(undefined == null); // true
console.log(undefined == 0); // false

// ============================================
// 6. COERCION IN CONDITIONALS
// ============================================

// if statement coerces to boolean
if ("hello") {
    console.log("String is truthy");
}

if (0) {
    console.log("This won't run");
} else {
    console.log("0 is falsy");
}

if ([]) {
    console.log("Empty array is truthy!");
}

if ({}) {
    console.log("Empty object is truthy!");
}

// Ternary operator
let result = "hello" ? "truthy" : "falsy";
console.log(result); // "truthy"

// ============================================
// 7. COERCION RULES SUMMARY
// ============================================

/**
 * TO NUMBER:
 * - true → 1
 * - false → 0
 * - null → 0
 * - undefined → NaN
 * - "" → 0
 * - "123" → 123
 * - "abc" → NaN
 * - [] → 0 (empty array)
 * - [5] → 5 (single element)
 * - [1,2] → NaN (multiple elements)
 * - {} → NaN
 * 
 * TO STRING:
 * - 123 → "123"
 * - true → "true"
 * - false → "false"
 * - null → "null"
 * - undefined → "undefined"
 * - [] → ""
 * - [1,2,3] → "1,2,3"
 * - {} → "[object Object]"
 * 
 * TO BOOLEAN:
 * - Falsy: false, 0, -0, 0n, "", null, undefined, NaN
 * - Truthy: Everything else (including [], {})
 */

// ============================================
// 8. COMMON PITFALLS AND GOTCHAS
// ============================================

// Pitfall 1: Addition vs Concatenation
let a = "5";
let b = 3;
console.log(a + b); // "53" (not 8!)
// Solution: Convert explicitly
console.log(Number(a) + b); // 8

// Pitfall 2: String comparison
console.log("10" < "2"); // true (string comparison!)
console.log(Number("10") < Number("2")); // false (number comparison)

// Pitfall 3: Array equality
console.log([] == 0); // true
console.log([] === 0); // false
console.log([0] == 0); // true
console.log([0] === 0); // false

// Pitfall 4: null and undefined
console.log(null == 0); // false (special case!)
console.log(null >= 0); // true (null becomes 0 for comparison)
console.log(null > 0); // false

// Pitfall 5: Object comparison
let obj1 = {};
let obj2 = {};
console.log(obj1 == obj2); // false (different objects)
console.log(obj1 === obj2); // false
console.log(obj1 == "[object Object]"); // true (coercion!)

// Pitfall 6: The + operator ambiguity
function add(a, b) {
    return a + b; // Could be addition or concatenation!
}
console.log(add(1, 2)); // 3
console.log(add("1", 2)); // "12" (unexpected!)

// ============================================
// 9. HOW TO AVOID COERCION ISSUES
// ============================================

// 1. Use strict equality (===) instead of loose (==)
// ❌ Bad: if (value == 5)
// ✅ Good: if (value === 5)

// 2. Explicitly convert types
// ❌ Bad: let result = "5" + 3; // "53"
// ✅ Good: let result = Number("5") + 3; // 8
// ✅ Good: let result = String(5) + String(3); // "53" (if that's what you want)

// 3. Use Number() for arithmetic
function safeAdd(a, b) {
    return Number(a) + Number(b);
}

// 4. Check types explicitly
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// 5. Use Array.isArray() instead of == []
console.log(Array.isArray([])); // true
console.log([] == []); // false (different objects)

// ============================================
// 10. PRACTICAL EXAMPLES
// ============================================

// Example 1: Form input handling
function calculateTotal(price, quantity) {
    // Problem: if inputs are strings, + will concatenate
    // let total = price + quantity; // Wrong if strings!
    
    // Solution: Convert explicitly
    return Number(price) + Number(quantity);
}

console.log(calculateTotal("10", "5")); // 15 (not "105")
console.log(calculateTotal(10, 5)); // 15

// Example 2: Safe comparison
function isEqual(a, b) {
    // Use strict equality to avoid coercion surprises
    return a === b;
}

console.log(isEqual(5, "5")); // false (expected behavior)
console.log(isEqual(5, 5)); // true

// Example 3: Default value pattern
function greet(name) {
    // Coercion can be useful here
    name = name || "Guest"; // If name is falsy, use "Guest"
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("")); // "Hello, Guest!"
console.log(greet(null)); // "Hello, Guest!"

// Modern alternative (ES2020):
function greetModern(name) {
    name = name ?? "Guest"; // Nullish coalescing (only null/undefined)
    return `Hello, ${name}!`;
}

console.log(greetModern("")); // "Hello, !" (empty string is not null/undefined)
console.log(greetModern(null)); // "Hello, Guest!"

// ============================================
// 11. THE FAMOUS EXAMPLES
// ============================================

// These are often used in JavaScript quizzes/interviews

console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 or "[object Object]" (context dependent)
console.log(true + true + true); // 3
console.log(true - true); // 0
console.log('b' + 'a' + + 'a' + 'a'); // "baNaNa" (+'a' is NaN)
console.log([1,2,3] + [4,5,6]); // "1,2,34,5,6"
console.log(![] + []); // "false" (![] is false, [] becomes "")
console.log([] == ![]); // true (both become 0 or false)
console.log([] == 0); // true
console.log(![] == 0); // true

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Predict and test: What is "5" + 3 + 2? What about 3 + 2 + "5"?
// 2. Predict and test: What is [] + []? What about [] + {}?
// 3. Predict and test: What is true + true? What about true + false?
// 4. Predict and test: What is null + 1? What about undefined + 1?
// 5. Predict and test: What is "10" < "2"? What about "10" < 2?
// 6. Create a function that safely adds two values, handling string inputs
// 7. Explain why [] == 0 is true but [] === 0 is false
// 8. Create examples showing when coercion is helpful vs when it causes bugs
// 9. Test: What happens when you do [1,2,3] - 1? Why?
// 10. Research and explain the difference between == and === with examples

