/**
 * ============================================
 * IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
 * ============================================
 * 
 * WHY IIFE?
 * ---------
 * IIFE (Immediately Invoked Function Expression) allows you to:
 * - Execute code immediately without polluting global scope
 * - Create private scope for variables
 * - Avoid variable name conflicts
 * - Create modules before ES6 modules existed
 * 
 * WHAT IS AN IIFE?
 * ----------------
 * A function that is defined and executed immediately:
 * - Function is wrapped in parentheses
 * - Immediately invoked with ()
 * - Creates its own scope
 * - Variables inside are not accessible outside
 * 
 * SYNTAX:
 * ------
 * (function() { code })();
 * (function() { code }());
 * (() => { code })(); // Arrow function IIFE
 */

'use strict';

// ============================================
// BASIC IIFE SYNTAX
// ============================================

// Classic IIFE pattern
(function() {
    console.log("IIFE executed immediately!");
})();

// Alternative syntax (also valid)
(function() {
    console.log("Alternative IIFE syntax");
}());

// Arrow function IIFE
(() => {
    console.log("Arrow function IIFE");
})();

// ============================================
// IIFE WITH PARAMETERS
// ============================================

// Pass arguments to IIFE
(function(name) {
    console.log(`Hello, ${name}!`);
})("Alice"); // "Hello, Alice!"

// Pass multiple arguments
(function(a, b, c) {
    console.log(a + b + c);
})(1, 2, 3); // 6

// Pass variables from outer scope
let message = "Hello from outside";
(function(msg) {
    console.log(msg);
})(message); // "Hello from outside"

// ============================================
// CREATING PRIVATE SCOPE
// ============================================

// Variables inside IIFE are not accessible outside
(function() {
    let privateVar = "I'm private";
    let privateFunction = function() {
        return "Private function";
    };
    
    console.log(privateVar); // Works inside
    console.log(privateFunction()); // Works inside
})();

// console.log(privateVar); // ReferenceError: privateVar is not defined
// console.log(privateFunction()); // ReferenceError

// ============================================
// AVOIDING GLOBAL POLLUTION
// ============================================

// Without IIFE - pollutes global scope
let count = 0;
function increment() {
    count++;
}
increment();
console.log(count); // 1

// With IIFE - keeps variables private
(function() {
    let count = 0;
    function increment() {
        count++;
    }
    increment();
    console.log(count); // 1 (only accessible inside IIFE)
})();

// Global count is still 1 (not affected)

// ============================================
// MODULE PATTERN (BEFORE ES6 MODULES)
// ============================================

// Create a module with public and private members
const Calculator = (function() {
    // Private variables
    let result = 0;
    
    // Private functions
    function validateNumber(num) {
        return typeof num === "number" && !isNaN(num);
    }
    
    // Public API (returned object)
    return {
        add: function(num) {
            if (validateNumber(num)) {
                result += num;
            }
            return this;
        },
        subtract: function(num) {
            if (validateNumber(num)) {
                result -= num;
            }
            return this;
        },
        multiply: function(num) {
            if (validateNumber(num)) {
                result *= num;
            }
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

Calculator.add(10).subtract(3).multiply(2);
console.log(Calculator.getResult()); // 14
Calculator.reset();
console.log(Calculator.getResult()); // 0

// Private members are not accessible
// console.log(Calculator.result); // undefined
// console.log(Calculator.validateNumber); // undefined

// ============================================
// IIFE WITH NAMESPACE
// ============================================

// Create namespace to avoid conflicts
const MyApp = (function() {
    // Private code
    let config = {
        apiUrl: "https://api.example.com",
        timeout: 5000
    };
    
    // Public API
    return {
        getConfig: function() {
            return { ...config }; // Return copy
        },
        setConfig: function(newConfig) {
            config = { ...config, ...newConfig };
        }
    };
})();

console.log(MyApp.getConfig());
MyApp.setConfig({ timeout: 10000 });
console.log(MyApp.getConfig());

// ============================================
// IIFE FOR INITIALIZATION
// ============================================

// Initialize code that runs once
(function() {
    console.log("App initializing...");
    
    // Set up event listeners
    // Initialize components
    // Load configuration
    
    console.log("App initialized!");
})();

// ============================================
// IIFE WITH JQUERY (COMMON PATTERN)
// ============================================

// Common pattern with jQuery (before ES6 modules)
// (function($) {
//     // $ is guaranteed to be jQuery
//     $(document).ready(function() {
//         // jQuery code here
//     });
// })(jQuery);

// ============================================
// IIFE FOR CLOSURES
// ============================================

// Create multiple closures with IIFE
const counters = [];

for (let i = 0; i < 3; i++) {
    counters.push((function(index) {
        return function() {
            return index;
        };
    })(i));
}

console.log(counters[0]()); // 0
console.log(counters[1]()); // 1
console.log(counters[2]()); // 2

// Without IIFE (problematic with var)
const countersBad = [];
for (var i = 0; i < 3; i++) {
    countersBad.push(function() {
        return i; // All return 3!
    });
}

// ============================================
// ASYNC IIFE
// ============================================

// IIFE with async/await
(async function() {
    try {
        // const data = await fetch('/api/data');
        // const result = await data.json();
        console.log("Async IIFE executed");
    } catch (error) {
        console.error("Error:", error);
    }
})();

// ============================================
// EDGE CASES & GOTCHAS
// ============================================

// 1. IIFE must be wrapped in parentheses (or use unary operator)
// function() { console.log("Error"); }(); // SyntaxError

(function() { console.log("Works"); })(); // Works
!function() { console.log("Works"); }(); // Works (unary operator)
+function() { console.log("Works"); }(); // Works (unary operator)

// 2. Semicolon before IIFE (important!)
let x = 5
(function() {
    console.log("This might cause issues");
})();
// Without semicolon, JavaScript might interpret this as:
// let x = 5(function() { ... })(); // Error!

// Better:
let y = 5;
(function() {
    console.log("Safe with semicolon");
})();

// 3. IIFE can return values
const result = (function() {
    return "Returned from IIFE";
})();
console.log(result); // "Returned from IIFE"

// 4. IIFE can be assigned to variable
const myIIFE = (function() {
    let private = "secret";
    return {
        getPrivate: function() {
            return private;
        }
    };
})();

console.log(myIIFE.getPrivate()); // "secret"

// ============================================
// MODERN ALTERNATIVES
// ============================================

// Before ES6 modules, IIFE was used for modules
// Now we have ES6 modules:
// export function myFunction() { ... }
// import { myFunction } from './module.js';

// Before block scope (let/const), IIFE was used for scope
// Now we have let/const:
{
    let privateVar = "I'm scoped";
    // privateVar is not accessible outside block
}

// ============================================
// BEST PRACTICES
// ============================================

// 1. Use IIFE when you need immediate execution and private scope
// ✅ Good: (function() { /* initialization code */ })();

// 2. Use ES6 modules instead of IIFE for modules (modern code)
// ✅ Good: export/import (ES6 modules)
// ⚠️ Acceptable: IIFE module pattern (legacy code)

// 3. Use let/const with blocks instead of IIFE for scope (modern code)
// ✅ Good: { let x = 5; } (block scope)
// ⚠️ Acceptable: (function() { var x = 5; })(); (legacy)

// 4. Always use semicolon before IIFE
// ✅ Good: code; (function() { ... })();
// ❌ Bad: code (function() { ... })(); (might cause issues)

// 5. Use descriptive comments for IIFE purpose
// ✅ Good: // Initialize app configuration
// (function() { ... })();

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Module pattern
const Module = (function() {
    // Private
    let private = "secret";
    
    // Public
    return {
        getPrivate: () => private
    };
})();

// Pattern 2: Namespace
const Namespace = (function() {
    return {
        // Public API
    };
})();

// Pattern 3: Initialization
(function() {
    // Run once on load
})();

// Pattern 4: Closure creation
const closures = [];
for (let i = 0; i < n; i++) {
    closures.push((function(index) {
        return function() { return index; };
    })(i));
}

// ============================================
// PRACTICE TASK
// ============================================
// TODO:
// 1. Create a basic IIFE that executes immediately
// 2. Create an IIFE that accepts parameters
// 3. Create a module using IIFE with public and private members
// 4. Use IIFE to avoid polluting global scope
// 5. Create an IIFE that returns a value
// 6. Use IIFE to create multiple closures in a loop
// 7. Create an async IIFE
// 8. Explain when you would use IIFE vs ES6 modules
// 9. Create an IIFE that initializes application code
// 10. Demonstrate the module pattern with IIFE

