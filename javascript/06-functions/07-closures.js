/**
 * ============================================
 * CLOSURES IN JAVASCRIPT
 * ============================================
 * 
 * WHY CLOSURES?
 * -------------
 * Closures are one of JavaScript's most powerful features. They allow:
 * - Functions to "remember" variables from outer scope
 * - Data privacy and encapsulation
 * - Function factories and higher-order functions
 * - Event handlers and callbacks
 * 
 * WHAT IS A CLOSURE?
 * ------------------
 * A closure is a function that has access to variables in its outer
 * (enclosing) scope, even after the outer function has returned.
 * 
 * KEY CONCEPTS:
 * ------------
 * - Lexical Scoping - Function remembers where it was defined
 * - Persistent State - Variables persist after outer function returns
 * - Private Variables - Can create private data
 * - Function Factories - Create functions with different configurations
 */

'use strict';

// ============================================
// BASIC CLOSURE
// ============================================

function outerFunction() {
    let outerVariable = "I'm from outer scope";
    
    function innerFunction() {
        // Inner function has access to outerVariable
        console.log(outerVariable); // "I'm from outer scope"
    }
    
    return innerFunction;
}

const closure = outerFunction();
closure(); // "I'm from outer scope"
// outerFunction has returned, but innerFunction still has access to outerVariable!

// ============================================
// CLOSURE WITH PERSISTENT STATE
// ============================================

function createCounter() {
    let count = 0; // Private variable
    
    return function() {
        count++; // Accesses and modifies outer variable
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

console.log(counter2()); // 1 (separate closure, separate state)
console.log(counter2()); // 2

// Each closure has its own independent state!

// ============================================
// PRIVATE VARIABLES WITH CLOSURES
// ============================================

function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable
    
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
account.deposit(50);
console.log(account.getBalance()); // 150
account.withdraw(30);
console.log(account.getBalance()); // 120

// balance is not directly accessible
// console.log(account.balance); // undefined

// ============================================
// FUNCTION FACTORIES
// ============================================

// Create functions with different configurations
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20

// Each function "remembers" its multiplier value!

// ============================================
// CLOSURES IN LOOPS (COMMON GOTCHA)
// ============================================

// Problem: All closures share the same variable
const functions = [];
for (var i = 0; i < 3; i++) {
    functions.push(function() {
        return i; // All return 3! (i is shared)
    });
}

console.log(functions[0]()); // 3 (not 0!)
console.log(functions[1]()); // 3 (not 1!)
console.log(functions[2]()); // 3 (not 2!)

// Solution 1: Use let (block scope)
const functions2 = [];
for (let j = 0; j < 3; j++) {
    functions2.push(function() {
        return j; // Each closure has its own j
    });
}

console.log(functions2[0]()); // 0
console.log(functions2[1]()); // 1
console.log(functions2[2]()); // 2

// Solution 2: IIFE to create new scope
const functions3 = [];
for (var k = 0; k < 3; k++) {
    functions3.push((function(index) {
        return function() {
            return index; // Each closure has its own index
        };
    })(k));
}

console.log(functions3[0]()); // 0
console.log(functions3[1]()); // 1
console.log(functions3[2]()); // 2

// ============================================
// CLOSURES WITH EVENT HANDLERS
// ============================================

// Closures are commonly used in event handlers
function setupButton(buttonId, message) {
    // message is captured in closure
    document.getElementById(buttonId).addEventListener('click', function() {
        alert(message); // Accesses message from outer scope
    });
}

// Each button has its own message, even though they share the same handler function

// ============================================
// MEMOIZATION WITH CLOSURES
// ============================================

function memoize(fn) {
    const cache = {}; // Private cache
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key]) {
            console.log("Cache hit!");
            return cache[key];
        }
        
        console.log("Computing...");
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const slowFunction = (n) => {
    // Simulate slow computation
    return n * 2;
};

const memoizedSlow = memoize(slowFunction);
console.log(memoizedSlow(5)); // "Computing..." 10
console.log(memoizedSlow(5)); // "Cache hit!" 10
console.log(memoizedSlow(5)); // "Cache hit!" 10

// ============================================
// MODULE PATTERN WITH CLOSURES
// ============================================

const Module = (function() {
    // Private variables and functions
    let privateVar = "I'm private";
    
    function privateFunction() {
        return "Private function";
    }
    
    // Public API (closures over private members)
    return {
        getPrivateVar: function() {
            return privateVar;
        },
        setPrivateVar: function(value) {
            privateVar = value;
        },
        usePrivateFunction: function() {
            return privateFunction();
        }
    };
})();

console.log(Module.getPrivateVar()); // "I'm private"
Module.setPrivateVar("New value");
console.log(Module.getPrivateVar()); // "New value"
console.log(Module.usePrivateFunction()); // "Private function"

// Private members are not accessible
// console.log(Module.privateVar); // undefined
// console.log(Module.privateFunction); // undefined

// ============================================
// PARTIAL APPLICATION
// ============================================

function add(a, b, c) {
    return a + b + c;
}

function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs);
    };
}

const add5 = partial(add, 5);
const add5And10 = partial(add, 5, 10);

console.log(add5(10, 15)); // 30 (5 + 10 + 15)
console.log(add5And10(20)); // 35 (5 + 10 + 20)

// ============================================
// CURRYING WITH CLOSURES
// ============================================

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

const curriedAdd = curry((a, b, c) => a + b + c);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. Closures capture variables by reference
function createFunctions() {
    const functions = [];
    const obj = { value: 0 };
    
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            return obj.value; // All reference same object
        });
    }
    
    obj.value = 10; // Changes value for all closures
    return functions;
}

const funcs = createFunctions();
console.log(funcs[0]()); // 10 (not 0!)

// 2. Closure over loop variable (var problem)
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3 (all same)
    }, 100);
}

// Solution: Use let or IIFE
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j); // 0, 1, 2 (correct)
    }, 100);
}

// 3. Memory leaks with closures
function createLargeClosure() {
    const largeData = new Array(1000000).fill("data");
    
    return function() {
        // Closure keeps largeData in memory even if not used
        return "small result";
    };
}

// Be careful: closures keep outer variables in memory

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use closures for data privacy
// ✅ Good: Private variables with public API

// 2. Be aware of memory implications
// ⚠️ Warning: Closures keep variables in memory

// 3. Use closures for function factories
// ✅ Good: createMultiplier, createCounter

// 4. Avoid closures in loops with var
// ❌ Bad: for (var i = 0; i < n; i++) { closures }
// ✅ Good: for (let i = 0; i < n; i++) { closures }

// 5. Use closures for callbacks and event handlers
// ✅ Good: Event handlers that need outer scope data

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Module pattern
const Module = (function() {
    // Private
    return {
        // Public
    };
})();

// Pattern 2: Function factory
function createFunction(config) {
    return function() {
        // Uses config
    };
}

// Pattern 3: Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        // Check cache, compute if needed
    };
}

// Pattern 4: Partial application
function partial(fn, ...args) {
    return function(...remaining) {
        return fn(...args, ...remaining);
    };
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a basic closure that accesses a variable from outer scope
// 2. Create a counter function using closures
// 3. Create a function factory that generates functions with different configurations
// 4. Implement private variables using closures
// 5. Fix the closure-in-loop problem (var vs let)
// 6. Create a memoization function using closures
// 7. Implement a module pattern with closures
// 8. Create a partial application function using closures
// 9. Explain how closures enable data privacy
// 10. Create a closure that persists state across multiple function calls

