/**
 * ============================================
 * VARIABLES IN JAVASCRIPT
 * ============================================
 * 
 * WHY VARIABLES?
 * --------------
 * Variables are containers for storing data values. They allow us to:
 * - Store and reuse values
 * - Make code more readable and maintainable
 * - Perform operations on data
 * 
 * WHAT ARE VARIABLES?
 * -------------------
 * A variable is a named storage location in memory. In JavaScript, variables
 * can hold any type of data: numbers, strings, objects, functions, etc.
 * 
 * THREE WAYS TO DECLARE VARIABLES:
 * --------------------------------
 * 1. var (ES5) - Function-scoped, can be redeclared, hoisted
 * 2. let (ES6) - Block-scoped, cannot be redeclared, not hoisted
 * 3. const (ES6) - Block-scoped, cannot be redeclared or reassigned, not hoisted
 * 
 * NAMING CONVENTIONS:
 * -------------------
 * - Must start with letter, underscore (_), or dollar sign ($)
 * - Can contain letters, digits, underscores, dollar signs
 * - Case-sensitive (myVar !== myvar)
 * - Cannot use reserved keywords (if, for, function, etc.)
 * - Use camelCase for variables (myVariableName)
 * - Use UPPER_SNAKE_CASE for constants (MAX_SIZE)
 * - Use descriptive names (userName, not u or n)
 */

'use strict';

// ============================================
// VAR - FUNCTION-SCOPED (LEGACY)
// ============================================

// var is function-scoped, not block-scoped
function varExample() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 - accessible outside the if block!
}

varExample();

// var can be redeclared (problematic!)
var age = 25;
var age = 30; // No error! This can cause bugs
console.log(age); // 30

// var is hoisted (moved to top of scope)
console.log(hoistedVar); // undefined (not an error!)
var hoistedVar = "I'm hoisted";

// ============================================
// LET - BLOCK-SCOPED (MODERN)
// ============================================

// let is block-scoped
function letExample() {
    if (true) {
        let y = 20;
        console.log(y); // 20 - works here
    }
    // console.log(y); // ReferenceError: y is not defined
}

letExample();

// let cannot be redeclared in the same scope
let name = "John";
// let name = "Jane"; // SyntaxError: Identifier 'name' has already been declared

// But can be redeclared in different scopes
let value = 1;
if (true) {
    let value = 2; // Different scope, this is fine
    console.log(value); // 2
}
console.log(value); // 1

// let is not hoisted (Temporal Dead Zone)
// console.log(hoistedLet); // ReferenceError: Cannot access before initialization
let hoistedLet = "I'm not hoisted";

// ============================================
// CONST - BLOCK-SCOPED, IMMUTABLE BINDING
// ============================================

// const cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable

// const must be initialized
// const uninitialized; // SyntaxError: Missing initializer

// const is block-scoped (like let)
if (true) {
    const blockConst = "I'm in a block";
    console.log(blockConst); // Works
}
// console.log(blockConst); // ReferenceError

// IMPORTANT: const doesn't make objects/arrays immutable!
const person = {
    name: "Alice",
    age: 30
};

person.age = 31; // This works! We're modifying the object, not reassigning
console.log(person); // { name: "Alice", age: 31 }

// person = {}; // This would fail - cannot reassign the variable

const numbers = [1, 2, 3];
numbers.push(4); // This works!
console.log(numbers); // [1, 2, 3, 4]

// numbers = [5, 6, 7]; // This would fail

// ============================================
// VARIABLE NAMING EXAMPLES
// ============================================

// ✅ Good naming
let userName = "john_doe";
let userAge = 25;
let isActive = true;
const MAX_USERS = 100;

// ❌ Bad naming
let u = "john"; // Too short, not descriptive
let user_name = "john"; // Snake case (not wrong, but camelCase is JS convention)
let UserName = "john"; // PascalCase is for constructors/classes
let 2users = 10; // Cannot start with number
let let = "value"; // Cannot use reserved keyword

// ============================================
// VARIABLE DECLARATION PATTERNS
// ============================================

// Single declaration
let a = 1;

// Multiple declarations
let b = 2, c = 3, d = 4;

// Declare first, assign later
let e;
e = 5;

// Multiple declarations, some initialized
let f, g = 6, h;
f = 7;
h = 8;

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Undeclared vs Undefined
let declaredButUndefined;
console.log(declaredButUndefined); // undefined

// console.log(neverDeclared); // ReferenceError: neverDeclared is not defined

// 2. Global scope pollution with var
function varGlobalIssue() {
    if (true) {
        var globalVar = "I'm in global scope if function is in global";
    }
}
varGlobalIssue();
// In browser: globalVar might be accessible (depending on context)

// 3. Loop with var (classic gotcha)
console.log("Loop with var:");
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Prints 3, 3, 3 (not 0, 1, 2)!
    }, 100);
}

// Loop with let (correct behavior)
console.log("Loop with let:");
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j); // Prints 0, 1, 2 correctly
    }, 100);
}

// 4. const with objects - shallow immutability
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};

// Can modify properties
config.timeout = 10000; // ✅ Allowed

// Cannot reassign
// config = {}; // ❌ Error

// To make object truly immutable, use Object.freeze()
const frozenConfig = Object.freeze({
    apiUrl: "https://api.example.com",
    timeout: 5000
});

// frozenConfig.timeout = 10000; // Silently fails in non-strict mode
// In strict mode: TypeError: Cannot assign to read only property

// ============================================
// BEST PRACTICES
// ============================================

// 1. Prefer const by default, use let when reassignment is needed
const API_BASE_URL = "https://api.example.com"; // Constant value
let currentUser = null; // Will be reassigned

// 2. Avoid var (use let/const instead)
// var is legacy and has confusing scoping rules

// 3. Use meaningful names
// ❌ Bad: let x = getUserData();
// ✅ Good: let userData = getUserData();

// 4. Initialize variables when possible
// ❌ Bad: let result; ... result = calculate();
// ✅ Good: let result = calculate();

// 5. Group related declarations
let firstName = "John";
let lastName = "Doe";
let email = "john@example.com";

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Declare a const variable called 'birthYear' and assign your birth year
// 2. Declare a let variable called 'currentAge' and calculate it using the current year
// 3. Create a const object called 'myInfo' with properties: name, age, city
// 4. Try to modify the 'age' property of 'myInfo' (should work)
// 5. Try to reassign 'myInfo' to a new object (should fail)
// 6. Create a for loop using 'let' that logs numbers 1-5
// 7. Explain in comments why 'var' would cause issues in the loop above

