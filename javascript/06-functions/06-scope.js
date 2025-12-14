/**
 * ============================================
 * SCOPE IN JAVASCRIPT
 * ============================================
 * 
 * WHY UNDERSTAND SCOPE?
 * ---------------------
 * Scope determines where variables and functions are accessible in your code.
 * Understanding scope helps you:
 * - Avoid variable name conflicts
 * - Write more maintainable code
 * - Understand how JavaScript finds variables
 * - Debug variable access issues
 * 
 * WHAT IS SCOPE?
 * --------------
 * Scope is the context in which variables and functions are accessible:
 * - Global Scope - Accessible everywhere
 * - Function Scope - Accessible within function (var)
 * - Block Scope - Accessible within block { } (let, const)
 * 
 * KEY CONCEPTS:
 * ------------
 * - Lexical Scoping - Scope determined by code structure
 * - Scope Chain - How JavaScript searches for variables
 * - Hoisting - Variable/function declarations moved to top
 */

'use strict';

// ============================================
// 1. GLOBAL SCOPE
// ============================================

// Variables declared outside functions are in global scope
let globalVar = "I'm global";
var globalVar2 = "I'm also global";

function testGlobal() {
    console.log(globalVar); // "I'm global" - accessible
    console.log(globalVar2); // "I'm also global" - accessible
}

testGlobal();
console.log(globalVar); // "I'm global" - accessible everywhere

// In browser, global scope is `window` object
// In Node.js, global scope is `global` object

// ============================================
// 2. FUNCTION SCOPE
// ============================================

// Variables declared with `var` are function-scoped
function functionScope() {
    var functionVar = "I'm in function scope";
    
    if (true) {
        var stillInFunction = "Still accessible";
    }
    
    console.log(functionVar); // Accessible
    console.log(stillInFunction); // Accessible (even though in if block)
}

functionScope();
// console.log(functionVar); // ReferenceError: functionVar is not defined

// ============================================
// 3. BLOCK SCOPE
// ============================================

// Variables declared with `let` and `const` are block-scoped
function blockScope() {
    let blockVar = "I'm in function scope";
    
    if (true) {
        let blockScoped = "I'm in block scope";
        const alsoBlockScoped = "Me too";
        
        console.log(blockScoped); // Accessible
        console.log(alsoBlockScoped); // Accessible
    }
    
    console.log(blockVar); // Accessible
    // console.log(blockScoped); // ReferenceError: not accessible outside block
    // console.log(alsoBlockScoped); // ReferenceError
}

blockScope();

// ============================================
// SCOPE CHAIN
// ============================================

// JavaScript searches for variables up the scope chain
let outer = "outer variable";

function outerFunction() {
    let middle = "middle variable";
    
    function innerFunction() {
        let inner = "inner variable";
        
        // Can access all three
        console.log(inner); // "inner variable" (current scope)
        console.log(middle); // "middle variable" (outer scope)
        console.log(outer); // "outer variable" (global scope)
    }
    
    innerFunction();
    // console.log(inner); // ReferenceError: inner is not accessible
}

outerFunction();

// ============================================
// VARIABLE SHADOWING
// ============================================

// Inner scope can declare variable with same name as outer scope
let name = "Global";

function shadowExample() {
    let name = "Function"; // Shadows global name
    
    if (true) {
        let name = "Block"; // Shadows function name
        console.log(name); // "Block"
    }
    
    console.log(name); // "Function"
}

shadowExample();
console.log(name); // "Global"

// ============================================
// HOISTING
// ============================================

// Variable declarations are hoisted (moved to top of scope)

// var hoisting
console.log(hoistedVar); // undefined (not ReferenceError!)
var hoistedVar = "I'm hoisted";

// Equivalent to:
// var hoistedVar; // Declaration hoisted
// console.log(hoistedVar); // undefined
// hoistedVar = "I'm hoisted"; // Assignment stays

// let/const hoisting (Temporal Dead Zone)
// console.log(hoistedLet); // ReferenceError: Cannot access before initialization
let hoistedLet = "I'm hoisted but in TDZ";

// Function hoisting
sayHi(); // Works! Function is hoisted

function sayHi() {
    console.log("Hi!");
}

// ============================================
// LEXICAL SCOPING
// ============================================

// Scope is determined by where code is written, not where it's called

let lexical = "lexical";

function outerLexical() {
    let outer = "outer";
    
    function innerLexical() {
        // Accesses variables from where it's defined, not where it's called
        console.log(lexical); // "lexical"
        console.log(outer); // "outer"
    }
    
    return innerLexical;
}

const inner = outerLexical();
inner(); // Still has access to outer and lexical

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Example 1: Avoiding global pollution
(function() {
    // Private scope - variables not accessible outside
    let privateVar = "secret";
    function privateFunction() {
        return privateVar;
    }
    
    // Public API
    window.myModule = {
        getPrivate: privateFunction
    };
})();

// Example 2: Loop variable scope
// Problem with var
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // 3, 3, 3 (all same value)
    }, 100);
}

// Solution with let (block scope)
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j); // 0, 1, 2 (correct)
    }, 100);
}

// Example 3: Module pattern with scope
const Calculator = (function() {
    // Private scope
    let result = 0;
    
    function validate(num) {
        return typeof num === "number";
    }
    
    // Public API
    return {
        add: function(num) {
            if (validate(num)) {
                result += num;
            }
            return this;
        },
        getResult: function() {
            return result;
        }
    };
})();

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. var in blocks
if (true) {
    var blockVar = "I'm function scoped";
}
console.log(blockVar); // Accessible! (var is function-scoped, not block-scoped)

if (true) {
    let blockLet = "I'm block scoped";
}
// console.log(blockLet); // ReferenceError

// 2. Function scope vs block scope
function testScope() {
    if (true) {
        var functionScoped = "var";
        let blockScoped = "let";
    }
    console.log(functionScoped); // "var" (accessible)
    // console.log(blockScoped); // ReferenceError
}

// 3. Temporal Dead Zone (TDZ)
// console.log(tdzVar); // ReferenceError
let tdzVar = "In TDZ until here";

// 4. Redeclaration
var redeclared = 1;
var redeclared = 2; // Allowed (problematic!)

let notRedeclared = 1;
// let notRedeclared = 2; // SyntaxError: Cannot redeclare

// 5. Scope chain search order
let x = "global";

function testChain() {
    // JavaScript searches: current scope -> outer scope -> global
    console.log(x); // "global" (searches up the chain)
    
    let x = "local"; // Declaration hoisted, but assignment not
    console.log(x); // "local"
}

testChain();

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use let/const instead of var
// ✅ Good: let x = 5;
// ❌ Bad: var x = 5;

// 2. Minimize global variables
// ✅ Good: Use modules, IIFE, or block scope
// ❌ Bad: Many global variables

// 3. Use block scope for temporary variables
// ✅ Good: { let temp = value; /* use temp */ }
// ❌ Bad: var temp = value; /* use temp */ (pollutes function scope)

// 4. Be aware of hoisting
// ✅ Good: Declare variables at top of scope
// ⚠️ Acceptable: Understand hoisting behavior

// 5. Use descriptive variable names to avoid shadowing
// ✅ Good: userCount, totalCount (clear, no shadowing)
// ⚠️ Acceptable: count in different scopes (if intentional)

// ============================================
// SCOPE TYPES SUMMARY
// ============================================

/**
 * GLOBAL SCOPE:
 * - Variables declared outside functions
 * - Accessible everywhere
 * - Can be accessed via window/global object
 * 
 * FUNCTION SCOPE (var):
 * - Variables declared with var
 * - Accessible throughout entire function
 * - Not accessible outside function
 * 
 * BLOCK SCOPE (let, const):
 * - Variables declared with let/const
 * - Accessible only within { } block
 * - Not accessible outside block
 */

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create variables in global, function, and block scope
// 2. Demonstrate variable shadowing with nested scopes
// 3. Show the difference between var (function scope) and let (block scope)
// 4. Create a scope chain with nested functions
// 5. Demonstrate hoisting with var vs let/const
// 6. Create a module using IIFE to avoid global pollution
// 7. Show how loop variables behave with var vs let
// 8. Explain lexical scoping with an example
// 9. Create a function that accesses variables from outer scope
// 10. Demonstrate the Temporal Dead Zone with let/const

